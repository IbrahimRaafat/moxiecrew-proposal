import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  score?: string;
  scoreColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  score,
  scoreColor = "#1a1a1a",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="card-hover p-8 bg-white rounded-xl border border-gray-200 hover:border-primary relative"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-4 bg-gray-100 rounded-lg w-fit">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {score && (
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: scoreColor }}>
              {score}
            </div>
            <div className="text-xs text-muted">current</div>
          </div>
        )}
      </div>
      <h3 className="font-display text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
