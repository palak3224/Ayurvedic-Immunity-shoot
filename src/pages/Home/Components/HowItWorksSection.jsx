import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
  const { scrollY } = useViewportScroll();
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  // Parallax transforms
  const y = useTransform(scrollY, [elementTop, elementTop + elementHeight], [0, -100]);
  const opacity = useTransform(scrollY, [elementTop - 200, elementTop + 200], [0.3, 0.8]);
  const scale = useTransform(scrollY, [elementTop - 300, elementTop], [1.1, 1]);

  useEffect(() => {
    const element = document.getElementById('how-it-works');
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setElementTop(scrollTop + rect.top);
      setElementHeight(rect.height);
    }
  }, []);

  const steps = [
    {
      number: "01",
      title: "Shake the bottle",
      description: "Give it a good shake to mix all the natural ingredients perfectly",
      delay: 0.2
    },
    {
      number: "02", 
      title: "Take a quick 60ml shot",
      description: "One small shot is all you need for maximum wellness benefits",
      delay: 0.4
    },
    {
      number: "03",
      title: "Feel refreshed & energized all day",
      description: "Experience natural energy and improved immunity throughout your day",
      delay: 0.6
    }
  ];

  return (
    <div id="how-it-works" className="relative min-h-screen overflow-hidden">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Belleza&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" 
        rel="stylesheet" 
      />

      {/* Parallax Background Image */}
      <motion.div 
        // style={{ , scale }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          style={{ opacity }}
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Natural wellness background"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 via-amber-100/90 to-green-100/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-amber-50/30"></div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-600/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-amber-400/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-green-500/8 rounded-full blur-xl"></div>

      {/* Floating Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-green-800 select-none rotate-12"
          style={{ fontFamily: 'Philosopher, serif' }}
        >
          WORKS
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-green-800/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-green-700/20"
          >
            <Sparkles className="w-6 h-6 text-green-700" />
            <span 
              className="text-lg font-medium text-green-800 tracking-wide"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              Simple & Effective
            </span>
          </motion.div>

          <h2 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-green-900 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            How It 
            <span className="block text-amber-700">Works</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-green-800/80 font-light max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            Three simple steps to unlock your daily wellness potential
          </motion.p>
        </motion.div>

        {/* Steps Container */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-amber-50/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-200/30 overflow-hidden"
                >
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-transparent to-green-100/30 rounded-3xl"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl group-hover:bg-amber-300/30 transition-colors duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-center mb-8">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: step.delay + 0.2 }}
                        className="relative"
                      >
                        {/* Outer Ring */}
                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-xl border-4 border-amber-200/50">
                          {/* Inner Glow */}
                          <div className="absolute inset-1 bg-gradient-to-br from-green-500/30 to-transparent rounded-full"></div>
                          {/* Step Number */}
                          <span 
                            className="relative z-10 text-2xl lg:text-3xl font-black text-amber-50 tracking-wider"
                            style={{ fontFamily: 'Philosopher, serif' }}
                          >
                            {step.number}
                          </span>
                        </div>
                        {/* Outer Glow Effect */}
                        <div className="absolute inset-0 bg-green-600/20 rounded-full blur-lg scale-110"></div>
                      </motion.div>
                    </div>

                    {/* Step Content */}
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: step.delay + 0.6 }}
                      className="text-2xl lg:text-3xl font-bold text-green-900 mb-4 leading-tight"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: step.delay + 0.8 }}
                      className="text-lg text-green-800/70 leading-relaxed font-light"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Floating Particles */}
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      x: [0, 5, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 4 + index, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute top-4 right-4 w-3 h-3 bg-amber-400/60 rounded-full"
                  ></motion.div>
                </motion.div>

                {/* Connection Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: step.delay + 1 }}
                    className="hidden md:flex absolute -right-8 lg:-right-12 top-1/2 transform -translate-y-1/2 z-20"
                  >
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-amber-200/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-green-200/50"
                    >
                      <ArrowRight className="w-6 h-6 text-green-700" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-amber-50 font-bold py-6 px-12 lg:py-8 lg:px-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 text-xl lg:text-2xl overflow-hidden"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center gap-4">
              <span>Order Now & Feel the Difference</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7" />
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            ></motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSection;