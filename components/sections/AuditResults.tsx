import React, { useState } from "react";
import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import ScoreCard from "../ui/ScoreCard";

export default function AuditResults() {
  const [activeTab, setActiveTab] = React.useState<"mobile" | "desktop">("mobile");

  const mobileScores = { performance: 46, accessibility: 87, bestPractices: 77, seo: 92 };
  const desktopScores = { performance: 61, accessibility: 92, bestPractices: 77, seo: 92 };

  const detailedIssues = [
    {
      category: "Performance Issues",
      severity: "Critical",
      items: [
        "Large unoptimized product images (LCP issue)",
        "Missing lazy loading on images",
        "Slow Time to First Byte (TTFB)",
        "Unminified CSS and JavaScript",
        "No caching strategy implemented",
      ],
    },
    {
      category: "SEO Opportunities",
      severity: "Minor",
      items: [
        "Missing structured data for products",
        "No Open Graph meta tags",
        "Limited internal linking strategy",
      ],
    },
    {
      category: "Best Practices Gaps",
      severity: "Medium",
      items: [
        "Missing Content Security Policy (CSP)",
        "No HTTPS on all resources",
        "Outdated dependencies detected",
      ],
    },
  ];

  const recommendations = [
    {
      tool: "Google Lighthouse",
      purpose: "Automated performance, accessibility, SEO audits",
      frequency: "Weekly/Monthly",
    },
    {
      tool: "GTmetrix",
      purpose: "Deep performance analysis + waterfall charts",
      frequency: "Weekly",
    },
    {
      tool: "Screaming Frog",
      purpose: "Technical SEO crawl (metadata, broken links, duplicates)",
      frequency: "Monthly",
    },
    {
      tool: "Semrush/Ahrefs",
      purpose: "Competitive SEO analysis, backlink audit, keyword tracking",
      frequency: "Monthly",
    },
    {
      tool: "WAVE (WebAIM)",
      purpose: "Accessibility audit + WCAG compliance",
      frequency: "Quarterly",
    },
    {
      tool: "WebPageTest",
      purpose: "Advanced performance testing (filmstrips, video)",
      frequency: "Monthly",
    },
    {
      tool: "Shopify Theme Detector",
      purpose: "Identify theme + apps impacting performance",
      frequency: "One-time",
    },
    {
      tool: "Hotjar/Crazy Egg",
      purpose: "Heatmaps + session recordings (user behavior)",
      frequency: "Ongoing",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <AwardBadge number="AUDIT" delay={0.1} />
          <div>
            <h2 className="font-display text-5xl font-bold text-primary">
              Real Lighthouse Results
            </h2>
            <p className="text-lg text-muted mt-2">June 29, 2026 - Mobile Analysis</p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="font-display text-3xl font-bold text-primary mb-8">
            Current Performance Metrics
          </h3>

          <div className="flex gap-4 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "mobile"
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted hover:text-primary"
              }`}
            >
              📱 Mobile (46/100 Avg)
            </button>
            <button
              onClick={() => setActiveTab("desktop")}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === "desktop"
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted hover:text-primary"
              }`}
            >
              💻 Desktop (75.5/100 Avg)
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {activeTab === "mobile" ? (
              <>
                <ScoreCard
                  title="Performance"
                  score={mobileScores.performance}
                  color="#e53935"
                  delay={0}
                />
                <ScoreCard
                  title="Accessibility"
                  score={mobileScores.accessibility}
                  color="#4a90e2"
                  delay={0.1}
                />
                <ScoreCard
                  title="Best Practices"
                  score={mobileScores.bestPractices}
                  color="#f6a623"
                  delay={0.2}
                />
                <ScoreCard
                  title="SEO"
                  score={mobileScores.seo}
                  color="#7ed321"
                  delay={0.3}
                />
              </>
            ) : (
              <>
                <ScoreCard
                  title="Performance"
                  score={desktopScores.performance}
                  color="#f6a623"
                  delay={0}
                />
                <ScoreCard
                  title="Accessibility"
                  score={desktopScores.accessibility}
                  color="#7ed321"
                  delay={0.1}
                />
                <ScoreCard
                  title="Best Practices"
                  score={desktopScores.bestPractices}
                  color="#f6a623"
                  delay={0.2}
                />
                <ScoreCard
                  title="SEO"
                  score={desktopScores.seo}
                  color="#7ed321"
                  delay={0.3}
                />
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {detailedIssues.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-gray-200 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <h4 className="font-display text-xl font-bold text-primary">
                  {section.category}
                </h4>
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                  section.severity === "Critical" ? "bg-red-500" :
                  section.severity === "Medium" ? "bg-orange-500" :
                  "bg-yellow-500"
                }`}>
                  {section.severity}
                </span>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-12 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl mb-16"
        >
          <h3 className="font-display text-2xl font-bold mb-6">
            Recommended Analysis Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="p-6 bg-primary/40 rounded-lg">
                <h4 className="font-bold mb-2">{rec.tool}</h4>
                <p className="text-sm mb-2">{rec.purpose}</p>
                <p className="text-xs opacity-75">Frequency: {rec.frequency}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-12 bg-yellow-50 border-l-4 border-yellow-500 rounded"
        >
          <p className="text-lg font-bold text-primary mb-3">⚠️ Key Finding</p>
          <p className="text-muted mb-4">
            <strong>Performance (46/100) is the critical priority.</strong> The site's slow load times are likely causing significant cart abandonment. This should be addressed before or alongside other improvements.
          </p>
          <p className="text-muted">
            <strong>Note:</strong> The wholesale portal functionality mentioned in the revamp plan is not currently implemented and should be a key component of the redesign.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
