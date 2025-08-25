import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Award, Shield, Heart, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const AboutBrandSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const certifications = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Organic",
            description: "Certified organic ingredients sourced sustainably"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Non-GMO",
            description: "No genetically modified ingredients, pure and natural"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Preservative-Free",
            description: "Fresh, natural goodness without artificial preservatives"
        }
    ];

    const storyHighlights = [
        {
            icon: "🌿",
            text: "Ancient Ayurvedic wisdom meets modern convenience"
        },
        {
            icon: "❄️",
            text: "Cold-pressed extraction for maximum potency"
        },
        {
            icon: "🏆",
            text: "Premium turmeric & ginger sourced from finest farms"
        },
        {
            icon: "💚",
            text: "Crafted with love for your daily wellness journey"
        }
    ];

    return (
        <section ref={ref} className="bg-gradient-to-br from-amber-50 via-green-50 to-amber-100 relative overflow-hidden">
            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Belleza&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                rel="stylesheet"
            />

            {/* Background Decorative Elements */}
            <div className="absolute top-32 left-20 w-48 h-48 bg-green-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-16 w-64 h-64 bg-amber-200/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-300/10 rounded-full blur-2xl"></div>

            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
                    transition={{ duration: 2 }}
                    className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-green-800 select-none rotate-3"
                    style={{ fontFamily: 'Philosopher, serif' }}
                >
                    STORY
                </motion.div>
            </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-52 relative z-10 py-20">

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
                        <Award className="w-6 h-6 text-green-700" />
                        <span
                            className="text-lg font-medium text-green-800 tracking-wide"
                            style={{ fontFamily: 'Philosopher, serif' }}
                        >
                            Trust & Quality
                        </span>
                    </motion.div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-900 mb-6 tracking-tight leading-tight"
                        style={{ fontFamily: 'Philosopher, serif' }}
                    >
                        Our
                        <span className="block text-amber-700">Story</span>
                    </h2>
                </motion.div>

                {/* Main Content - Left Image, Right Text */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

                    {/* Left Side - Brand Image */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Premium turmeric and ginger ingredients for Ayurvedic wellness shots"
                                className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Quality Badge */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="absolute top-6 right-6 bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-4 shadow-xl"
                            >
                                <div className="text-center">
                                    <Award className="w-8 h-8 text-amber-300 mx-auto mb-2" />
                                    <div className="text-amber-100 text-sm font-bold">Premium</div>
                                    <div className="text-green-300 text-xs">Quality</div>
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute bottom-6 left-6 w-16 h-16 bg-amber-100/90 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <span className="text-2xl">🌿</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 12, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                className="absolute top-1/2 -right-4 w-12 h-12 bg-green-100/90 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <span className="text-xl">✨</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Story Content Card */}
                        <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-700/30">

                            {/* Card Background Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 via-transparent to-green-900/30 rounded-3xl"></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                {/* Story Header */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    className="mb-8"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Sparkles className="w-8 h-8 text-amber-300" />
                                        <h3
                                            className="text-2xl lg:text-3xl font-bold text-amber-100"
                                            style={{ fontFamily: 'Philosopher, serif' }}
                                        >
                                            Our Story
                                        </h3>
                                    </div>
                                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6"></div>
                                </motion.div>

                                {/* Main Story Text */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    className="mb-8"
                                >
                                    <p
                                        className="text-lg lg:text-xl text-green-100/90 leading-relaxed mb-6"
                                        style={{ fontFamily: 'Philosopher, serif' }}
                                    >
                                        We believe in blending ancient Ayurveda with modern convenience. Each shot is crafted from premium turmeric & ginger, cold-pressed for maximum potency.
                                    </p>
                                </motion.div>

                                {/* Story Highlights */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    className="space-y-4 mb-8"
                                >
                                    {storyHighlights.map((highlight, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ x: 30, opacity: 0 }}
                                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                                            transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-lg">{highlight.icon}</span>
                                            </div>
                                            <span
                                                className="text-green-200/90 group-hover:text-green-100 transition-colors"
                                                style={{ fontFamily: 'Philosopher, serif' }}
                                            >
                                                {highlight.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 2 }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-green-900 font-bold py-4 lg:py-5 px-8 lg:px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-3 text-lg overflow-hidden"
                                        style={{ fontFamily: 'Philosopher, serif' }}
                                    >
                                        <Shield className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                        <span className="relative z-10">Shop with Confidence</span>
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="relative z-10"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>

                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="text-center mb-12">
                        <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-3xl lg:text-4xl font-bold text-green-900 mb-4"
                            style={{ fontFamily: 'Philosopher, serif' }}
                        >
                            Our Certifications
                        </motion.h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-amber-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group"
                            >
                                <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl p-8 border border-green-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full">

                                    {/* Certification Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="text-white">
                                            {cert.icon}
                                        </div>
                                    </motion.div>

                                    {/* Certification Content */}
                                    <h4
                                        className="text-xl lg:text-2xl font-bold text-amber-100 mb-3 group-hover:text-amber-50 transition-colors"
                                        style={{ fontFamily: 'Philosopher, serif' }}
                                    >
                                        {cert.title}
                                    </h4>

                                    <p
                                        className="text-green-200/80 leading-relaxed group-hover:text-green-100/90 transition-colors"
                                        style={{ fontFamily: 'Philosopher, serif' }}
                                    >
                                        {cert.description}
                                    </p>

                                    {/* Check Mark */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
                                        className="mt-4"
                                    >
                                        <CheckCircle className="w-8 h-8 text-green-400 mx-auto" />
                                    </motion.div>

                                    {/* Hover Effect Line */}
                                    <div className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-500 ease-out mx-auto mt-4"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Trust Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-green-100/80 to-amber-100/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-green-200/30 max-w-3xl mx-auto">
                        <p
                            className="text-lg lg:text-xl text-green-800 font-medium leading-relaxed"
                            style={{ fontFamily: 'Philosopher, serif' }}
                        >
                            🌿 <em>"Every bottle represents our commitment to your health and our planet's well-being.
                                Experience the difference that quality, purity, and ancient wisdom can make."</em>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutBrandSection;