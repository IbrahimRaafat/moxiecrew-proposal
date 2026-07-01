import { motion } from "framer-motion";
import AwardBadge from "../ui/AwardBadge";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-16">
          <AwardBadge number="06" delay={0.1} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-bold text-primary mb-6"
        >
          Looking forward to work with you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-muted mb-12 max-w-2xl mx-auto"
        >
          Schedule a discovery call to dive deeper into your vision, refine the project scope, and discuss custom pricing based on your specific needs. I'd love to understand your goals better and tailor the perfect solution for Moxie Crew.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a
            href="https://wa.me/393206192364?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20discussing%20the%20Moxie%20Crew%20proposal."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            <FaWhatsapp className="w-5 h-5" />
            Message on WhatsApp
          </a>

          <a
            href="mailto:ibrahimraafatt@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-gray-200 text-primary rounded-lg font-semibold hover:bg-gray-300 transition-all hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
