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
        return prev + Math.random() * 30;
      });
    }, 200);

    // Remove loading screen when page fully loads
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    };

    window.addEventListener("load", handleLoad);

    // Fallback timeout
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
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
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
