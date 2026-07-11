import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";

export default function Investment() {
  return (
    <section id="investment" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="03" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Quotation
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">Two options for the website revamp</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Option 1: Shopify Improvements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 bg-white text-black rounded-2xl border-2 border-black"
          >
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Option 1</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Shopify Improvements</h3>
              <p className="text-sm text-gray-600">Revamp the current Shopify store</p>
            </div>

            <div className="text-center mb-8 pb-8 border-b border-black/20">
              <p className="font-display text-2xl font-bold mb-1">Price to be determined</p>
              <p className="text-sm text-gray-600">After specifying details</p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Theme redesign & UI/UX improvements on the existing store</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Performance optimization & Core Web Vitals fixes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Apps & plugins audit and cleanup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>SEO excellence implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>360-degree analytics setup for continuous improvement</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Option 2: New Storefront Connected to Shopify */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 bg-black text-white rounded-2xl border-2 border-gray-800"
          >
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Option 2</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">New Storefront</h3>
              <p className="text-sm text-gray-400">Custom storefront connected to Shopify</p>
            </div>

            <div className="text-center mb-8 pb-8 border-b border-gray-600">
              <p className="font-display text-2xl font-bold mb-1">Price to be determined</p>
              <p className="text-sm text-gray-400">After specifying details</p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Fully custom storefront built from the ground up</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Connected to Shopify — products, checkout & orders stay in place</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Complete design freedom for a unique brand experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>Best-in-class speed, SEO & mobile experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold">✓</span>
                  <span>360-degree analytics setup for continuous improvement</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
