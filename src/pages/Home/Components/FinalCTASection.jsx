import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-amber-50 to-green-100"
    >
      {/* Background Floating Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 left-1/2 w-40 h-40 bg-green-300/20 rounded-full blur-2xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight mb-6"
          style={{ fontFamily: 'Philosopher, serif' }}
        >
          🚀 Take Your First Step to
          <span className="block text-amber-700">Daily Immunity Today!</span>
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-green-800/90 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: 'Philosopher, serif' }}
        >
          Crafted with 🌿 Ayurveda + modern science, our shots are your daily dose of health, immunity & energy.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-green-900 font-bold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-3 text-lg mx-auto overflow-hidden"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            <Shield className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Shop Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>

            {/* Button Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
