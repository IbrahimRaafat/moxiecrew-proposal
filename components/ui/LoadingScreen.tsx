import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="/logos/moxie-crew-heart.svg"
          alt="Moxie Crew"
          className="h-24 w-24"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 1.8 }}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.p
          className="text-primary font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
