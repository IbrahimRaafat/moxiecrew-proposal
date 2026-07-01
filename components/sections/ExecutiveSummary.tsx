import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import { CheckCircle } from "lucide-react";

export default function ExecutiveSummary() {
  const highlights = [
    "Comprehensive digital transformation strategy for Moxie Crew's online presence",
    "Current performance gaps identified and actionable improvement roadmap",
    "Three flexible service offerings tailored to business needs",
    "Proven expertise in website optimization, SEO, and loyalty systems",
    "Phased approach with measurable KPIs and ongoing support",
  ];

  return (
    <section id="executive-summary" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="01" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Executive Summary
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">Overview of the proposal and key deliverables</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            This proposal outlines a strategic digital transformation for Moxie Crew, combining website performance optimization, SEO excellence, and comprehensive loyalty program solutions. We've identified key gaps in your current digital presence and developed a data-driven approach to position Moxie Crew as the market leader in Egyptian activewear.
          </p>

          <div className="space-y-4">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base sm:text-lg text-muted">{highlight}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-gray-200"
          >
            <p className="text-base sm:text-lg text-muted font-semibold mb-3">Next Steps:</p>
            <p className="text-base sm:text-lg text-muted">
              Schedule a discovery call to discuss your specific needs, timeline, and customize a solution that aligns with Moxie Crew's vision and budget.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
