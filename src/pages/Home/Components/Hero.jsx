import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package } from 'lucide-react';
import HeroImg from '@/assets/hero.png';

const AyurvedicHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Belleza&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-950">
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-green-900/40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-green-700/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-20 w-48 h-48 bg-green-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
      
      {/* Background Text - Moved Higher */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start justify-center pt-24 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-black text-amber-100 select-none pointer-events-none"
          style={{ fontFamily: 'Philosopher, serif' }}
        >
          WELLNESS
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        
        {/* Top Headline Section */}
        <div className="pt-8 md:pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center px-4 sm:px-6"
          >
            <h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-amber-50 tracking-tight leading-tight"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              Boost Immunity in 
              <br className="hidden sm:block" />
              <span className="text-amber-200"> Just One Shot</span>
            </h1>
          </motion.div>
        </div>

        {/* Main Content Grid - Left Content + Right Image */}
        <div className="flex-1 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[70vh]">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="order-2 lg:order-1 space-y-8 lg:space-y-12"
            >
              {/* Enhanced Glassmorphism Container */}
              <div className="relative bg-green-900/30 backdrop-blur-2xl rounded-3xl border border-green-600/20 p-8 sm:p-12 lg:p-16 shadow-2xl">
                {/* Multiple Inner Glow Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/8 to-transparent rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-800/15 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Subheadline */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-50/95 mb-10 lg:mb-16 leading-relaxed font-light tracking-wide"
                    style={{ fontFamily: 'Philosopher, serif' }}
                  >
                    Daily Ayurvedic wellness – Turmeric & Ginger shots for natural energy, digestion, and stronger immunity.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                  >
                    {/* Primary CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white font-semibold py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl tracking-wide overflow-hidden w-full sm:w-auto"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">Shop Now</span>
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      ></motion.div>
                    </motion.button>

                    {/* Secondary CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative bg-transparent border-2 border-amber-100/60 text-amber-50 font-semibold py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-full hover:bg-amber-100/10 hover:border-amber-100 transition-all duration-500 flex items-center justify-center gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl backdrop-blur-sm tracking-wide w-full sm:w-auto"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    >
                      <Package className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                      Try a 7-Day Pack
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Clean Product Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative group"
              >
                {/* Clean Product Image - No Shadows */}
                <div className="relative">
                  <img
                    src={HeroImg}
                    alt="Turmeric & Ginger Wellness Shots"
                    className="w-96 sm:w-[28rem] md:w-[36rem] lg:w-[42rem] xl:w-[52rem] 2xl:w-[62rem] h-auto rounded-2xl relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Refined Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-6 -right-8 w-8 h-8 bg-amber-300/60 rounded-full shadow-lg"
                ></motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 18, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -bottom-4 -left-12 w-6 h-6 bg-green-400/50 rounded-full shadow-md"
                ></motion.div>

                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-1/4 -left-16 w-5 h-5 bg-amber-400/40 rounded-full shadow-sm"
                ></motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 12, 0],
                    x: [0, 8, 0],
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.9, 0.5]
                  }}
                  transition={{ 
                    duration: 14, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 3
                  }}
                  className="absolute top-1/3 -right-4 w-4 h-4 bg-green-300/50 rounded-full shadow-sm"
                ></motion.div>

                {/* Additional subtle floating elements */}
                <motion.div
                  animate={{ 
                    rotate: 180,
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ 
                    duration: 16, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-1/3 -right-10 w-7 h-7 bg-amber-500/30 rounded-full shadow-md"
                ></motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -18, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 5
                  }}
                  className="absolute top-2/3 -left-8 w-3 h-3 bg-green-200/60 rounded-full shadow-sm"
                ></motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicHero;
