import React from "react";
import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";

export default function PerformanceAnalysis() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <AwardBadge number="GTM" delay={0.1} />
          <div>
            <h2 className="font-display text-5xl font-bold text-primary">
              GTmetrix Performance Report
            </h2>
            <p className="text-lg text-muted mt-2">
              Real performance metrics from waterfall analysis
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-4 mb-16"
        >
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-2 border-yellow-200">
            <p className="text-sm text-muted font-semibold mb-2">GTmetrix Grade</p>
            <p className="font-display text-4xl font-bold text-yellow-600">D</p>
            <p className="text-xs text-muted mt-2">Below Average</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
            <p className="text-sm text-muted font-semibold mb-2">Performance</p>
            <p className="font-display text-4xl font-bold text-orange-600">61%</p>
            <p className="text-xs text-muted mt-2">Significant gap</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
            <p className="text-sm text-muted font-semibold mb-2">Structure</p>
            <p className="font-display text-4xl font-bold text-green-600">80%</p>
            <p className="text-xs text-muted mt-2">Good markup</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200">
            <p className="text-sm text-muted font-semibold mb-2">Largest Paint</p>
            <p className="font-display text-3xl font-bold text-green-600">662ms</p>
            <p className="text-xs text-muted mt-2">Good LCP score</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-primary mb-6">
            Core Web Vitals
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-primary">
                  Largest Contentful Paint (LCP)
                </span>
                <span className="text-sm font-bold text-green-600">662ms</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs text-muted mt-1">Target: &lt;2.5s ✓ Excellent</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-primary">
                  Total Blocking Time (TBT)
                </span>
                <span className="text-sm font-bold text-red-600">1.1s</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="text-xs text-muted mt-1">Target: &lt;200ms ✗ Needs improvement</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-primary">
                  Cumulative Layout Shift (CLS)
                </span>
                <span className="text-sm font-bold text-green-600">0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <p className="text-xs text-muted mt-1">Target: &lt;0.1 ✓ Perfect</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-12 bg-blue-50 rounded-2xl border-2 border-blue-200"
        >
          <h3 className="font-display text-2xl font-bold text-primary mb-4">
            Next Steps: Deeper Analysis
          </h3>
          <p className="text-muted mb-6">
            To identify specific performance blockers and optimization opportunities, we recommend running the following CLI-based analysis tools:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <p className="font-semibold text-primary">Lighthouse CLI</p>
                <p className="text-xs text-muted">Full performance audit, SEO, accessibility, best practices</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <p className="font-semibold text-primary">Pa11y</p>
                <p className="text-xs text-muted">Deep accessibility audit with specific WCAG violations</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <p className="font-semibold text-primary">OWASP ZAP</p>
                <p className="text-xs text-muted">Security vulnerabilities and threat assessment</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <div>
                <p className="font-semibold text-primary">k6 Load Testing</p>
                <p className="text-xs text-muted">Performance under concurrent users and traffic spikes</p>
              </div>
            </li>
          </ul>
          <p className="text-sm text-muted mt-6 pt-6 border-t border-blue-200">
            <strong>Note:</strong> We recommend running these analyses during the discovery phase to establish a data-driven optimization roadmap with specific, measurable improvements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
