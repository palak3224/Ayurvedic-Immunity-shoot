import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ShoppingCart, Star, Truck, Gift, Heart, Leaf } from 'lucide-react';

const ModernCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 25%, #fef3c7 75%, #fffbeb 100%)'
      }}
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.06)_0%,transparent_50%)]" />
      
      {/* Floating Orbs - Updated colors to match brand section */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-24 h-24 bg-green-200/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          x: [0, -15, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/3 w-32 h-32 bg-emerald-200/15 rounded-full blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Professional Rectangular CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="backdrop-blur-xl bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 border border-emerald-700/20 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(16,185,129,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
          }}
        >
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Left Content Section */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              {/* Shopping Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm mb-6"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-emerald-200 text-sm font-medium">Premium Quality Store</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 tracking-tight"
              >
                Shop Your Way to
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300 bg-clip-text text-transparent">
                  Better Health
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base lg:text-lg text-white/80 mb-8 leading-relaxed max-w-lg"
              >
                Discover our premium collection of Ayurvedic wellness shots. Hand-crafted with the finest natural ingredients, 
                delivered fresh to your doorstep with love and care.
              </motion.p>

              {/* Product Features */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              >
                <div className="flex items-center gap-2 text-emerald-200">
                  <Leaf className="w-4 h-4 text-emerald-300" />
                  <span className="text-sm">100% Organic</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-sm">Made with Love</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <Truck className="w-4 h-4 text-blue-300" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
              </motion.div>

              {/* Shopping Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-400/20 backdrop-blur-sm"
              >
                <div className="text-emerald-200 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="font-medium">Special Launch Offer</span>
                  </div>
                  <p className="text-white/70">Free shipping on orders over $75 • 30-day money back guarantee</p>
                </div>
              </motion.div>
            </div>

            {/* Right CTA Section */}
            <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm p-8 lg:p-12 flex flex-col justify-center border-l border-emerald-700/20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6"
              >
                {/* Main Shop Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-500 hover:via-green-500 hover:to-teal-500 text-white font-semibold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Shop Now</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>

                {/* Gift Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full flex items-center justify-center gap-2 text-emerald-200 hover:text-white border border-emerald-400/40 hover:border-emerald-300 rounded-xl px-6 py-3 transition-all duration-300 backdrop-blur-sm bg-emerald-500/5 hover:bg-emerald-500/10"
                >
                  <Gift className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">Gift Cards</span>
                </motion.button>

                {/* Trust Indicators */}
                <div className="pt-4 border-t border-emerald-700/30">
                  <div className="grid grid-cols-1 gap-3 text-emerald-200/80 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>4.9/5 Customer Rating</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>10,000+ Happy Customers</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl" />
          <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-green-400/10 to-emerald-400/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCTASection;