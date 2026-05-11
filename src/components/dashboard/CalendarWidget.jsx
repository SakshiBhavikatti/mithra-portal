import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { dashboardPastelThemes } from "@/lib/dashboardPastelThemes";

const reminders = [
  { title: "Team Meeting", date: "12 May" },
  { title: "Salary Processing", date: "18 May" },
  { title: "HR Review", date: "25 May" },
  { title: "Project Deadline", date: "30 May" },
];

const cardColors = [
  {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-500 dark:text-blue-300",
  },
  {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    iconBg: "bg-violet-100 dark:bg-violet-900/50",
    iconColor: "text-violet-500 dark:text-violet-300",
  },
];

const flipVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.96,
  }),

  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },

  exit: (direction) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.22,
      ease: "easeIn",
    },
  }),
};

function CalendarWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const color = cardColors[currentIndex];

  return (
    <div
  className="
    flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden
    rounded-3xl
    bg-white/45 dark:bg-white/[0.03]
    hover:bg-accent/20 dark:hover:bg-indigo-500/10
    backdrop-blur-xl
    p-4 md:p-5

    shadow-[0_8px_28px_rgba(0,0,0,0.06)]
    hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]

    transition-all duration-300
  "
>
  {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-semibold text-foreground">
          Calendar
        </h2>

        <div className="flex gap-1 md:gap-2 shrink-0">
          <button
            onClick={prevCard}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextCard}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content — single scroll area on the widget (no nested scroll in inner panels) */}
      <div
        className={cn(
          "min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain pr-1",
          "max-lg:max-h-[min(58vh,480px)]"
        )}
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`
  w-full flex flex-col min-h-min

  rounded-3xl
  border border-white/20 dark:border-white/5
  backdrop-blur-md

  shadow-[0_6px_24px_rgba(0,0,0,0.06)]

  p-4 md:p-5

  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-xl

  ${color.bg}
`}
          >
            {/* Calendar View */}
            {currentIndex === 0 ? (
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3 shrink-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${color.iconBg}`}
                  >
                    <CalendarDays
                      className={`w-4 h-4 ${color.iconColor}`}
                    />
                  </div>

                  <h3 className="font-medium text-sm text-foreground">
                    May 2026
                  </h3>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[10px] sm:text-xs w-full">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div
                      key={i}
                      className={`
                        aspect-square flex items-center justify-center
                        rounded-md relative
                        ${
                          [12, 18, 25, 30].includes(i + 1)
                            ? "bg-white dark:bg-white/10 shadow-sm"
                            : ""
                        }
                      `}
                    >
                      {i + 1}

                      {[12, 18, 25, 30].includes(i + 1) && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Reminder View */
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3 shrink-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${color.iconBg}`}
                  >
                    <Bell className={`w-4 h-4 ${color.iconColor}`} />
                  </div>

                  <h3 className="font-medium text-sm text-foreground">
                    Upcoming Reminders
                  </h3>
                </div>

                <div className="space-y-3">
                  {reminders.map((reminder, index) => {
                    const t =
                      dashboardPastelThemes[
                        index % dashboardPastelThemes.length
                      ];
                    return (
                      <div
                        key={index}
                        className={cn(
                          `
rounded-2xl
border border-white/20 dark:border-white/5
backdrop-blur-md

p-3 md:p-4

flex items-center gap-3 md:gap-4

shadow-[0_4px_18px_rgba(0,0,0,0.05)]
hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)]

hover:-translate-y-1
transition-all duration-300
`,
                          t.cardBg
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl shrink-0",
                            t.iconBg,
                            t.iconColor
                          )}
                        >
                          <Bell className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-card-foreground text-sm md:text-base leading-snug">
                            {reminder.title}
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1">
                            {reminder.date}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CalendarWidget;
