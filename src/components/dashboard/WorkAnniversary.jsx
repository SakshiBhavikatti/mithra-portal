import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { dashboardPastelThemes } from "@/lib/dashboardPastelThemes";

const anniversaries = [
  { name: "Employee 1", years: "2 years" },
  { name: "Employee 2", years: "5 years" },
  { name: "Employee 3", years: "10 years" },
  { name: "Employee 4", years: "3 years" },
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
  const color = dashboardPastelThemes[currentIndex % dashboardPastelThemes.length];

  return (
    <div
      className="
        group
        flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden

        rounded-3xl
        border border-white/30 dark:border-white/[0.06]

        bg-white/60 dark:bg-[#1B1B1F]/78

        backdrop-blur-2xl

        p-4 md:p-5

        shadow-[0_10px_35px_rgba(0,0,0,0.07)]
        dark:shadow-[0_10px_35px_rgba(0,0,0,0.32)]

        transition-all duration-300

        hover:border-[#EB0A1E]/20
        hover:bg-white/70
        dark:hover:bg-[#232328]/88

        hover:shadow-[0_18px_45px_rgba(235,10,30,0.14)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-semibold text-foreground">
          Work Anniversaries
        </h2>

        <div className="flex gap-1 md:gap-2 shrink-0">
          <button
            onClick={prevCard}
            className="
              p-2 rounded-xl
              bg-white/40 dark:bg-white/[0.04]

              transition-all duration-300

              hover:bg-[#EB0A1E]/10
              hover:text-[#EB0A1E]
            "
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextCard}
            className="
              p-2 rounded-xl
              bg-white/40 dark:bg-white/[0.04]

              transition-all duration-300

              hover:bg-[#EB0A1E]/10
              hover:text-[#EB0A1E]
            "
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card */}
      <div
        className="flex-1 flex items-center min-h-0"
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
              w-full
              min-h-[138px] md:min-h-[160px]

              rounded-3xl

              border border-white/35 dark:border-white/[0.06]

              backdrop-blur-xl

              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.34)]

              p-5 md:p-6

              transition-all duration-300

              hover:-translate-y-1
              hover:scale-[1.01]
              hover:border-[#EB0A1E]/30
              hover:shadow-[0_20px_45px_rgba(235,10,30,0.18)]

              flex items-center

              ${color.cardBg}
            `}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div
                className={`
                  w-10 h-10 md:w-12 md:h-12
                  rounded-2xl
                  flex items-center justify-center
                  shrink-0

                  shadow-sm

                  transition-all duration-300

                  group-hover:scale-105

                  ${color.iconBg}
                `}
              >
                <Trophy
                  className={`w-5 h-5 md:w-6 md:h-6 ${color.iconColor}`}
                />
              </div>

              <div className="min-w-0">
                <h3 className="font-medium text-sm md:text-base text-foreground truncate">
                  {employee.name}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground mt-1">
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