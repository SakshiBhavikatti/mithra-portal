import { useEffect, useState } from "react";
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
  LayoutGrid,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [narrowOpen, setNarrowOpen] = useState(false);
  const [isLgUp, setIsLgUp] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsLgUp(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const showList = isLgUp || narrowOpen;

  return (
    <section
      className={cn(
        `
        flex min-h-0 flex-col
        rounded-3xl

        border border-white/30 dark:border-white/[0.06]

        bg-white/55 dark:bg-[#1C1C1E]/70

        backdrop-blur-2xl

        p-4 sm:p-5

        shadow-[0_10px_35px_rgba(0,0,0,0.06)]
        dark:shadow-[0_10px_35px_rgba(0,0,0,0.28)]

        transition-all duration-300

        hover:border-[#EB0A1E]/10
        hover:shadow-[0_18px_45px_rgba(235,10,30,0.10)]
      `,
        "h-full max-lg:max-h-[min(70vh,520px)] lg:min-h-0 lg:flex-1"
      )}
    >
      <button
        type="button"
        onClick={() => setNarrowOpen((o) => !o)}
        className="lg:hidden w-full flex items-center justify-between gap-3 text-left rounded-xl px-2 py-2 -mx-1 shrink-0 hover:bg-accent/40 transition-colors"
        aria-expanded={narrowOpen}
      >
        <div className="flex items-center gap-3 min-w-0">
          <LayoutGrid className="w-5 h-5 text-primary shrink-0" />

          <div className="min-w-0">
            <h2 className="font-semibold text-foreground text-xl">
              Applications
            </h2>

            <p className="text-sm text-muted-foreground mt-1">
              Internal and external tools
            </p>
          </div>
        </div>

        {narrowOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>

      <div className="mb-5 shrink-0 hidden lg:block">
        <h2 className="text-xl font-semibold text-foreground">
          Applications
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Internal and external tools
        </p>
      </div>

      {showList && (
        <div
          className={cn(
            "min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-1 pb-2 sm:space-y-4 sm:px-1.5",
            "max-lg:mt-4 max-lg:max-h-[min(58vh,480px)]",
            "lg:mt-0"
          )}
        >
          {apps.map((app, index) => (
            <AppCard key={app.title} {...app} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ApplicationsGrid;