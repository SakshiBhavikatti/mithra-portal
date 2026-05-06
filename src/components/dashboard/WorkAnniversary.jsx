import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";

const anniversaries = [
  { name: "Employee 1", years: "2 years" },
  { name: "Employee 2", years: "5 years" },
  { name: "Employee 3", years: "10 years" },
  { name: "Employee 4", years: "3 years" },
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
      duration: 0.30,
    },
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    transition: {
      duration: 0.30,
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
            className="w-full min-h-[150px] rounded-xl bg-background border border-border p-10 hover:bg-accent/10 transition-all"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />

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