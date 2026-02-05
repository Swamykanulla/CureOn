import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AddPharmacyModal from "@/components/admin/AddPharmacyModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Stethoscope,
  Calendar,
  Settings,
  Search,
  Mail,
  Phone,
  MoreVertical,
  UserPlus,
  Pencil,
  Trash2,
  Users,
  Pill,
  FlaskConical,
  MapPin,
  FileText,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Doctors", href: "/admin/doctors", icon: Stethoscope },
  { name: "Patients", href: "/admin/patients", icon: Users },
  { name: "Pharmacy", href: "/admin/pharmacy", icon: Pill },
  { name: "Labs", href: "/admin/labs", icon: FlaskConical },
  { name: "Appointments", href: "/admin/appointments", icon: Calendar },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminPharmacy = () => {
  const [addPharmacyModalOpen, setAddPharmacyModalOpen] = useState(false);
  const [editPharmacyModalOpen, setEditPharmacyModalOpen] = useState(false);
  const [editingPharmacy, setEditingPharmacy] = useState(null);
  const [pharmacies, setPharmacies] = useState([
    { id: "1", name: "HealthPlus Pharmacy", license: "PH-12345", email: "contact@healthplus.com", phone: "+1 (555) 123-4567", address: "123 Main St, New York", status: "active", orders: 156 },
    { id: "2", name: "City Care Pharmacy", license: "PH-67890", email: "info@citycare.com", phone: "+1 (555) 234-5678", address: "456 Oak Ave, Los Angeles", status: "active", orders: 89 },
    { id: "3", name: "GreenCross Meds", license: "PH-11223", email: "support@greencross.com", phone: "+1 (555) 345-6789", address: "789 Pine Ln, Chicago", status: "pending", orders: 0 },
  ]);

  const handlePharmacyAdded = (pharmacyData) => {
    const newPharmacy = {
      id: Date.now().toString(),
      name: pharmacyData.name,
      license: pharmacyData.licenseNumber,
      email: pharmacyData.email,
      phone: pharmacyData.phone,
      address: pharmacyData.address,
      status: "pending",
      orders: 0,
    };
    setPharmacies((prev) => [...prev, newPharmacy]);
  };

  const handleEditClick = (pharmacy) => {
    setEditingPharmacy(pharmacy);
    setEditPharmacyModalOpen(true);
  };

  const handleDeleteClick = (pharmacyId) => {
    setPharmacies(pharmacies.filter((p) => p.id !== pharmacyId));
  };

  const handleEditSave = () => {
    if (editingPharmacy) {
      setPharmacies(pharmacies.map((p) => (p.id === editingPharmacy.id ? editingPharmacy : p)));
      setEditPharmacyModalOpen(false);
      setEditingPharmacy(null);
    }
  };

  return (
    <DashboardLayout navItems={navItems} userType="admin">
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Pharmacy</h1>
            <p className="text-muted-foreground mt-1">Manage registered pharmacies</p>
          </div>
          <Button variant="hero" onClick={() => setAddPharmacyModalOpen(true)}>
            <UserPlus className="w-5 h-5" />
            Add Pharmacy
          </Button>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search pharmacies..." className="pl-10" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pharmacies.map((pharmacy) => (
            <div 
              key={pharmacy.id} 
              className="dashboard-card relative hover:shadow-lg transition-all group"
            >
              <div className="block p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">{pharmacy.name.split(" ")[0]?.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{pharmacy.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <FileText className="w-3 h-3" />
                        <span>{pharmacy.license}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{pharmacy.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{pharmacy.phone}</span>
                  </div>
                  {pharmacy.address && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{pharmacy.address}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className={`badge-status ${pharmacy.status === "active" ? "badge-success" : "badge-warning"} capitalize`}>{pharmacy.status}</span>
                  <span className="text-sm text-muted-foreground">{pharmacy.orders} orders</span>
                </div>
              </div>
              
              <div className="absolute top-5 right-5 z-10">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                    <button className="p-2 rounded-lg hover:bg-secondary">
                      <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEditClick(pharmacy)}>
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDeleteClick(pharmacy.id)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Pharmacy Modal */}
      <AddPharmacyModal
        open={addPharmacyModalOpen}
        onOpenChange={setAddPharmacyModalOpen}
        onPharmacyAdded={handlePharmacyAdded}
      />

      {/* Edit Pharmacy Modal */}
      <Dialog open={editPharmacyModalOpen} onOpenChange={setEditPharmacyModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-2">
              <Pencil className="w-5 h-5 text-primary" />
              Edit Pharmacy
            </DialogTitle>
          </DialogHeader>
          {editingPharmacy && (
            <div className="py-4 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Pharmacy Name</Label>
                <Input
                  id="edit-name"
                  value={editingPharmacy.name}
                  onChange={(e) => setEditingPharmacy({ ...editingPharmacy, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-license">License Number</Label>
                <Input
                  id="edit-license"
                  value={editingPharmacy.license}
                  onChange={(e) => setEditingPharmacy({ ...editingPharmacy, license: e.target.value })}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-email">Email</Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={editingPharmacy.email}
                    onChange={(e) => setEditingPharmacy({ ...editingPharmacy, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-phone">Phone</Label>
                  <Input
                    id="edit-phone"
                    type="tel"
                    value={editingPharmacy.phone}
                    onChange={(e) => setEditingPharmacy({ ...editingPharmacy, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-address">Address</Label>
                <Input
                  id="edit-address"
                  value={editingPharmacy.address}
                  onChange={(e) => setEditingPharmacy({ ...editingPharmacy, address: e.target.value })}
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setEditPharmacyModalOpen(false)} className="flex-1">
                  Cancel
                </Button>
                <Button variant="hero" onClick={handleEditSave} className="flex-1">
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AdminPharmacy;
