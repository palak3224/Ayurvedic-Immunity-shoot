import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, Heart, Shield, Award, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Priya",
      location: "Bangalore",
      rating: 5,
      review: "I replaced my morning coffee with these shots – more energy, no acidity. My digestive issues are completely gone!",
      avatar: "P",
      benefits: ["More Energy", "Better Digestion"],
      verified: true
    },
    {
      id: 2,
      name: "Rajesh",
      location: "Delhi",
      rating: 5,
      review: "My whole family takes one daily. Tastes great and feels healthy. Even my kids love the natural sweetness!",
      avatar: "R",
      benefits: ["Family Friendly", "Great Taste"],
      verified: true
    },
    {
      id: 3,
      name: "Ananya",
      location: "Mumbai",
      rating: 5,
      review: "Been taking these for 3 months. My immunity has improved significantly – haven't fallen sick even once!",
      avatar: "A",
      benefits: ["Strong Immunity", "Long-term Results"],
      verified: true
    },
    {
      id: 4,
      name: "Vikram",
      location: "Chennai",
      rating: 5,
      review: "As a fitness enthusiast, these shots give me the perfect pre-workout boost. 100% natural and effective!",
      avatar: "V",
      benefits: ["Pre-workout Boost", "Natural Energy"],
      verified: true
    },
    {
      id: 5,
      name: "Meera",
      location: "Pune",
      rating: 5,
      review: "The anti-inflammatory benefits are real. My joint pain has reduced considerably since I started taking these.",
      avatar: "M",
      benefits: ["Anti-inflammatory", "Joint Health"],
      verified: true
    }
  ];

  const trustBadges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "FSSAI Approved",
      description: "Government certified for quality & safety",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "100% Natural",
      description: "No preservatives, no artificial ingredients",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made in India",
      description: "Proudly crafted with Indian Ayurvedic wisdom",
      color: "from-orange-500 to-orange-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-950 relative overflow-hidden">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Belleza&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" 
        rel="stylesheet" 
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-64 h-64 bg-green-600/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-300/8 rounded-full blur-2xl"></div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 2 }}
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-amber-100 select-none -rotate-12"
          style={{ fontFamily: 'Philosopher, serif' }}
        >
          REVIEWS
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
            className="inline-flex items-center gap-3 bg-amber-400/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-amber-300/30"
          >
            <Heart className="w-6 h-6 text-amber-300" />
            <span 
              className="text-lg font-medium text-amber-100 tracking-wide"
              style={{ fontFamily: 'Philosopher, serif' }}
            >
              Trusted by Thousands
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-amber-50 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            Real Stories, 
            <span className="block text-amber-200">Real Results</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              >
                <Star className="w-8 h-8 text-amber-400 fill-current" />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-2xl text-green-200/80 font-light max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Philosopher, serif' }}
          >
            Over 10,000+ satisfied customers experiencing the power of Ayurveda daily
          </motion.p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            
            {/* Main Review Card */}
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-800/80 via-green-700/80 to-green-800/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-green-600/30 shadow-2xl">
                
                {/* Quote Background */}
                <div className="absolute top-6 right-8 text-6xl text-amber-200/10">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="relative z-10">
                  {/* Customer Info */}
                  <div className="flex items-center gap-6 mb-8">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {reviews[currentReview].avatar}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 
                          className="text-2xl font-bold text-amber-100"
                          style={{ fontFamily: 'Philosopher, serif' }}
                        >
                          {reviews[currentReview].name}
                        </h4>
                        {reviews[currentReview].verified && (
                          <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            Verified
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-green-300" />
                          <span className="text-green-300">{reviews[currentReview].location}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          {[...Array(reviews[currentReview].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote 
                    className="text-xl lg:text-2xl text-green-100 leading-relaxed mb-6 font-light italic"
                    style={{ fontFamily: 'Philosopher, serif' }}
                  >
                    "{reviews[currentReview].review}"
                  </blockquote>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap gap-3">
                    {reviews[currentReview].benefits.map((benefit, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-amber-400/20 text-amber-200 px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {benefit}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-amber-400/20 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-200 hover:bg-amber-400/30 hover:text-amber-100 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-amber-400/20 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-200 hover:bg-amber-400/30 hover:text-amber-100 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-amber-400 scale-125' 
                      : 'bg-green-600/50 hover:bg-green-500/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-800/60 via-green-700/60 to-green-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-600/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                
                {/* Badge Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${badge.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="text-white">
                    {badge.icon}
                  </div>
                </motion.div>

                {/* Badge Content */}
                <h3 
                  className="text-xl lg:text-2xl font-bold text-amber-100 mb-3 group-hover:text-amber-50 transition-colors"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  {badge.title}
                </h3>

                <p 
                  className="text-green-200/80 leading-relaxed group-hover:text-green-100/90 transition-colors"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  {badge.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-500 ease-out mx-auto mt-4"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-400/10 to-green-400/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-amber-300/20 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              
              <div>
                <div className="text-3xl lg:text-4xl font-black text-amber-200 mb-2">
                  10K+
                </div>
                <div 
                  className="text-green-300 text-sm lg:text-base"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  Happy Customers
                </div>
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-black text-amber-200 mb-2">
                  4.9⭐
                </div>
                <div 
                  className="text-green-300 text-sm lg:text-base"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  Average Rating
                </div>
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-black text-amber-200 mb-2">
                  98%
                </div>
                <div 
                  className="text-green-300 text-sm lg:text-base"
                  style={{ fontFamily: 'Philosopher, serif' }}
                >
                  Recommend Us
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;