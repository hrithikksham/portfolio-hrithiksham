import { motion, useScroll, useTransform } from 'framer-motion';

export default function CraftScene() {
  const { scrollYProgress } = useScroll();
  const xMove = useTransform(scrollYProgress, [0.5, 0.8], ["0%", "-10%"]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center overflow-hidden py-24">
      <div className="text-center px-4">
        <motion.div style={{ x: xMove }} className="inline-block">
          <h2 className="text-5xl md:text-8xl font-serif italic opacity-30 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
            Software is Empathy.
          </h2>
        </motion.div>
        <div className="mt-8 max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
           <p>I don't just write code. I engineer experiences. Every interaction is a story, and every pixel is a deliberate choice.</p>
        </div>
      </div>
    </section>
  );
}