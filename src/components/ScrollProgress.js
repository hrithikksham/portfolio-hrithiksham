// Right-edge scroll indicator
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed right-0 top-0 bottom-0 w-1 bg-gray-900 z-40 hidden md:block"
      style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
    >
      <div className="w-full h-full bg-neon-red shadow-[0_0_10px_#00B3FF]" />
    </motion.div>
  );
}