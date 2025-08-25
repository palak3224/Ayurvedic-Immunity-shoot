import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Shield, Gift, Sparkles, Crown, ArrowRight } from 'lucide-react';

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
      savings: null,
      highlight: false
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
        'Free shipping',
        'Priority support'
      ],
      badge: 'Most Popular',
      icon: <Zap className="w-6 h-6" />,
      buttonText: 'Start Your Journey',
      popular: true,
      savings: '₹94',
      highlight: true
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
      savings: '₹500',
      highlight: false
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-amber-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-green-200/30 via-green-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-amber-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-emerald-200/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-green-200/50 shadow-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
            <span className="text-sm font-semibold text-green-800 tracking-wide">
              Premium Wellness Plans
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-light text-green-900 mb-6 tracking-tight">
            Choose Your
            <span className="block font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </h2>
          
          <p className="text-xl text-green-800/70 font-light max-w-2xl mx-auto leading-relaxed">
            Premium Ayurvedic wellness shots crafted for your daily vitality
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: plan.popular ? -8 : -4, scale: plan.popular ? 1.02 : 1.01 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-8' : ''} group`}
            >
              {/* Glow Effect for Popular Plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-300/20 to-amber-400/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}

              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`relative px-6 py-3 rounded-full text-sm font-bold shadow-xl text-forest-900 border-2 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 border-yellow-300/70 shadow-yellow-500/40' 
                      : 'bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 border-yellow-400/70 shadow-yellow-500/40'
                  }`}>
                    {plan.popular && <Crown className="w-4 h-4 inline-block mr-2" />}
                    {plan.badge}
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 to-amber-300/50 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
              )}

              {/* Pricing Card */}
              <div
                className={`relative h-full backdrop-blur-sm rounded-3xl p-8 lg:p-10 transition-all duration-500 border-2 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 border-yellow-400/60 shadow-2xl shadow-yellow-500/20' 
                    : 'bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 border-forest-600/40 shadow-xl hover:shadow-2xl hover:border-forest-500/60'
                } hover:shadow-2xl group-hover:border-opacity-80`}
                style={{
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #1e3a2e 0%, #2d5a3d 50%, #3a7249 100%)'
                    : 'linear-gradient(135deg, #1a2f23 0%, #2d5a3d 50%, #1a2f23 100%)'
                }}
              >
                
                <div className="text-center mb-8">
                  {/* Icon with Enhanced Styling */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-yellow-500/40' 
                      : 'bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-700 shadow-yellow-500/30'
                  }`}>
                    <div className="text-forest-900 relative font-bold">
                      {plan.icon}
                      {plan.popular && (
                        <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-200 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className={`text-2xl font-bold mb-4 ${
                    plan.popular ? 'text-yellow-100' : 'text-green-100'
                  }`}>
                    {plan.name}
                  </h3>

                  {/* Price with Enhanced Typography */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                      <span className={`text-6xl font-bold tracking-tight ${
                        plan.popular ? 'text-yellow-200' : 'text-green-200'
                      }`}>
                        ₹{plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-xl text-green-400/70 line-through">
                          ₹{plan.originalPrice}
                        </span>
                      )}
                    </div>
                    {plan.savings && (
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold shadow-sm ${
                        plan.popular 
                          ? 'bg-yellow-400/20 text-yellow-200 border border-yellow-400/30' 
                          : 'bg-green-400/20 text-green-200 border border-green-400/30'
                      }`}>
                        💰 Save {plan.savings}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`leading-relaxed mb-8 ${
                    plan.popular ? 'text-green-200/90' : 'text-green-200/80'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features with Better Spacing */}
                <div className="mb-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shadow-sm ${
                          plan.popular 
                            ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' 
                            : 'bg-gradient-to-br from-yellow-500 to-amber-600'
                        }`}>
                          <Check className="w-3.5 h-3.5 text-forest-900 stroke-2 font-bold" />
                        </div>
                        <span className={`font-medium ${
                          plan.popular ? 'text-green-100' : 'text-green-200'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA Button */}
                <button
                  className={`group/btn w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 text-forest-900 hover:from-yellow-400 hover:via-yellow-300 hover:to-amber-400 shadow-yellow-500/40 hover:shadow-yellow-400/60'
                      : 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 text-forest-900 hover:from-yellow-500 hover:via-yellow-400 hover:to-amber-500 shadow-yellow-500/30 hover:shadow-yellow-500/50'
                  } relative overflow-hidden`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/80 via-green-50/50 to-amber-50/50 backdrop-blur-sm rounded-3xl p-10 border border-green-200/50 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-green-900 mb-6">
                100% Satisfaction Guaranteed
              </h3>
              
              <p className="text-lg text-green-800/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers on their wellness journey with premium ingredients, 
                sustainable sourcing, and exceptional customer service.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Shield, text: 'Certified Organic', color: 'green' },
                  { icon: Zap, text: 'Fast Delivery', color: 'amber' },
                  { icon: Star, text: 'Premium Quality', color: 'green' },
                  { icon: Gift, text: 'Free Shipping', color: 'amber' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/60 border border-gray-200/50">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.color === 'amber' 
                        ? 'bg-gradient-to-br from-amber-100 to-yellow-100' 
                        : 'bg-gradient-to-br from-green-100 to-emerald-100'
                    }`}>
                      <item.icon className={`w-6 h-6 ${
                        item.color === 'amber' ? 'text-amber-600' : 'text-green-600'
                      }`} />
                    </div>
                    <span className="font-semibold text-green-800 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;