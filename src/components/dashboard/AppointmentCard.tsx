import { Calendar, Clock, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppointmentCardProps {
  doctorName?: string;
  patientName?: string;
  specialty?: string;
  date: string;
  time: string;
  type: "video" | "in-person";
  status: "upcoming" | "completed" | "cancelled";
  avatar?: string;
  showActions?: boolean;
  userType?: "patient" | "doctor";
}

const AppointmentCard = ({
  doctorName,
  patientName,
  specialty,
  date,
  time,
  type,
  status,
  avatar,
  showActions = true,
  userType = "patient",
}: AppointmentCardProps) => {
  const statusStyles = {
    upcoming: "badge-pending",
    completed: "badge-success",
    cancelled: "bg-destructive/10 text-destructive",
  };

  const name = userType === "patient" ? doctorName : patientName;

  return (
    <div className="dashboard-card p-5 hover-lift">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-xl object-cover" />
          ) : (
            <span className="text-primary font-semibold">
              {name?.charAt(0) || "?"}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h4 className="font-semibold text-foreground truncate">
                {userType === "patient" ? `Dr. ${doctorName}` : patientName}
              </h4>
              {specialty && (
                <p className="text-sm text-muted-foreground">{specialty}</p>
              )}
            </div>
            <span className={`badge-status ${statusStyles[status]} capitalize`}>
              {status}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {type === "video" ? (
                <Video className="w-4 h-4 text-primary" />
              ) : (
                <MapPin className="w-4 h-4 text-accent" />
              )}
              <span className="capitalize">{type}</span>
            </div>
          </div>

          {showActions && status === "upcoming" && (
            <div className="flex items-center gap-2 mt-4">
              {type === "video" && (
                <Button size="sm" variant="default">
                  Join Call
                </Button>
              )}
              <Button size="sm" variant="outline">
                Reschedule
              </Button>
              <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
