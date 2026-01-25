import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Clock,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/doctor/dashboard", icon: LayoutDashboard },
  { name: "Appointments", href: "/doctor/appointments", icon: Calendar },
  { name: "Patients", href: "/doctor/patients", icon: Users },
  { name: "Manage Availability", href: "/doctor/availability", icon: Clock },
  { name: "Settings", href: "/doctor/settings", icon: Settings },
];

const DoctorAppointments = () => {
  const todayAppointments = [
    {
      patientName: "Emily Rodriguez",
      date: "Today",
      time: "10:00 AM",
      type: "video" as const,
      status: "upcoming" as const,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      patientName: "James Wilson",
      date: "Today",
      time: "11:30 AM",
      type: "in-person" as const,
      status: "upcoming" as const,
    },
    {
      patientName: "Sarah Chen",
      date: "Today",
      time: "2:00 PM",
      type: "video" as const,
      status: "upcoming" as const,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  const upcomingAppointments = [
    {
      patientName: "Michael Brown",
      date: "Jan 26, 2026",
      time: "9:00 AM",
      type: "in-person" as const,
      status: "upcoming" as const,
    },
    {
      patientName: "Lisa Anderson",
      date: "Jan 27, 2026",
      time: "10:30 AM",
      type: "video" as const,
      status: "upcoming" as const,
    },
    {
      patientName: "David Martinez",
      date: "Jan 28, 2026",
      time: "2:00 PM",
      type: "in-person" as const,
      status: "upcoming" as const,
    },
  ];

  const completedAppointments = [
    {
      patientName: "Jennifer Smith",
      date: "Jan 20, 2026",
      time: "10:00 AM",
      type: "video" as const,
      status: "completed" as const,
    },
    {
      patientName: "Robert Johnson",
      date: "Jan 19, 2026",
      time: "3:00 PM",
      type: "in-person" as const,
      status: "completed" as const,
    },
    {
      patientName: "Amanda White",
      date: "Jan 18, 2026",
      time: "11:00 AM",
      type: "video" as const,
      status: "completed" as const,
    },
  ];

  const cancelledAppointments = [
    {
      patientName: "Thomas Lee",
      date: "Jan 22, 2026",
      time: "1:00 PM",
      type: "video" as const,
      status: "cancelled" as const,
    },
  ];

  return (
    <DashboardLayout
      navItems={navItems}
      userType="doctor"
      userName="Dr. Sarah Johnson"
      userAvatar="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Appointments
          </h1>
          <p className="text-muted-foreground mt-1">
            View and manage your appointments
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full max-w-lg grid-cols-4">
            <TabsTrigger value="today">
              Today ({todayAppointments.length})
            </TabsTrigger>
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingAppointments.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedAppointments.length})
            </TabsTrigger>
            <TabsTrigger value="cancelled">
              Cancelled ({cancelledAppointments.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="mt-6">
            <div className="space-y-4">
              {todayAppointments.length > 0 ? (
                todayAppointments.map((appointment, index) => (
                  <AppointmentCard
                    key={index}
                    {...appointment}
                    userType="doctor"
                  />
                ))
              ) : (
                <div className="dashboard-card p-8 text-center">
                  <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">No appointments today</h3>
                  <p className="text-muted-foreground">Enjoy your free day!</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <AppointmentCard
                  key={index}
                  {...appointment}
                  userType="doctor"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="space-y-4">
              {completedAppointments.map((appointment, index) => (
                <AppointmentCard
                  key={index}
                  {...appointment}
                  userType="doctor"
                  showActions={false}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cancelled" className="mt-6">
            <div className="space-y-4">
              {cancelledAppointments.length > 0 ? (
                cancelledAppointments.map((appointment, index) => (
                  <AppointmentCard
                    key={index}
                    {...appointment}
                    userType="doctor"
                    showActions={false}
                  />
                ))
              ) : (
                <div className="dashboard-card p-8 text-center">
                  <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-foreground">No cancelled appointments</h3>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DoctorAppointments;
