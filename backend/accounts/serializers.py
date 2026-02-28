from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import PatientProfile, DoctorProfile, PharmacyProfile, LabProfile
from django.db import transaction

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'is_active', 'date_joined']

class ExtendedUserSerializer(serializers.ModelSerializer):
    specialization = serializers.SerializerMethodField()
    phone = serializers.SerializerMethodField()
    license_number = serializers.SerializerMethodField()
    address = serializers.SerializerMethodField()
    age = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'is_active', 'date_joined', 'first_name', 'last_name', 'specialization', 'phone', 'license_number', 'address', 'age', 'gender']

    def get_specialization(self, obj):
        p = getattr(obj, 'doctor_profile', None)
        return p.specialization if p else None

    def get_phone(self, obj):
        if obj.role == User.Role.DOCTOR:
            p = getattr(obj, 'doctor_profile', None)
            return p.phone if p else None
        if obj.role == User.Role.PHARMACY:
            p = getattr(obj, 'pharmacy_profile', None)
            return p.phone if p else None
        if obj.role == User.Role.LAB:
            p = getattr(obj, 'lab_profile', None)
            return p.phone if p else None
        if obj.role == User.Role.PATIENT:
            p = getattr(obj, 'patient_profile', None)
            return p.phone if p else None
        return None

    def get_license_number(self, obj):
        if obj.role == User.Role.PHARMACY:
            p = getattr(obj, 'pharmacy_profile', None)
            return p.license_number if p else None
        if obj.role == User.Role.LAB:
            p = getattr(obj, 'lab_profile', None)
            return p.license_number if p else None
        return None

    def get_address(self, obj):
        if obj.role == User.Role.PHARMACY:
            p = getattr(obj, 'pharmacy_profile', None)
            return p.address if p else None
        if obj.role == User.Role.LAB:
            p = getattr(obj, 'lab_profile', None)
            return p.address if p else None
        if obj.role == User.Role.PATIENT:
            p = getattr(obj, 'patient_profile', None)
            return p.address if p else None
        return None

    def get_age(self, obj):
        p = getattr(obj, 'patient_profile', None)
        return p.age if p else None

    def get_gender(self, obj):
        p = getattr(obj, 'patient_profile', None)
        return p.gender if p else None

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']

    def create(self, validated_data):
        # Default role is PATIENT
        validated_data['role'] = User.Role.PATIENT
        user = User.objects.create_user(**validated_data)
        return user

class CreateStaffSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    role = serializers.ChoiceField(choices=User.Role.choices)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role', 'first_name', 'last_name']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class AdminUserUpdateSerializer(serializers.ModelSerializer):
    specialization = serializers.CharField(required=False, allow_null=True, allow_blank=True)
    phone = serializers.CharField(required=False, allow_null=True, allow_blank=True)
    license_number = serializers.CharField(required=False, allow_null=True, allow_blank=True)
    address = serializers.CharField(required=False, allow_null=True, allow_blank=True)
    age = serializers.IntegerField(required=False, allow_null=True)
    gender = serializers.CharField(required=False, allow_null=True, allow_blank=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'role', 'is_active',
                  'specialization', 'phone', 'license_number', 'address', 'age', 'gender']

    @transaction.atomic
    def update(self, instance, validated_data):
        for field in ['username', 'email', 'first_name', 'last_name', 'is_active']:
            if field in validated_data:
                setattr(instance, field, validated_data[field])
        instance.save()

        role = instance.role
        if role == User.Role.DOCTOR:
            profile, _ = DoctorProfile.objects.get_or_create(user=instance)
            if 'specialization' in validated_data:
                profile.specialization = validated_data.get('specialization')
            if 'phone' in validated_data:
                profile.phone = validated_data.get('phone')
            profile.save()
        elif role == User.Role.PHARMACY:
            profile, _ = PharmacyProfile.objects.get_or_create(user=instance)
            if 'license_number' in validated_data:
                profile.license_number = validated_data.get('license_number')
            if 'phone' in validated_data:
                profile.phone = validated_data.get('phone')
            if 'address' in validated_data:
                profile.address = validated_data.get('address')
            profile.save()
        elif role == User.Role.LAB:
            profile, _ = LabProfile.objects.get_or_create(user=instance)
            if 'license_number' in validated_data:
                profile.license_number = validated_data.get('license_number')
            if 'phone' in validated_data:
                profile.phone = validated_data.get('phone')
            if 'address' in validated_data:
                profile.address = validated_data.get('address')
            profile.save()
        elif role == User.Role.PATIENT:
            profile, _ = PatientProfile.objects.get_or_create(user=instance)
            if 'age' in validated_data:
                profile.age = validated_data.get('age')
            if 'gender' in validated_data:
                profile.gender = validated_data.get('gender')
            if 'phone' in validated_data:
                profile.phone = validated_data.get('phone')
            if 'address' in validated_data:
                profile.address = validated_data.get('address')
            profile.save()

        return instance
