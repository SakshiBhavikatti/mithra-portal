import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";

const anniversaries = [
  { name: "Employee 1", years: "2 years" },
  { name: "Employee 2", years: "5 years" },
  { name: "Employee 3", years: "10 years" },
  { name: "Employee 4", years: "3 years" },
];

const pastelThemes = [
  {
    cardBg: "bg-blue-50 dark:bg-blue-950/40",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-500 dark:text-blue-300",
  },
  {
    cardBg: "bg-violet-50 dark:bg-violet-950/40",
    iconBg: "bg-violet-100 dark:bg-violet-900/50",
    iconColor: "text-violet-500 dark:text-violet-300",
  },
  {
    cardBg: "bg-green-50 dark:bg-green-950/40",
    iconBg: "bg-green-100 dark:bg-green-900/50",
    iconColor: "text-green-500 dark:text-green-300",
  },
  {
    cardBg: "bg-amber-50 dark:bg-amber-950/40",
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    iconColor: "text-amber-500 dark:text-amber-300",
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

function WorkAnniversary() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === anniversaries.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? anniversaries.length - 1 : prev - 1
    );
  };

  const employee = anniversaries[currentIndex];
  const color = pastelThemes[currentIndex % pastelThemes.length];

  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 transition-all p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          Work Anniversaries
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
                <Trophy className={`w-6 h-6 ${color.iconColor}`} />
              </div>

              <div>
                <h3 className="font-medium text-foreground">
                  {employee.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Completed {employee.years}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default WorkAnniversary;