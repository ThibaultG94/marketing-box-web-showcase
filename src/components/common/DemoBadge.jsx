import React from "react";
import { motion } from "framer-motion";

const DemoBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <motion.a
        href="https://github.com/ThibaultG94/marketing-box-web-showcase"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-black/90 hover:bg-black text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm text-sm font-medium transition-all duration-300"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Version Demo • React + Vite
        </span>
      </motion.a>
    </motion.div>
  );
};

export default DemoBadge;
