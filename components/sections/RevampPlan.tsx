import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import FeatureCard from "../ui/FeatureCard";
import {
  Zap,
  Search,
  Layout,
  BookOpen,
  Store,
  BarChart3,
} from "lucide-react";

export default function RevampPlan() {
  const features = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Next.js migration, image optimization, CDN deployment, and Core Web Vitals optimization",
    },
    {
      icon: Search,
      title: "SEO Excellence",
      description:
        "Structured data implementation, meta tag optimization, keyword strategy for Arabic/English",
    },
    {
      icon: Layout,
      title: "UI/UX Revamp",
      description:
        "New homepage hierarchy, product page improvements, mobile-first design, enhanced user experience",
    },
    {
      icon: Store,
      title: "Wholesale Portal (Optional)",
      description:
        "Dedicated B2B section with bulk ordering, custom pricing, and account management—identified as unused tab opportunity",
    },
    {
      icon: BarChart3,
      title: "Analytics Setup",
      description:
        "360-degree analytics tracking user behavior with GA4 implementation, heatmap tracking, conversion funnel analysis, and continuous improvement insights",
    },
  ];

  return (
    <section id="revamp" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="04" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Suggested Improvements
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">A complete digital transformation</p>
          </div>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={idx * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-12 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20"
        >
          <h3 className="font-display text-2xl font-bold text-primary mb-6">
            Expected Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-primary mb-2">Traffic & Visibility</p>
              <p className="text-muted">Increased organic traffic and search visibility through SEO optimization</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">Performance</p>
              <p className="text-muted">Improved Lighthouse scores and site speed across all metrics</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">Conversion</p>
              <p className="text-muted">Enhanced conversion rates and reduced friction through UI/UX improvements</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">Customer Retention</p>
              <p className="text-muted">Increased repeat purchases and customer lifetime value via loyalty program</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
