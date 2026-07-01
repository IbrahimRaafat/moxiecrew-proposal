import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-2xl border-2 transition-all ${
        highlighted
          ? "border-accent bg-gradient-to-br from-primary/5 to-accent/5"
          : "border-gray-200 bg-white"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
          Recommended
        </div>
      )}

      <h3 className="font-display text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted text-sm mb-6">{description}</p>

      <div className="mb-8">
        <span className="font-display text-4xl font-bold text-primary">{price}</span>
        <span className="text-muted text-sm">/package</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          highlighted
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-gray-100 text-primary hover:bg-gray-200"
        }`}
      >
        Learn More
      </button>
    </motion.div>
  );
}
