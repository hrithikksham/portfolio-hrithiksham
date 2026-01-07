// Initial load animation for the "OS" feel
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE } from '@/src/lib/motion';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: EASE } }}
        >
          <div className="text-center">
            <motion.h1
              className="text-sm tracking-[0.3em] text-cinema-white uppercase mb-4"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.5, ease: EASE }}
            >
              Hrithik Sham
            </motion.h1>
            <motion.div
              className="h-[1px] bg-neon-blue mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            />
            <motion.p
              className="mt-2 text-[10px] text-gray-500 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              PORTFOLIO 
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}