import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import { Package, Code, Palette, PenTool, Cpu, Chip } from "lucide-react";

export default function ExecutiveSummary() {
  const highlights: string[] = [];

  const services = [
    { icon: Package, name: "Packaging" },
    { icon: Code, name: "Web Development" },
    { icon: Palette, name: "UI/UX Design" },
    { icon: PenTool, name: "Graphic Design" },
    { icon: Cpu, name: "Digital Fabrication" },
    { icon: Chip, name: "Hardware Development" },
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
            <p className="text-base sm:text-lg text-muted mt-2">Overview of the proposal</p>
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
            This proposal outlines a strategic digital transformation for Moxie Crew, combining website performance optimization, SEO excellence, and loyalty program solutions with some recommendations and analysis mentioned below.
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
                <span className="text-primary font-bold text-lg">•</span>
                <p className="text-base sm:text-lg text-muted">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-8 sm:mb-12">
            Proposed Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <p className="font-semibold text-sm sm:text-base text-primary">{service.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
