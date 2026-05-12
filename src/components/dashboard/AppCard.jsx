import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { dashboardPastelThemes } from "@/lib/dashboardPastelThemes";

function AppCard({ title, icon, index }) {
  const color = dashboardPastelThemes[index % dashboardPastelThemes.length];

  return (
    <motion.div whileHover={{ y: -2 }} className="group w-full">
      <Card
        className={`
  w-full
  min-h-[92px]

  cursor-pointer

  rounded-3xl

  border
  backdrop-blur-xl

  shadow-[0_6px_24px_rgba(0,0,0,0.06)]

  transition-all duration-300

  hover:-translate-y-1

  hover:border-[#EB0A1E]/40

  hover:shadow-[0_12px_32px_rgba(235,10,30,0.16)]

  ${color.cardBg}
  ${color.cardBorder}
`}
      >
        <CardContent className="flex items-center gap-3 md:gap-4 p-3 md:p-4 h-full">
          <div
            className={`
              flex items-center justify-center
              w-10 h-10 md:w-12 md:h-12
              rounded-2xl shrink-0

              transition-all duration-300

              group-hover:scale-105

              ${color.iconBg}
              ${color.iconColor}
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