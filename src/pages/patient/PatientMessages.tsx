import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  MessageSquare,
  Pill,
  Settings,
  Plus,
  Search,
  Bot,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const navItems = [
  { name: "Dashboard", href: "/patient/dashboard", icon: LayoutDashboard },
  { name: "Appointments", href: "/patient/appointments", icon: Calendar },
  { name: "Medical Records", href: "/patient/records", icon: FileText },
  { name: "Prescriptions", href: "/patient/prescriptions", icon: Pill },
  { name: "Chatbot", href: "/patient/chatbot", icon: Bot },
  { name: "Messages", href: "/patient/messages", icon: MessageSquare },
  { name: "Settings", href: "/patient/settings", icon: Settings },
];

const PatientMessages = () => {
  const conversations = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "General Physician",
      lastMessage: "Your test results look good. Let me know if you have any questions.",
      time: "2h ago",
      unread: 2,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      lastMessage: "Please remember to take your medication as prescribed.",
      time: "1d ago",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "3",
      name: "Dr. Emily Williams",
      specialty: "Dermatologist",
      lastMessage: "See you at your next appointment!",
      time: "3d ago",
      unread: 0,
    },
  ];

  return (
    <DashboardLayout
      navItems={navItems}
      userType="patient"
      userName="Alex Thompson"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Messages
            </h1>
            <p className="text-muted-foreground mt-1">
              Communicate with your healthcare providers
            </p>
          </div>
          <Button variant="hero">
            <Plus className="w-5 h-5" />
            New Message
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search conversations..." className="pl-10" />
        </div>

        {/* Conversations List */}
        <div className="dashboard-card divide-y divide-border">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {conversation.avatar ? (
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-primary font-semibold">
                      {conversation.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{conversation.name}</h3>
                      <p className="text-sm text-muted-foreground">{conversation.specialty}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Note */}
        <div className="text-center text-sm text-muted-foreground py-4">
          Select a conversation to view messages
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientMessages;
