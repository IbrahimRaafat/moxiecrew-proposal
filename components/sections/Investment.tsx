import { motion } from "framer-motion";
import { useState } from "react";
import AwardBadge from "../ui/AwardBadge";
import { X } from "lucide-react";

export default function Investment() {
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  return (
    <section id="investment" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="05" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Quotation
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">Complete website revamp & loyalty system</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Website Revamp Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 bg-white text-black rounded-2xl border-2 border-black"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Website Revamp</h3>
            </div>

            <div className="text-center mb-8 pb-8 border-b border-black/20">
              <p className="font-display text-2xl font-bold mb-1">Price to be determined</p>
              <p className="text-sm text-gray-600">After specifying details</p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Complete website revamp with performance optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>UI/UX redesign with enhanced user experience</span>
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

          {/* Current Website Management/Maintenance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 bg-black text-white rounded-2xl border-2 border-gray-800 flex flex-col"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Current Website Management/Maintenance</h3>
            </div>

            <div className="text-center mb-8 pb-8 border-b border-gray-600">
              <p className="font-display text-4xl font-bold mb-2">LE 15,000</p>
              <p className="text-sm text-gray-400">Monthly Retainer</p>
            </div>

            <div className="mb-6">
              <div>
                <h5 className="font-semibold text-lg mb-3">Shopify Management</h5>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>Manage Shopify plugins and app configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>Create and populate product, collection, and campaign URLs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-bold">•</span>
                    <span>Set up new products and collections</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setIsMaintenanceModalOpen(true)}
              className="mt-auto px-6 py-2 bg-white text-accent font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Read More
            </button>
          </motion.div>

          {/* Gift Card & Loyalty Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 bg-gray-100 text-black rounded-2xl border-2 border-gray-300"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Gift Card & Loyalty Solutions</h3>
            </div>

            <div className="text-center mb-8 pb-8 border-b border-gray-300">
              <p className="font-display text-2xl font-bold mb-1">Price to be determined</p>
              <p className="text-sm text-gray-600">After specifying details</p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Physical NFC Cards with embedded loyalty technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Google & Apple Wallet digital passes integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Physical and digital gift cards with custom denominations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Branded packaging and design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Online and in-store redemption capabilities</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Maintenance Modal */}
        {isMaintenanceModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-br from-accent to-accent/80 text-white p-6 flex justify-between items-center">
                <h3 className="font-display text-2xl font-bold">Current Website Management/Maintenance</h3>
                <button
                  onClick={() => setIsMaintenanceModalOpen(false)}
                  className="hover:opacity-80 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="text-center mb-8 pb-8 border-b border-gray-200">
                  <p className="text-sm text-muted mb-2">Monthly Retainer</p>
                  <p className="font-display text-4xl font-bold text-primary mb-2">LE 15,000</p>
                  <p className="text-sm text-muted">Per month</p>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h5 className="font-semibold text-lg text-primary mb-3">Shopify Management</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Manage Shopify plugins and app configurations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Create and populate product, collection, and campaign URLs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Set up new products and collections</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-lg text-primary mb-3">Content Management</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Maintain collection content and merchandising</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Create seasonal landing pages</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-lg text-primary mb-3">Website Visual Merchandising</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Update homepage banners and promotional content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Maintain homepage modules and navigation bars</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Boost featured products and optimize collection placements</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-lg text-primary mb-3">Quality Assurance</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Audit product information, images, URLs, and collection content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Review internal and external pages for accuracy and functionality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Review banners linking functionality and redirection</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-lg text-primary mb-3">Creative Support</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Design homepage and PLP graphics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>Resize and optimize website and product images</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
