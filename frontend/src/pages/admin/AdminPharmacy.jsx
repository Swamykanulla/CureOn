import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Stethoscope,
  Calendar,
  Settings,
  Mail,
  Phone,
  Users,
  Pill,
  FlaskConical,
  MapPin,
  FileText,
  Package,
  ShoppingCart,
  Activity
} from "lucide-react";
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
  const navigate = useNavigate();
  // Single CureOn Pharmacy Data
  const pharmacy = {
    id: "cureon-pharma-001",
    name: "CureOn Pharmacy",
    license: "PH-CUREON-001",
    email: "pharmacy@cureon.health",
    phone: "+1 (800) CURE-ON",
    address: "123 Health Tech Blvd, Innovation District",
    status: "active",
    orders: 1250,
    inventoryCount: 4500,
    pendingOrders: 12
  };

  return (
    <DashboardLayout navItems={navItems} userType="admin">
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Pharmacy Management</h1>
            <p className="text-muted-foreground mt-1">Manage CureOn's central pharmacy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="dashboard-card relative hover:shadow-lg transition-all">
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Pill className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{pharmacy.name}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <FileText className="w-4 h-4" />
                      <span className="font-mono">{pharmacy.license}</span>
                      <span className="mx-2">•</span>
                      <span className="badge-status badge-success capitalize">{pharmacy.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                   <div className="text-right hidden md:block">
                      <p className="text-sm text-muted-foreground">Total Orders</p>
                      <p className="text-xl font-bold">{pharmacy.orders}</p>
                   </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                  <div className="p-2 bg-background rounded-full shadow-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-sm">{pharmacy.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                  <div className="p-2 bg-background rounded-full shadow-sm">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-sm">{pharmacy.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                  <div className="p-2 bg-background rounded-full shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="font-medium text-sm">{pharmacy.address}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button 
                  className="h-auto py-4 px-6 flex items-center justify-between group" 
                  variant="outline"
                  onClick={() => navigate("/admin/pharmacy/inventory")}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-100 transition-colors">
                      <Package className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Inventory & Stocks</h3>
                      <p className="text-sm text-muted-foreground">Manage medicines, stock levels, and categories</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-foreground">{pharmacy.inventoryCount}</span>
                    <p className="text-xs text-muted-foreground">Items</p>
                  </div>
                </Button>

                <Button 
                  className="h-auto py-4 px-6 flex items-center justify-between group" 
                  variant="outline"
                  onClick={() => navigate("/admin/pharmacy/orders")}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-100 transition-colors">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Orders History</h3>
                      <p className="text-sm text-muted-foreground">View and manage prescription orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-foreground">{pharmacy.pendingOrders}</span>
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminPharmacy;
