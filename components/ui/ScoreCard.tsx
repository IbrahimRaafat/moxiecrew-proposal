import { motion } from "framer-motion";

interface ScoreCardProps {
  title: string;
  score: number;
  color: string;
  delay?: number;
}

export default function ScoreCard({ title, score, color, delay = 0 }: ScoreCardProps) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32 mb-4">
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="64"
            cy="64"
            r="45"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            viewport={{ once: true }}
            strokeDasharray={circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl font-bold text-primary">{score}</span>
        </div>
      </div>
      <h3 className="text-center font-semibold text-muted">{title}</h3>
    </motion.div>
  );
}
