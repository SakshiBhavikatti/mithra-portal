import AppCard from "./AppCard";
import {
  Gift,
  FileText,
  Landmark,
  ShieldAlert,
  ShoppingBag,
  BarChart3,
  Calendar,
  Plane,
} from "lucide-react";

const apps = [
  {
    title: "Birthday Hamper",
    icon: <Gift />,
  },
  {
    title: "E-Forms",
    icon: <FileText />,
  },
  {
    title: "Company Loans",
    icon: <Landmark />,
  },
  {
    title: "Grievance",
    icon: <ShieldAlert />,
  },
  {
    title: "Metro Cash & Carry",
    icon: <ShoppingBag />,
  },
  {
    title: "Value Analysis",
    icon: <BarChart3 />,
  },
  {
    title: "KRONOS",
    icon: <Calendar />,
  },
  {
    title: "Make My Trip",
    icon: <Plane />,
  },
];

function ApplicationsGrid() {
  return (
    <section className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-foreground">
          Applications
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Internal and external tools
        </p>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-4 pr-2">
        {apps.map((app, index) => (
          <AppCard key={app.title} {...app} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ApplicationsGrid;