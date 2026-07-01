import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-primary text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Moxie Crew Proposal</h3>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:ibrahimraafatt@gmail.com" className="hover:text-white transition-colors">
                  ibrahimraafatt@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Proposal Package</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#revamp" className="hover:text-white transition-colors">
                  Website Revamp
                </a>
              </li>
              <li>
                <a href="#seo-ai" className="hover:text-white transition-colors">
                  SEO & AI Strategy
                </a>
              </li>
              <li>
                <a href="#loyalty" className="hover:text-white transition-colors">
                  Loyalty System
                </a>
              </li>
              <li>
                <a href="#loyalty" className="hover:text-white transition-colors">
                  Gift Card Platform
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Ibrahim Raafat. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
