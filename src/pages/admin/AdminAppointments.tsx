import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Stethoscope, Calendar, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { name: "Appointments", href: "/admin/appointments", icon: Calendar },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminAppointments = () => {
  const upcomingAppointments = [
    { doctorName: "Sarah Johnson", patientName: "Emily Rodriguez", date: "Jan 25, 2026", time: "10:00 AM", type: "video" as const, status: "upcoming" as const },
    { doctorName: "Michael Chen", patientName: "James Wilson", date: "Jan 26, 2026", time: "2:30 PM", type: "in-person" as const, status: "upcoming" as const },
  ];
  const completedAppointments = [
    { doctorName: "Sarah Johnson", patientName: "Alex Thompson", date: "Jan 20, 2026", time: "10:00 AM", type: "video" as const, status: "completed" as const },
    { doctorName: "Lisa Anderson", patientName: "Maria Garcia", date: "Jan 19, 2026", time: "3:00 PM", type: "in-person" as const, status: "completed" as const },
  ];
  const cancelledAppointments = [
    { doctorName: "James Wilson", patientName: "Robert Lee", date: "Jan 22, 2026", time: "1:00 PM", type: "video" as const, status: "cancelled" as const },
  ];

  return (
    <DashboardLayout navItems={navItems} userType="admin" userName="Admin User">
      <div className="space-y-6">
        <div><h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">All Appointments</h1><p className="text-muted-foreground mt-1">View and manage all platform appointments</p></div>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming ({upcomingAppointments.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedAppointments.length})</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled ({cancelledAppointments.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-6"><div className="space-y-4">{upcomingAppointments.map((a, i) => <AppointmentCard key={i} {...a} userType="doctor" />)}</div></TabsContent>
          <TabsContent value="completed" className="mt-6"><div className="space-y-4">{completedAppointments.map((a, i) => <AppointmentCard key={i} {...a} userType="doctor" showActions={false} />)}</div></TabsContent>
          <TabsContent value="cancelled" className="mt-6"><div className="space-y-4">{cancelledAppointments.map((a, i) => <AppointmentCard key={i} {...a} userType="doctor" showActions={false} />)}</div></TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminAppointments;
