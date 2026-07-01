import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import ScoreCard from "../ui/ScoreCard";
import { AlertCircle } from "lucide-react";

export default function WebsiteAudit() {
  const scores = [
    { title: "Performance", score: 55, color: "#e53935" },
    { title: "SEO", score: 62, color: "#f6a623" },
  ];

  const issues = [
    {
      category: "Performance",
      items: [
        "Large unoptimized images",
        "No lazy loading implemented",
        "Missing CDN optimization",
        "Slow initial load time",
      ],
    },
    {
      category: "SEO",
      items: [
        "No meta descriptions or OG tags",
        "Thin product page content",
        "No sitemap or robots.txt",
        "Keywords not optimized for Egyptian market",
      ],
    },
    {
      category: "UX/Design",
      items: [
        "Incomplete wholesale portal",
        "Repetitive homepage messaging",
        "Missing product descriptions",
      ],
    },
  ];

  return (
    <section id="audit" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Weakness Points
          </h2>
          <p className="text-lg text-muted">Current performance & opportunity gaps identified through Lighthouse analysis</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-white border-2 border-red-200 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <h4 className="font-display text-xl font-bold text-primary">
                  {section.category}
                </h4>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">×</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
