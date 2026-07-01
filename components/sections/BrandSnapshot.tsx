import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import AwardBadge from "../ui/AwardBadge";
import LighthouseModal from "../LighthouseModal";

export default function BrandSnapshot() {
  const [isLighthouseOpen, setIsLighthouseOpen] = useState(false);
  const strengths = [
    "Strong visual identity with bold red branding",
    "Active community engagement and lifestyle positioning",
    "Market leadership in Egyptian activewear",
    "Diverse product range across demographics and activities",
  ];

  const weaknesses = [
    {
      category: "Performance & SEO",
      scores: [
        { label: "Performance", value: 55, color: "text-red-500" },
        { label: "SEO", value: 62, color: "text-orange-500" },
      ],
      items: [
        "Large unoptimized images",
        "No lazy loading implemented",
        "Missing CDN optimization",
        "Slow initial load time",
        "No meta descriptions or OG tags",
        "Thin product page content",
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
    <section id="brand" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="02" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Brand Snapshot
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">Current market position and strengths</p>
          </div>
        </div>

        {false && (
          <>
            {/* Weakness Points Card - COMMENTED OUT FOR NOW */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-12 rounded-2xl border border-red-200 w-full"
            >
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  Weakness Points
                </h3>
                <div>
                  {/* Lighthouse Button */}
                  <div className="mb-8">
                    <button
                      onClick={() => setIsLighthouseOpen(true)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-300 text-primary font-semibold rounded-lg hover:border-red-400 hover:bg-red-100 transition-all flex items-center justify-center gap-2"
                    >
                      <BarChart3 className="w-5 h-5" />
                      View Lighthouse Score
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {weaknesses.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span className="text-accent font-bold">→</span>
                          {section.category}
                          {section.scores && (
                            <div className="flex gap-4 ml-auto">
                              {section.scores.map((score, i) => (
                                <div key={i} className="flex items-center gap-1">
                                  <span className={`text-xl font-bold ${score.color}`}>{score.value}</span>
                                  <span className="text-xs text-muted">{score.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="text-sm text-muted flex items-start gap-3">
                              <span className="text-accent font-bold">×</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
            </motion.div>

            <LighthouseModal isOpen={isLighthouseOpen} onClose={() => setIsLighthouseOpen(false)} />
          </>
        )}
      </div>
    </section>
  );
}
