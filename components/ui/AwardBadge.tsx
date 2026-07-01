import { motion } from "framer-motion";

interface AwardBadgeProps {
  number: string;
  delay?: number;
}

export default function AwardBadge({ number, delay = 0 }: AwardBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-muted text-white font-display text-2xl font-bold"
    >
      {number}
    </motion.div>
  );
}
