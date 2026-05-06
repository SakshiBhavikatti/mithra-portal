import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Cake } from "lucide-react";

const birthdays = [
  { name: "Employee 1", date: "12 May" },
  { name: "Employee 2", date: "18 May" },
  { name: "Employee 3", date: "25 May" },
  { name: "Employee 4", date: "30 May" },
];

const pastelThemes = [
  {
    cardBg: "bg-pink-50 dark:bg-pink-950/40",
    iconBg: "bg-pink-100 dark:bg-pink-900/50",
    iconColor: "text-pink-500 dark:text-pink-300",
  },
  {
    cardBg: "bg-orange-50 dark:bg-orange-950/40",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconColor: "text-orange-500 dark:text-orange-300",
  },
  {
    cardBg: "bg-red-50 dark:bg-red-950/40",
    iconBg: "bg-red-100 dark:bg-red-900/50",
    iconColor: "text-red-500 dark:text-red-300",
  },
  {
    cardBg: "bg-teal-50 dark:bg-teal-950/40",
    iconBg: "bg-teal-100 dark:bg-teal-900/50",
    iconColor: "text-teal-500 dark:text-teal-300",
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

function BirthdayWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === birthdays.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? birthdays.length - 1 : prev - 1
    );
  };

  const employee = birthdays[currentIndex];
  const color = pastelThemes[currentIndex % pastelThemes.length];

  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 transition-all p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          Birthdays
        </h2>

        <div className="flex gap-2">
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

      <div
        className="flex-1 flex items-center"
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
            className={`w-full min-h-[150px] rounded-xl border border-border p-10 transition-all hover:shadow-sm ${color.cardBg}`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color.iconBg}`}
              >
                <Cake className={`w-6 h-6 ${color.iconColor}`} />
              </div>

              <div>
                <h3 className="font-medium text-foreground">
                  {employee.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Birthday: {employee.date}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BirthdayWidget;