import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  title?: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      {title && (
        <h4 className="font-semibold text-primary text-sm uppercase tracking-wider">
          {title}
        </h4>
      )}

      <div className="relative bg-gray-50 rounded-xl overflow-hidden aspect-auto min-h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Market research slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-contain p-4"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-all shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-all shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex gap-2 justify-center">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-primary w-6"
                : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter text */}
      <p className="text-xs text-center text-muted">
        Slide {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
}
