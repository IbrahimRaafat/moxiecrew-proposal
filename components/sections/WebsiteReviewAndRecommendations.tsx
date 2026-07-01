import { useState } from "react";
import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import FeatureCard from "../ui/FeatureCard";
import {
  Zap,
  Search,
  Layout,
  BarChart3,
  Target,
} from "lucide-react";

export default function WebsiteReviewAndRecommendations() {
  const [activeTab, setActiveTab] = useState<"analysis" | "seo" | "improvements">("analysis");

  const suggestions = [
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
      icon: BarChart3,
      title: "Analytics Setup",
      description:
        "360-degree analytics tracking user behavior with GA4 implementation, heatmap tracking, conversion funnel analysis",
    },
  ];

  return (
    <section id="website-review" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="02" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Current Website Review & Recommendations
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">Analysis, gaps, and strategic improvement roadmap</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 p-2 bg-gray-100 rounded-xl w-fit">
          {[
            { id: "analysis", label: "Current State", icon: Target },
            { id: "seo", label: "SEO & AI Gaps", icon: Search },
            { id: "improvements", label: "Recommendations", icon: Zap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 text-xs sm:text-sm ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-gray-200"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Current State Tab */}
          {activeTab === "analysis" && (
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  Market Position
                </h3>
                <p className="text-base sm:text-lg text-muted mb-4">
                  Moxie Crew maintains a strong position as a market leader in Egyptian activewear with excellent brand identity and community engagement. However, the digital presence and online visibility need strategic optimization to compete effectively in the e-commerce space.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-primary mb-2">Strengths</h4>
                    <ul className="text-sm text-muted space-y-2">
                      <li>✓ Strong visual identity with bold red branding</li>
                      <li>✓ Active community engagement</li>
                      <li>✓ Market leadership position</li>
                      <li>✓ Diverse product range</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-primary mb-2">Performance Gap</h4>
                    <ul className="text-sm text-muted space-y-2">
                      <li>Performance Score: 55/100</li>
                      <li>SEO Score: 62/100</li>
                      <li>UX Issues Identified</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* SEO & AI Gaps Tab */}
          {activeTab === "seo" && (
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  SEO & AI Discoverability Gaps
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    {
                      issue: "No meta descriptions or OG tags",
                      impact: "Loses 40% of potential clicks in SERPs",
                    },
                    {
                      issue: "Thin product descriptions",
                      impact: "Missing long-tail keywords and organic reach",
                    },
                    {
                      issue: "No structured data (Schema.org)",
                      impact: "Products don't appear in rich results",
                    },
                    {
                      issue: "Not optimized for Arabic + English",
                      impact: "Missing dual-language search traffic",
                    },
                  ].map((gap, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200"
                    >
                      <p className="font-semibold text-primary mb-1 text-sm sm:text-base">{gap.issue}</p>
                      <p className="text-xs sm:text-sm text-muted">
                        <span className="text-red-600 font-semibold">Impact:</span> {gap.impact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

          {/* Recommendations Tab */}
          {activeTab === "improvements" && (
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  Suggested Improvements
                </h3>
                <p className="text-base sm:text-lg text-muted mb-6">
                  A comprehensive improvement roadmap to position Moxie Crew as the digital leader in Egyptian activewear.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {suggestions.map((feature, idx) => (
                    <FeatureCard
                      key={idx}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      delay={idx * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
