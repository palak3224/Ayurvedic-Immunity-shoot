import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WCSImg from '@/assets/WCS.png';

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: "💛",
      title: "100% Natural & Ayurvedic",
      description: "No preservatives, no chemicals - pure ancient wisdom in every drop"
    },
    {
      icon: "🔥",
      title: "Anti-Inflammatory Power",
      description: "Turmeric + Ginger blend that fights inflammation naturally"
    },
    {
      icon: "⚡",
      title: "Quick Energy Boost",
      description: "Better than coffee, sustainable energy with no crash"
    },
    {
      icon: "🛡️",
      title: "Immunity Defense",
      description: "Your daily shield against infections and seasonal ailments"
    },
    {
      icon: "🧘",
      title: "Easy to Take",
      description: "Just one shot a day - simple wellness that fits your lifestyle"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-50 via-amber-50 to-green-100">
      <div className=" mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ x: -200, opacity: 0, rotate: -180 }}
            animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={WCSImg}
                alt="Natural Ayurvedic wellness shots with turmeric and ginger"
                className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating elements for visual appeal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🌿</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">✨</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-green-800 leading-tight mb-4">
                  Why Choose Our 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">
                    Wellness Shots?
                  </span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-full"></div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative p-6 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl border-l-4 border-green-500"
              >
                <p className="text-lg text-green-700 italic font-medium">
                  "Experience the power of ancient Ayurvedic wisdom in every carefully crafted shot"
                </p>
                <div className="absolute top-2 right-4 text-4xl text-green-300 opacity-50">❝</div>
              </motion.div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/30 transition-all duration-300">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="flex-1 space-y-1">
                      <h3 className="font-bold text-green-800 text-lg group-hover:text-green-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-green-600 text-sm leading-relaxed group-hover:text-green-700 transition-colors">
                        {feature.description}
                      </p>
                      
                      {/* Hover line effect */}
                      <div className="w-0 h-0.5 bg-gradient-to-r from-green-500 to-amber-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="pt-8"
            >
              <div className="relative inline-block">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-full transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Start Your Health Journey Today</span>
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                    >
                      <span className="text-sm">→</span>
                    </motion.div>
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </button>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;