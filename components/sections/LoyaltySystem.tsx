import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import FeatureCard from "../ui/FeatureCard";
import { Smartphone, Wallet, Gift } from "lucide-react";

export default function LoyaltySystem() {
  const offerings = [
    {
      icon: Smartphone,
      title: "Physical NFC Cards",
      description:
        "Premium PVC loyalty cards with embedded NFC technology. Customers tap to check points and access rewards—no app required.",
    },
    {
      icon: Wallet,
      title: "Google & Apple Wallet",
      description:
        "Digital loyalty passes integrated directly into customer wallets with real-time updates and push notifications.",
    },
    {
      icon: Gift,
      title: "Gift Card Suite",
      description:
        "Physical and digital gift cards in custom denominations, redeemable online and in-store with branded packaging.",
    },
  ];

  return (
    <section id="loyalty" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="04" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Loyalty Program & Gift Cards
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">
              What we can offer
            </p>
            <p className="text-xs sm:text-sm text-muted mt-4 italic">
              All operational and hardware side (if existing/needed) is managed and provided by your team
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {offerings.map((offering, idx) => (
            <FeatureCard
              key={idx}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
              delay={idx * 0.1}
            />
          ))}
        </motion.div>

        {/* Bento Grid - Loyalty & Gift Card Assets */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Wallet - Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="/loyalty-assets/wallet-loyalty.jpg"
              alt="Digital Loyalty Wallet"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gift Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="/loyalty-assets/gift-card-1.jpg"
              alt="Gift Card Option"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gift Card Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          >
            <img
              src="/loyalty-assets/gift-card-mockup.jpg"
              alt="Premium Gift Card"
              className="w-full h-full object-contain p-2"
            />
          </motion.div>

          {/* Nike Gift Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          >
            <img
              src="/loyalty-assets/nike-gift-card.jpg"
              alt="Nike Gift Card Example"
              className="w-full h-full object-contain p-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
