import { useState } from "react";
import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import ImageCarousel from "../ui/ImageCarousel";
import {
  Search,
  Brain,
  TrendingUp,
  Zap,
  Target,
  Database,
} from "lucide-react";

interface BrandLogo {
  name: string;
  logo?: string;
}

export default function SEOAIOptimization() {
  const [activeTab, setActiveTab] = useState<"market" | "seo" | "ai">("market");

  // Market research images from screenshots
  const carouselImages = [
    "/market-research/google-search-top-brands.jpg",
    "/market-research/moxie-crew-positioning.jpg",
    "/market-research/tier-1-leaders.jpg",
    "/market-research/tier-2-challengers.jpg",
    "/market-research/tier-3-specialized.jpg",
    "/market-research/moxie-crew-overview.jpg",
  ];

  // Brand logos with fallbacks
  const localBrands: BrandLogo[] = [
    { name: "Sigma Fit", logo: "/logos/sigma-fit.webp" },
    { name: "Magma Sportswear", logo: "/logos/magma-sportswear.avif" },
    { name: "KAF Wear", logo: "/logos/kaf-wear.webp" },
  ];

  const globalBrands: BrandLogo[] = [
    { name: "Lululemon", logo: "/logos/lululemon.png" },
    { name: "Alo Yoga", logo: "/logos/alo-yoga.png" },
    { name: "Gymshark", logo: "/logos/gymshark.png" },
  ];

  const slides = {
    market: [
      {
        titleLocal: "Current Market Leaders (Local)",
        insightLocal:
          "These brands dominate organic search in Egypt. Moxie Crew can differentiate through technical SEO.",
        titleGlobal: "Current Market Leaders (Global)",
        insightGlobal:
          "International premium brands set the standard for brand positioning, e-commerce experience, and customer retention strategies.",
      },
    ],
    seo: [
      {
        title: "Current SEO Gaps",
        subtitle: "Why Moxie Crew Isn't Appearing in Top Results",
        gaps: [
          {
            issue: "No meta descriptions or OG tags",
            impact: "Loses 40% of potential clicks in SERPs",
          },
          {
            issue: "Thin product descriptions",
            impact: "Missing long-tail keywords (e.g., 'sustainable Egyptian activewear')",
          },
          {
            issue: "No structured data (Schema.org)",
            impact: "Products don't appear in Google Shopping, rich results",
          },
          {
            issue: "Not optimized for Arabic + English search",
            impact: "Missing dual-language search traffic",
          },
          {
            issue: "No blog or thought leadership content",
            impact: "Competitors rank for 'sustainable activewear' + 'Egyptian fashion'",
          },
        ],
      },
      {
        title: "SEO Roadmap",
        subtitle: "To Capture Egyptian Market + International Growth",
        actions: [
          {
            phase: "Immediate (Week 1-2)",
            tasks: [
              "Add Product Schema to all product pages",
              "Implement meta descriptions (keyword-rich)",
              "Add OG tags for social sharing",
              "Create Arabic URL paths + hreflang tags",
            ],
          },
          {
            phase: "Short-term (Month 1-2)",
            tasks: [
              "Launch blog: 'Sustainable Activewear in Egypt'",
              "Create landing pages for long-tail keywords",
              "Build internal linking strategy",
              "Implement FAQ schema for product Q&A",
            ],
          },
          {
            phase: "Long-term (Month 3+)",
            tasks: [
              "Guest posts on lifestyle + sustainability publications",
              "Influencer partnerships with search mentions",
              "Local SEO optimization (Egypt-specific keywords)",
              "Video content optimization (YouTube SEO)",
            ],
          },
        ],
      },
      {
        title: "Target Keywords",
        subtitle: "Moxie Crew's Winning Search Phrases",
        keywords: [
          {
            category: "Product-Specific",
            terms: [
              "Egyptian activewear brand",
              "sustainable gym wear Egypt",
              "premium leggings Cairo",
              "made in Egypt sportswear",
            ],
          },
          {
            category: "Lifestyle",
            terms: [
              "athleisure Egypt",
              "wellness lifestyle Egypt",
              "performance activewear Cairo",
            ],
          },
          {
            category: "International",
            terms: [
              "Egyptian fashion tech",
              "sustainable activewear Africa",
              "luxury gym wear Egypt",
            ],
          },
        ],
      },
    ],
    ai: [
      {
        title: "AI Agent Optimization",
        subtitle: "How LLMs Discover and Recommend Moxie Crew",
        overview: `Modern AI agents (ChatGPT, Claude, Gemini) rely on structured data, citations, and
        E-E-A-T signals. Moxie Crew currently misses AI discoverability entirely.`,
      },
      {
        title: "AI Discovery Layers",
        subtitle: "Three Ways AI Agents Find Products",
        layers: [
          {
            layer: "Layer 1: Knowledge Graphs",
            description:
              "Google Knowledge Graph, Wikipedia, DBpedia recognize brands",
            moxie: "Not in any knowledge graph — needs structured citations",
            action: "Get mentioned in fashion/sustainability articles + Wikipedia",
          },
          {
            layer: "Layer 2: Web Scraping & Indexing",
            description:
              "AI models trained on web content up to knowledge cutoff",
            moxie: "Low mention density compared to Tier 1 competitors",
            action: "Increase brand mention volume + authority backlinks",
          },
          {
            layer: "Layer 3: Structured Data (JSON-LD)",
            description:
              "Rich snippets AI agents use to extract product info",
            moxie: "Currently absent — missing all product + brand markup",
            action:
              "Implement comprehensive Schema.org (Product, Brand, Review, Organization)",
          },
        ],
      },
      {
        title: "Structured Data Implementation",
        subtitle: "Making Moxie Crew Visible to AI Agents",
        schemas: [
          {
            type: "Organization Schema",
            purpose: "Establishes brand identity for AI agents",
            includes: [
              "Company name, logo, description",
              "Location (Cairo, Egypt)",
              "Founding story (California + Egypt inspiration)",
              "Social profiles + website",
              "Contact info",
            ],
          },
          {
            type: "Product Schema",
            purpose: "AI extracts product details directly",
            includes: [
              "Product name, description, image",
              "Price (multi-currency: EGP + USD)",
              "Availability, SKU",
              "Material + care instructions",
              "Aggregated ratings (pull from Trustpilot/Google Reviews)",
            ],
          },
          {
            type: "BreadcrumbList Schema",
            purpose: "Helps AI understand site hierarchy",
            includes: [
              "Category → Subcategory → Product",
              "Improves AI's ability to recommend related products",
            ],
          },
          {
            type: "FAQPage Schema",
            purpose: "AI uses FAQ data for Q&A results",
            includes: [
              "Product care ('How to wash Moxie Crew leggings?')",
              "Sizing & fit questions",
              "Sustainability/manufacturing FAQs",
            ],
          },
        ],
      },
      {
        title: "AI-Friendly Content Strategy",
        subtitle: "What AI Agents Actually Look For",
        strategies: [
          {
            strategy: "E-E-A-T Signals (Google's Framework)",
            details: [
              "Experience: Share founder story + product development process",
              "Expertise: Host content on activewear science, sustainability",
              "Authoritativeness: Get cited by fashion/wellness publications",
              "Trustworthiness: Display certifications, customer reviews, guarantees",
            ],
          },
          {
            strategy: "Citation Building",
            details: [
              "Egyptian Business Directory mentions",
              "Fashion/lifestyle publication features",
              "Sustainability databases (Good On You-style platforms)",
              "Local business listings (Google My Business, Yellow Pages Egypt)",
            ],
          },
          {
            strategy: "Semantic Web Optimization",
            details: [
              "Use exact terminologies AI recognizes (e.g., 'recycled polyester', 'moisture-wicking')",
              "Connect related concepts (sustainability + performance + Egyptian manufacturing)",
              "Answer 'People Also Ask' questions with detailed, structured answers",
            ],
          },
        ],
      },
    ],
  };

  const BrandLogoDisplay = ({ brand, isDark = false }: { brand: BrandLogo; isDark?: boolean }) => {
    if (brand.logo) {
      return (
        <div className="flex items-center justify-center h-16 w-full bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition-colors">
          <img
            src={brand.logo}
            alt={brand.name}
            title={brand.name}
            className="max-h-12 max-w-full object-contain"
          />
        </div>
      );
    }
    return (
      <div
        className={`flex items-center justify-center h-16 w-full rounded-lg text-sm font-medium ${
          isDark
            ? "bg-gray-800 text-white border border-gray-700"
            : "bg-gray-100 text-black border border-gray-300"
        }`}
      >
        {brand.name}
      </div>
    );
  };

  const renderMarketSlides = () => {
    return (
      <div className="space-y-8">
        {/* Carousel Only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ImageCarousel
            images={carouselImages}
            title="Market Research"
          />
        </motion.div>
      </div>
    );
  };

  const renderSEOSlides = () => (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
        <h3 className="font-display text-2xl font-bold text-primary mb-2">
          {slides.seo[0].title}
        </h3>
        <p className="text-lg text-muted mb-6">{slides.seo[0].subtitle}</p>
        <div className="space-y-3">
          {slides.seo[0].gaps?.map((gap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 bg-red-50 rounded-lg border border-red-200"
            >
              <p className="font-semibold text-primary mb-1">{gap.issue}</p>
              <p className="text-sm text-muted">
                <span className="text-red-600 font-semibold">Impact:</span>{" "}
                {gap.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );

  const renderAISlides = () => (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
        <h3 className="font-display text-2xl font-bold text-primary mb-4">
          {slides.ai[0].title}
        </h3>
        <p className="text-lg text-muted bg-blue-50 p-4 rounded-lg border border-blue-200">
          {slides.ai[0].overview}
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
        <h3 className="font-display text-xl font-bold text-primary mb-4">
          {slides.ai[1].title}
        </h3>
        <div className="space-y-4">
          {slides.ai[1].layers?.map((layer, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg border-l-4 border-l-accent bg-gradient-to-r from-gray-50 to-white"
            >
              <p className="font-bold text-primary mb-2">{layer.layer}</p>
              <p className="text-sm text-muted mb-3">{layer.description}</p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold text-orange-600">Moxie Crew Status:</span>{" "}
                  <span className="text-muted">{layer.moxie}</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-green-600">Action:</span>{" "}
                  <span className="text-muted">{layer.action}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );

  return (
    <section id="seo-ai" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-16">
          <AwardBadge number="02" delay={0.1} />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              SEO & AI Agent Optimization
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">
              Place Moxie Crew where it should be online
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 p-2 bg-gray-100 rounded-xl w-fit">
          {[
            { id: "market", label: "Market Position", icon: Target },
            { id: "seo", label: "SEO Strategy", icon: Search },
            { id: "ai", label: "AI Optimization", icon: Brain },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
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
          {activeTab === "market" && renderMarketSlides()}
          {activeTab === "seo" && renderSEOSlides()}
          {activeTab === "ai" && renderAISlides()}
        </motion.div>
      </div>
    </section>
  );
}
