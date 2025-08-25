import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Shield, Gift } from 'lucide-react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const pricingPlans = [
    {
      id: 'trial',
      name: '1 Shot Trial Pack',
      price: '99',
      originalPrice: null,
      description: 'Perfect to experience the power of Ayurveda',
      features: [
        '1 Premium wellness shot',
        'Try before you commit',
        'Free shipping',
        '100% satisfaction guarantee'
      ],
      badge: null,
      icon: <Gift className="w-6 h-6" />,
      buttonText: 'Try Now',
      popular: false,
      savings: null
    },
    {
      id: 'weekly',
      name: '7-Day Pack',
      price: '599',
      originalPrice: '693',
      description: 'Best for first-timers to build the habit',
      features: [
        '7 Premium wellness shots',
        'Daily immunity boost',
        'Natural energy & focus',
        'Anti-inflammatory benefits',
        'Free shipping'
      ],
      badge: 'Best for Beginners',
      icon: <Zap className="w-6 h-6" />,
      buttonText: 'Start Your Journey',
      popular: true,
      savings: '₹94'
    },
    {
      id: 'monthly',
      name: '30-Day Subscription',
      price: '1,999',
      originalPrice: '2,499',
      description: 'Most popular - Complete wellness transformation',
      features: [
        '30 Premium wellness shots',
        'Subscribe & Save 20%',
        'Never miss your daily dose',
        'Priority customer support',
        'Free shipping every month',
        'Cancel anytime'
      ],
      badge: 'Most Popular',
      icon: <Shield className="w-6 h-6" />,
      buttonText: 'Subscribe & Save',
      popular: false,
      savings: '₹500'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-amber-50 via-green-50 to-amber-100 relative overflow-hidden">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Belleza&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" 
        rel="stylesheet" 
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-16 w-64 h-64 bg-amber-200/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-300/10 rounded-full blur-2xl"></div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 2 }}
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-green-800 select-none rotate-6"
          style={{ fontFamily: 'Philosopher, serif' }}
        >
          PACKS
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-green-800/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-green-700/20"
          >
            <Star className="w-6 h-6 text-green-700" />
            <span 
              className="text-lg font-medium text-green-800 tracking-wide"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              Choose Your Wellness Path
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-900 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            Bundles & 
            <span className="block text-amber-700">Pricing</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-green-800/80 font-light max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            Subscribe & Save - Never miss your daily immunity boost
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className={`relative group ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className={`px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600' 
                      : 'bg-gradient-to-r from-green-600 to-green-700'
                  }`}>
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              {/* Pricing Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-700/30 overflow-hidden ${
                  plan.popular ? 'ring-4 ring-amber-400/30 shadow-3xl' : ''
                }`}
              >
                {/* Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 via-transparent to-green-900/30 rounded-3xl"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/15 transition-colors duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-600/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 shadow-lg"
                    >
                      <div className="text-white">
                        {plan.icon}
                      </div>
                    </motion.div>

                    {/* Plan Name */}
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-amber-50 mb-3"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    >
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-4xl lg:text-5xl font-black text-amber-100">
                          ₹{plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-xl text-green-300 line-through opacity-60">
                            ₹{plan.originalPrice}
                          </span>
                        )}
                      </div>
                      {plan.savings && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                          className="inline-block bg-amber-400/20 text-amber-200 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          Save {plan.savings}
                        </motion.div>
                      )}
                    </div>

                    {/* Description */}
                    <p 
                      className="text-green-200/80 leading-relaxed mb-8"
                      style={{ fontFamily: 'Philosopher, serif' }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 1.4 + index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span 
                            className="text-green-100/90 leading-relaxed"
                            style={{ fontFamily: 'Philosopher, serif' }}
                          >
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 lg:py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden relative group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-green-900 hover:from-amber-400 hover:to-amber-600'
                        : 'bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white hover:from-green-500 hover:to-green-700'
                    }`}
                    style={{ fontFamily: 'Philosopher, serif' }}
                  >
                    <span className="relative z-10">{plan.buttonText}</span>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    ></motion.div>
                  </motion.button>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4 + index, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-4 right-4 w-3 h-3 bg-amber-400/40 rounded-full"
                ></motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    x: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5 + index, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-6 left-6 w-2 h-2 bg-green-400/30 rounded-full"
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <motion.p
              className="text-lg text-green-800/70 mb-6 leading-relaxed"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              💡 All packs include free shipping and come with our 100% satisfaction guarantee. 
              Start your wellness journey today!
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-green-100 to-amber-100 rounded-2xl p-1"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-8 py-4">
                <p 
                  className="text-green-800 font-semibold text-lg"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  🌿 Choose Your Pack & Transform Your Health
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;