import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Clock,
  Settings,
  User,
  Bell,
  Shield,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/doctor/dashboard", icon: LayoutDashboard },
  { name: "Appointments", href: "/doctor/appointments", icon: Calendar },
  { name: "Patients", href: "/doctor/patients", icon: Users },
  { name: "Manage Availability", href: "/doctor/availability", icon: Clock },
  { name: "Settings", href: "/doctor/settings", icon: Settings },
];

const DoctorSettings = () => {
  return (
    <DashboardLayout
      navItems={navItems}
      userType="doctor"
      userName="Dr. Sarah Johnson"
      userAvatar="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    >
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your profile and preferences
          </p>
        </div>

        {/* Profile Section */}
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Profile Information
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Sarah" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Johnson" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="dr.sarah.johnson@medicare.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 987-6543" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Input id="specialty" defaultValue="General Physician" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="license">License Number</Label>
              <Input id="license" defaultValue="MD-12345678" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                defaultValue="Board-certified General Physician with over 10 years of experience in primary care, preventive medicine, and chronic disease management."
              />
            </div>
          </div>
          <Button className="mt-6">Save Changes</Button>
        </div>

        {/* Notifications Section */}
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Notification Preferences
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">New Appointment Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified when a patient books an appointment</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Appointment Reminders</p>
                <p className="text-sm text-muted-foreground">Receive reminders before scheduled appointments</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Patient Messages</p>
                <p className="text-sm text-muted-foreground">Get notified of new patient messages</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Cancellation Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified when appointments are cancelled</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="dashboard-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Security
            </h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button variant="outline">Update Password</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorSettings;
