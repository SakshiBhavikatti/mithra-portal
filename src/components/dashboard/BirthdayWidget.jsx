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
    cardBg:
      "bg-gradient-to-br from-[#FFF1F2]/95 to-white/90 dark:from-[#3A181B]/90 dark:to-[#1C1C1E]/95",
    iconBg: "bg-[#EB0A1E]/10 dark:bg-[#EB0A1E]/15",
    iconColor: "text-[#EB0A1E] dark:text-[#FF6B75]",
  },

  {
    cardBg:
      "bg-gradient-to-br from-[#FFE4E6]/92 to-[#FFF1F2]/88 dark:from-[#3B1F22]/92 dark:to-[#1C1C1E]/95",
    iconBg: "bg-[#EB0A1E]/12 dark:bg-[#EB0A1E]/18",
    iconColor: "text-[#B00014] dark:text-[#FF4D5A]",
  },

  {
    cardBg:
      "bg-gradient-to-br from-[#F9FAFB]/95 to-white/90 dark:from-[#27272A]/95 dark:to-[#1C1C1E]/92",
    iconBg: "bg-[#D1D5DB]/30 dark:bg-white/8",
    iconColor: "text-[#52525B] dark:text-[#E4E4E7]",
  },

  {
    cardBg:
      "bg-gradient-to-br from-[#F5F5F5]/95 to-[#FFF1F2]/75 dark:from-[#232326]/96 dark:to-[#3A181B]/70",
    iconBg: "bg-[#EB0A1E]/10 dark:bg-[#EB0A1E]/15",
    iconColor: "text-[#EB0A1E] dark:text-[#FF6B75]",
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
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/30 dark:border-white/[0.06] bg-white/55 dark:bg-[#1C1C1E]/70 backdrop-blur-2xl p-4 transition-all duration-300 hover:border-[#EB0A1E]/10 hover:shadow-[0_18px_45px_rgba(235,10,30,0.10)] shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.28)] md:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-semibold text-foreground">
          Birthdays
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
  min-h-[140px] md:min-h-[165px]

  rounded-3xl

  border border-white/30 dark:border-white/[0.06]

  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
  dark:shadow-[0_10px_30px_rgba(0,0,0,0.30)]

  backdrop-blur-xl

  p-5 md:p-6

  transition-all duration-300

  hover:-translate-y-1
  hover:border-[#EB0A1E]/20
  hover:shadow-[0_18px_40px_rgba(235,10,30,0.12)]

  flex items-center

  ${color.cardBg}
`}
            // style={{
            //   transformStyle: "preserve-3d",
            // }}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div
                className={`
                  w-10 h-10 md:w-12 md:h-12
                  rounded-2xl flex items-center justify-center
                  shrink-0
                  ${color.iconBg}
                `}
              >
                <Cake
                  className={`w-5 h-5 md:w-6 md:h-6 ${color.iconColor}`}
                />
              </div>

              <div className="min-w-0">
                <h3 className="font-medium text-sm md:text-base text-foreground truncate">
                  {employee.name}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground">
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
