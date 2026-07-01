import { motion } from "framer-motion";
import { useState } from "react";

const sections = [
  { id: "hero", label: "01" },
  { id: "brand", label: "02" },
  { id: "audit", label: "03" },
  { id: "revamp", label: "04" },
  { id: "loyalty", label: "05" },
  { id: "investment", label: "06" },
  { id: "cta", label: "07" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src="/logos/moxie-crew-heart.svg" alt="Moxie Crew" className="h-10 w-10" />

        <div className="hidden md:flex items-center gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-3 py-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <div className="w-6 h-0.5 bg-primary"></div>
          <div className="w-6 h-0.5 bg-primary"></div>
          <div className="w-6 h-0.5 bg-primary"></div>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200 p-4 space-y-2"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left px-4 py-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Section {section.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
