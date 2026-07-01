import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90;
        return prev + Math.random() * 25;
      });
    }, 150);

    // Minimum 2 seconds before allowing exit
    const minTimeout = setTimeout(() => {
      setProgress(100);
    }, 2000);

    // Remove loading screen when page fully loads (but after 2 seconds min)
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 2100);
    };

    window.addEventListener("load", handleLoad);

    // Fallback timeout (3 seconds total)
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(minTimeout);
      clearTimeout(timeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <motion.div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center ${
        !isLoading ? "pointer-events-none" : ""
      }`}
      initial={{ opacity: 1, x: 0 }}
      animate={{
        opacity: isLoading ? 1 : 0,
        x: isLoading ? 0 : -1500,
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/logos/moxie-crew-heart.svg"
          alt="Moxie Crew"
          className="h-32 w-32"
        />
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
