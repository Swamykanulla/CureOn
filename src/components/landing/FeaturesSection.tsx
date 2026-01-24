import { 
  Video, 
  Calendar, 
  FileText, 
  Shield, 
  Clock, 
  MessageSquare,
  Stethoscope,
  Pill
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Video Consultations",
      description: "Connect with doctors through secure HD video calls from anywhere in the world.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book appointments with just a few clicks. View doctor availability in real-time.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Access your complete medical history, prescriptions, and reports anytime.",
      color: "bg-success/10 text-success",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is encrypted and protected with enterprise-grade security.",
      color: "bg-warning/10 text-warning",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock medical assistance for emergencies and urgent care needs.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MessageSquare,
      title: "Instant Messaging",
      description: "Chat with healthcare providers for quick questions and follow-ups.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Stethoscope,
      title: "Expert Doctors",
      description: "Access to verified specialists across 50+ medical specializations.",
      color: "bg-success/10 text-success",
    },
    {
      icon: Pill,
      title: "E-Prescriptions",
      description: "Receive digital prescriptions delivered directly to your preferred pharmacy.",
      color: "bg-warning/10 text-warning",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for modern healthcare, accessible from your device. 
            Quality care made simple and convenient.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group dashboard-card p-6 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
