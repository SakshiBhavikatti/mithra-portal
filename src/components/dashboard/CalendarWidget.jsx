import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Bell,
} from "lucide-react";

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
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    transition: {
      duration: 0.3,
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
    <div className="w-full min-w-[280px] h-full rounded-2xl bg-card border border-border hover:bg-accent/20 transition-all p-4 md:p-5 flex flex-col overflow-hidden">
      
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

      {/* Content */}
      <div
        className="flex-1 min-h-0 flex items-stretch overflow-hidden"
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
              w-full flex flex-col overflow-hidden
              rounded-xl border border-border
              p-3 md:p-4
              transition-all hover:shadow-sm
              ${color.bg}
            `}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Calendar View */}
            {currentIndex === 0 ? (
              <div className="flex-1 min-h-0 flex flex-col">
                
                <div className="flex items-center gap-3 mb-3">
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

                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
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
              </div>
            ) : (
              /* Reminder View */
              <div className="flex-1 min-h-0 flex flex-col">
                
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${color.iconBg}`}
                  >
                    <Bell className={`w-4 h-4 ${color.iconColor}`} />
                  </div>

                  <h3 className="font-medium text-sm text-foreground">
                    Upcoming Reminders
                  </h3>
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto space-y-2 pr-1">
                  {reminders.map((reminder, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/70 dark:bg-white/10 border border-border p-3"
                    >
                      <p className="font-medium text-foreground text-sm">
                        {reminder.title}
                      </p>

                      <p className="text-xs text-muted-foreground mt-1">
                        {reminder.date}
                      </p>
                    </div>
                  ))}
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