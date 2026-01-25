import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  MessageSquare,
  Pill,
  Settings,
  Upload,
  File,
  Image,
  Trash2,
  Download,
  Bot,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/patient/dashboard", icon: LayoutDashboard },
  { name: "Appointments", href: "/patient/appointments", icon: Calendar },
  { name: "Medical Records", href: "/patient/records", icon: FileText },
  { name: "Prescriptions", href: "/patient/prescriptions", icon: Pill },
  { name: "Chatbot", href: "/patient/chatbot", icon: Bot },
  { name: "Messages", href: "/patient/messages", icon: MessageSquare },
  { name: "Settings", href: "/patient/settings", icon: Settings },
];

interface MedicalRecord {
  id: string;
  name: string;
  type: string;
  date: string;
  fileType: "pdf" | "image";
  size: string;
}

const PatientRecords = () => {
  const [records, setRecords] = useState<MedicalRecord[]>([
    {
      id: "1",
      name: "Blood Test Results",
      type: "Lab Report",
      date: "Jan 15, 2026",
      fileType: "pdf",
      size: "245 KB",
    },
    {
      id: "2",
      name: "Chest X-Ray",
      type: "Imaging",
      date: "Jan 10, 2026",
      fileType: "image",
      size: "1.2 MB",
    },
    {
      id: "3",
      name: "General Checkup Report",
      type: "Consultation",
      date: "Dec 20, 2025",
      fileType: "pdf",
      size: "156 KB",
    },
    {
      id: "4",
      name: "MRI Scan Results",
      type: "Imaging",
      date: "Dec 5, 2025",
      fileType: "image",
      size: "3.4 MB",
    },
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newRecord: MedicalRecord = {
        id: Date.now().toString(),
        name: file.name,
        type: "Uploaded Document",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        fileType: file.type.includes("pdf") ? "pdf" : "image",
        size: `${(file.size / 1024).toFixed(0)} KB`,
      };
      setRecords([newRecord, ...records]);
    }
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((record) => record.id !== id));
  };

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
              Medical Records
            </h1>
            <p className="text-muted-foreground mt-1">
              Upload and manage your medical documents
            </p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="dashboard-card p-6">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">
            Upload New Record
          </h2>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
            <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-medium text-foreground mb-2">
              Drop files here or click to upload
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Supports PDF, JPG, PNG (Max 10MB)
            </p>
            <Label htmlFor="file-upload" className="cursor-pointer">
              <Input
                id="file-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button variant="outline" asChild>
                <span>
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </span>
              </Button>
            </Label>
          </div>
        </div>

        {/* Records List */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Your Records ({records.length})
          </h2>
          <div className="grid gap-4">
            {records.map((record) => (
              <div
                key={record.id}
                className="dashboard-card p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {record.fileType === "pdf" ? (
                      <File className="w-6 h-6 text-primary" />
                    ) : (
                      <Image className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{record.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{record.type}</span>
                      <span>•</span>
                      <span>{record.date}</span>
                      <span>•</span>
                      <span>{record.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(record.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientRecords;
