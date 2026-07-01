import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Grainient from "../Grainient";

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#f8edd6"
          color2="#ff9183"
          color3="#beffec"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-32" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 sm:mb-6 flex justify-center"
        >
          <img src="/logos/moxie-crew-stacked.svg" alt="Moxie Crew Project Proposal" className="h-48 sm:h-56 md:h-64 w-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12 max-w-2xl mx-auto flex flex-col items-center"
        >
          <ul className="space-y-2 text-base sm:text-lg md:text-xl text-muted">
            <li className="flex items-center gap-3 justify-center">
              <span className="text-primary font-bold">•</span>
              <span>Website revamp</span>
            </li>
            <li className="flex items-center gap-3 justify-center">
              <span className="text-primary font-bold">•</span>
              <span>Gift card and loyalty programs solutions</span>
            </li>
            <li className="flex items-center gap-3 justify-center">
              <span className="text-primary font-bold">•</span>
              <span>Current Website Management/Maintenance</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12 origin-left"
        />

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={scrollToNext}
          className="mx-auto flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
        >
          <span className="text-sm font-semibold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
