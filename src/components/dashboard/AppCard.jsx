import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function AppCard({ title, icon }) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <Card className="cursor-pointer transition-all duration-300 hover:shadow-md border border-border bg-card hover:bg-accent/40">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="text-primary flex items-center justify-center">
            {icon}
          </div>

          <h3 className="font-medium text-card-foreground text-sm">
            {title}
          </h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default AppCard;