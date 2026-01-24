import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Shield,
  UserPlus,
  Stethoscope,
  TrendingUp,
  Activity,
  ArrowRight,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Appointments", href: "/admin/appointments", icon: Calendar },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Security", href: "/admin/security", icon: Shield },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminDashboard = () => {
  const recentUsers = [
    { name: "Emily Rodriguez", type: "Patient", status: "Active", joined: "2 hours ago" },
    { name: "Dr. Michael Chen", type: "Doctor", status: "Pending", joined: "5 hours ago" },
    { name: "Sarah Thompson", type: "Patient", status: "Active", joined: "1 day ago" },
    { name: "Dr. Lisa Park", type: "Doctor", status: "Active", joined: "2 days ago" },
  ];

  const appointmentStats = [
    { label: "Completed", value: 1248, icon: CheckCircle2, color: "text-success" },
    { label: "Pending", value: 56, icon: Clock, color: "text-warning" },
    { label: "Cancelled", value: 23, icon: XCircle, color: "text-destructive" },
  ];

  const platformMetrics = [
    { label: "User Growth", value: "+18%", trend: "up" },
    { label: "Appointment Rate", value: "+24%", trend: "up" },
    { label: "Avg. Session", value: "12m", trend: "neutral" },
    { label: "Satisfaction", value: "4.8/5", trend: "up" },
  ];

  return (
    <DashboardLayout
      navItems={navItems}
      userType="admin"
      userName="Admin User"
    >
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Admin Dashboard 🛡️
            </h1>
            <p className="text-muted-foreground mt-1">
              Platform overview and management tools
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <BarChart3 className="w-5 h-5" />
              Generate Report
            </Button>
            <Button variant="hero">
              <UserPlus className="w-5 h-5" />
              Add User
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard
            title="Total Users"
            value="12,458"
            change="+342 this month"
            changeType="positive"
            icon={Users}
            iconColor="text-primary"
            iconBg="bg-primary/10"
          />
          <StatCard
            title="Active Doctors"
            value="186"
            change="+8 this week"
            changeType="positive"
            icon={Stethoscope}
            iconColor="text-success"
            iconBg="bg-success/10"
          />
          <StatCard
            title="Total Appointments"
            value="3,842"
            change="This month"
            changeType="neutral"
            icon={Calendar}
            iconColor="text-accent"
            iconBg="bg-accent/10"
          />
          <StatCard
            title="Revenue"
            value="$48.2K"
            change="+12% from last month"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-warning"
            iconBg="bg-warning/10"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Recent Users */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Recent Users
              </h2>
              <Button variant="ghost" size="sm">
                View All Users
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="dashboard-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Joined</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-secondary/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-semibold">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium text-foreground">{user.name}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`badge-status ${user.type === "Doctor" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
                          {user.type}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`badge-status ${user.status === "Active" ? "badge-success" : "badge-warning"}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{user.joined}</td>
                      <td className="p-4">
                        <button className="p-2 rounded-lg hover:bg-secondary">
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Appointment Statistics */}
          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Appointment Stats
            </h2>
            <div className="dashboard-card p-5 space-y-4">
              {appointmentStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-foreground">{stat.label}</span>
                  </div>
                  <span className="font-semibold text-foreground">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Metrics */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Platform Metrics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformMetrics.map((metric, index) => (
              <div key={index} className="dashboard-card p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                  {metric.trend === "up" && (
                    <TrendingUp className="w-4 h-4 text-success" />
                  )}
                </div>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users, label: "Manage Users", color: "bg-primary/10 text-primary" },
            { icon: Stethoscope, label: "Verify Doctors", color: "bg-success/10 text-success" },
            { icon: BarChart3, label: "View Reports", color: "bg-accent/10 text-accent" },
            { icon: Shield, label: "Security Settings", color: "bg-warning/10 text-warning" },
          ].map((action, index) => (
            <button
              key={index}
              className="dashboard-card p-5 flex items-center gap-4 hover:shadow-md transition-shadow text-left"
            >
              <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
                <action.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-foreground">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
