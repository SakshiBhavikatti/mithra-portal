import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const pastelThemes = [
  {
    cardBg: "bg-pink-50 dark:bg-pink-950/40",
    iconBg: "bg-pink-100 dark:bg-pink-900/50",
    iconColor: "text-pink-500 dark:text-pink-300",
  },
  {
    cardBg: "bg-blue-50 dark:bg-blue-950/40",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-500 dark:text-blue-300",
  },
  {
    cardBg: "bg-green-50 dark:bg-green-950/40",
    iconBg: "bg-green-100 dark:bg-green-900/50",
    iconColor: "text-green-500 dark:text-green-300",
  },
  {
    cardBg: "bg-red-50 dark:bg-red-950/40",
    iconBg: "bg-red-100 dark:bg-red-900/50",
    iconColor: "text-red-500 dark:text-red-300",
  },
  {
    cardBg: "bg-orange-50 dark:bg-orange-950/40",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconColor: "text-orange-500 dark:text-orange-300",
  },
  {
    cardBg: "bg-violet-50 dark:bg-violet-950/40",
    iconBg: "bg-violet-100 dark:bg-violet-900/50",
    iconColor: "text-violet-500 dark:text-violet-300",
  },
  {
    cardBg: "bg-teal-50 dark:bg-teal-950/40",
    iconBg: "bg-teal-100 dark:bg-teal-900/50",
    iconColor: "text-teal-500 dark:text-teal-300",
  },
  {
    cardBg: "bg-amber-50 dark:bg-amber-950/40",
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    iconColor: "text-amber-500 dark:text-amber-300",
  },
];

function AppCard({ title, icon, index }) {
  const color = pastelThemes[index % pastelThemes.length];

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="w-full"
    >
      <Card
        className={`
          w-full
          min-h-[100px]
          cursor-pointer
          transition-all duration-300 hover:shadow-md
          border border-border
          ${color.cardBg}
        `}
      >
        <CardContent className="flex items-center gap-3 md:gap-4 p-3 md:p-4 h-full">
          <div
            className={`
              flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12
              rounded-2xl shrink-0
              ${color.iconBg} ${color.iconColor}
            `}
          >
            {icon}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-card-foreground text-sm md:text-base break-words leading-snug">
              {title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default AppCard;