import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.5s) + a small pause (0.5s)
    // before the shutter goes up smoothly.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-gradient-to-br from-[#4a1828] via-[#6d283c] to-[#2a101a] z-[100000] flex items-center justify-center overflow-hidden"
        >
          {/* Ambient Glow in background */}
          <div className="absolute w-96 h-96 rounded-full bg-[#e59a68]/15 blur-3xl pointer-events-none"></div>

          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-6xl md:text-8xl font-black tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {/* Background text (empty state) */}
            <div className="text-white/20 select-none">
              Navya<span className="text-[#e59a68]/40">.</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 text-[#fff7f2] overflow-hidden whitespace-nowrap select-none drop-shadow-[0_4px_20px_rgba(229,154,104,0.3)]"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
              Navya<span className="text-[#e59a68]">.</span>
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

