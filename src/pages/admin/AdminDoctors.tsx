import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Stethoscope, Calendar, Settings, Search, Mail, Phone, MoreHorizontal } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { name: "Appointments", href: "/admin/appointments", icon: Calendar },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminDoctors = () => {
  const doctors = [
    { id: "1", name: "Dr. Sarah Johnson", specialty: "General Physician", email: "sarah.j@medicare.com", phone: "+1 (555) 123-4567", status: "active", patients: 248 },
    { id: "2", name: "Dr. Michael Chen", specialty: "Cardiologist", email: "michael.c@medicare.com", phone: "+1 (555) 234-5678", status: "active", patients: 186 },
    { id: "3", name: "Dr. Emily Williams", specialty: "Dermatologist", email: "emily.w@medicare.com", phone: "+1 (555) 345-6789", status: "pending", patients: 0 },
    { id: "4", name: "Dr. James Wilson", specialty: "Orthopedic", email: "james.w@medicare.com", phone: "+1 (555) 456-7890", status: "active", patients: 124 },
    { id: "5", name: "Dr. Lisa Anderson", specialty: "Neurologist", email: "lisa.a@medicare.com", phone: "+1 (555) 567-8901", status: "active", patients: 95 },
    { id: "6", name: "Dr. Robert Brown", specialty: "Pediatrician", email: "robert.b@medicare.com", phone: "+1 (555) 678-9012", status: "pending", patients: 0 },
  ];

  return (
    <DashboardLayout navItems={navItems} userType="admin" userName="Admin User">
      <div className="space-y-6">
        <div><h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Doctors</h1><p className="text-muted-foreground mt-1">Manage registered doctors</p></div>
        <div className="relative max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><Input placeholder="Search doctors..." className="pl-10" /></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="dashboard-card p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><span className="text-primary font-semibold text-lg">{doctor.name.split(" ")[1]?.charAt(0)}</span></div>
                  <div><h3 className="font-semibold text-foreground">{doctor.name}</h3><p className="text-sm text-muted-foreground">{doctor.specialty}</p></div>
                </div>
                <button className="p-2 rounded-lg hover:bg-secondary"><MoreHorizontal className="w-4 h-4 text-muted-foreground" /></button>
              </div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2 text-muted-foreground"><Mail className="w-4 h-4" /><span className="truncate">{doctor.email}</span></div>
                <div className="flex items-center gap-2 text-muted-foreground"><Phone className="w-4 h-4" /><span>{doctor.phone}</span></div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className={`badge-status ${doctor.status === "active" ? "badge-success" : "badge-warning"} capitalize`}>{doctor.status}</span>
                <span className="text-sm text-muted-foreground">{doctor.patients} patients</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDoctors;
