import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Shield, Gift } from 'lucide-react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      badge: 'Most Popular',
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
      description: 'Complete wellness transformation',
      features: [
        '30 Premium wellness shots',
        'Subscribe & Save 20%',
        'Never miss your daily dose',
        'Priority customer support',
        'Free shipping every month',
        'Cancel anytime'
      ],
      badge: 'Best Value',
      icon: <Shield className="w-6 h-6" />,
      buttonText: 'Subscribe & Save',
      popular: false,
      savings: '₹500'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-amber-50 via-green-50 to-amber-100 relative">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.08),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-green-800/10 rounded-full px-6 py-3 mb-8 border border-green-700/20">
            <Star className="w-5 h-5 text-green-700" />
            <span className="text-sm font-semibold text-green-800 tracking-wide uppercase">
              Premium Wellness Plans
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-light text-green-900 mb-6 tracking-tight">
            Choose Your
            <span className="block font-semibold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </h2>
          
          <p className="text-xl text-green-800/80 font-light max-w-2xl mx-auto leading-relaxed">
            Premium Ayurvedic wellness shots crafted for your daily vitality
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-6 py-2 rounded-full text-sm font-semibold shadow-lg text-white ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600' 
                      : 'bg-gradient-to-r from-green-600 to-green-700'
                  }`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Pricing Card */}
              <div
                className={`relative h-full bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl p-8 lg:p-10 shadow-lg border transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-amber-400/30 shadow-amber-100/20 hover:shadow-amber-200/30 ring-2 ring-amber-400/20' 
                    : 'border-green-700/30 hover:border-green-600/40'
                }`}
              >
                
                <div className="text-center mb-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl mb-6 shadow-lg">
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-semibold text-amber-50 mb-4">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-5xl font-light text-amber-100">
                        ₹{plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-xl text-green-300 line-through opacity-60">
                          ₹{plan.originalPrice}
                        </span>
                      )}
                    </div>
                    {plan.savings && (
                      <div className="inline-block bg-amber-400/20 text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                        Save {plan.savings}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-green-200/80 leading-relaxed mb-8">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-green-100/90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-green-900 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-200/30'
                      : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-500 hover:to-green-600 hover:shadow-green-200/30'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-2xl p-8 border border-green-200/50">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                100% Satisfaction Guaranteed
              </h3>
              
              <p className="text-green-800/70 leading-relaxed mb-6">
                Free shipping on all orders • Premium ingredients • Sustainably sourced • Cancel anytime
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm text-green-700/70">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Certified Organic</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-green-600" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;