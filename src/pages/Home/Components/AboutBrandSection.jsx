import React, { useRef, useEffect, useState } from 'react';
import { Leaf, Award, Shield, Heart, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const AboutBrandSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

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
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
                
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-slide-up {
                    animation: slideUp 1s ease-out forwards;
                }
                
                .animate-slide-left {
                    animation: slideLeft 1.2s ease-out forwards;
                }
                
                .animate-slide-right {
                    animation: slideRight 1.2s ease-out forwards;
                }
                
                .animate-scale-in {
                    animation: scaleIn 0.8s ease-out forwards;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float 2.5s ease-in-out infinite 0.5s;
                }
                
                .animate-pulse-glow {
                    animation: pulseGlow 2s ease-in-out infinite;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideLeft {
                    from { opacity: 0; transform: translateX(-100px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes slideRight {
                    from { opacity: 0; transform: translateX(100px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
                }
                
                .delay-200 { animation-delay: 0.2s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-600 { animation-delay: 0.6s; }
                .delay-800 { animation-delay: 0.8s; }
                .delay-1000 { animation-delay: 1s; }
                .delay-1200 { animation-delay: 1.2s; }
                .delay-1400 { animation-delay: 1.4s; }
                .delay-1600 { animation-delay: 1.6s; }
                .delay-1800 { animation-delay: 1.8s; }
                .delay-2000 { animation-delay: 2s; }
                
                .opacity-0 { opacity: 0; }
                
                .hover-scale:hover { transform: scale(1.05); }
                .hover-lift:hover { transform: translateY(-5px); }
                
                .font-philosopher { font-family: 'Philosopher', serif; }
            `}</style>

            {/* Background Decorative Elements */}
            <div className="absolute top-32 left-20 w-48 h-48 bg-green-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-16 w-64 h-64 bg-amber-200/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-300/10 rounded-full blur-2xl"></div>

            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div 
                    className={`text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-green-800 select-none rotate-3 font-philosopher ${isVisible ? 'animate-fade-in delay-400' : 'opacity-0'}`}
                    style={{ opacity: 0.03 }}
                >
                    STORY
                </div>
            </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-52 relative z-10 py-20">

                {/* Section Header */}
                <div className={`text-center mb-16 lg:mb-20 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
                    <div className={`inline-flex items-center gap-3 bg-green-800/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-green-700/20 ${isVisible ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
                        <Award className="w-6 h-6 text-green-700" />
                        <span className="text-lg font-medium text-green-800 tracking-wide font-philosopher">
                            Trust & Quality
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-900 mb-6 tracking-tight leading-tight font-philosopher">
                        Our
                        <span className="block text-amber-700">Story</span>
                    </h2>
                </div>

                {/* Main Content - Left Image, Right Text */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

                    {/* Left Side - Brand Image */}
                    <div className={`relative ${isVisible ? 'animate-slide-left delay-600' : 'opacity-0'}`}>
                        <div className="relative overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Premium turmeric and ginger ingredients for Ayurvedic wellness shots"
                                className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Quality Badge */}
                            <div className={`absolute top-6 right-6 bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-4 shadow-xl ${isVisible ? 'animate-scale-in delay-1200' : 'opacity-0'}`}>
                                <div className="text-center">
                                    <Award className="w-8 h-8 text-amber-300 mx-auto mb-2" />
                                    <div className="text-amber-100 text-sm font-bold">Premium</div>
                                    <div className="text-green-300 text-xs">Quality</div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className={`absolute bottom-6 left-6 w-16 h-16 bg-amber-100/90 rounded-full flex items-center justify-center shadow-lg ${isVisible ? 'animate-float' : 'opacity-0'}`}>
                                <span className="text-2xl">🌿</span>
                            </div>

                            <div className={`absolute top-1/2 -right-4 w-12 h-12 bg-green-100/90 rounded-full flex items-center justify-center shadow-lg ${isVisible ? 'animate-float-delayed' : 'opacity-0'}`}>
                                <span className="text-xl">✨</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-8 ${isVisible ? 'animate-slide-right delay-800' : 'opacity-0'}`}>
                        {/* Story Content Card */}
                        <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-3xl p-8 lg:p-10 shadow-2xl border border-green-700/30 relative">

                            {/* Card Background Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-700/20 via-transparent to-green-900/30 rounded-3xl"></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>

                            <div className="relative z-10">
                                {/* Story Header */}
                                <div className={`mb-8 ${isVisible ? 'animate-slide-up delay-1000' : 'opacity-0'}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Sparkles className="w-8 h-8 text-amber-300" />
                                        <h3 className="text-2xl lg:text-3xl font-bold text-amber-100 font-philosopher">
                                            Our Story
                                        </h3>
                                    </div>
                                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6"></div>
                                </div>

                                {/* Main Story Text */}
                                <div className={`mb-8 ${isVisible ? 'animate-fade-in delay-1200' : 'opacity-0'}`}>
                                    <p className="text-lg lg:text-xl text-green-100/90 leading-relaxed mb-6 font-philosopher">
                                        We believe in blending ancient Ayurveda with modern convenience. Each shot is crafted from premium turmeric & ginger, cold-pressed for maximum potency.
                                    </p>
                                </div>

                                {/* Story Highlights */}
                                <div className={`space-y-4 mb-8 ${isVisible ? 'animate-slide-up delay-1400' : 'opacity-0'}`}>
                                    {storyHighlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-4 group hover-scale transition-transform duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-lg">{highlight.icon}</span>
                                            </div>
                                            <span className="text-green-200/90 group-hover:text-green-100 transition-colors font-philosopher">
                                                {highlight.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className={`${isVisible ? 'animate-slide-up delay-2000' : 'opacity-0'}`}>
                                    <button className="group relative bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-green-900 font-bold py-4 lg:py-5 px-8 lg:px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-3 text-lg overflow-hidden hover-scale hover-lift font-philosopher">
                                        <Shield className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                        <span className="relative z-10">Shop with Confidence</span>
                                        <ArrowRight className="w-5 h-5 relative z-10" />

                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className={`${isVisible ? 'animate-slide-up delay-800' : 'opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h3 className={`text-3xl lg:text-4xl font-bold text-green-900 mb-4 font-philosopher ${isVisible ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
                            Our Certifications
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-amber-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className={`group hover-scale hover-lift transition-all duration-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                            >
                                <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 rounded-2xl p-8 border border-green-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full">

                                    {/* Certification Icon */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:rotate-12">
                                        <div className="text-white">
                                            {cert.icon}
                                        </div>
                                    </div>

                                    {/* Certification Content */}
                                    <h4 className="text-xl lg:text-2xl font-bold text-amber-100 mb-3 group-hover:text-amber-50 transition-colors font-philosopher">
                                        {cert.title}
                                    </h4>

                                    <p className="text-green-200/80 leading-relaxed group-hover:text-green-100/90 transition-colors font-philosopher">
                                        {cert.description}
                                    </p>

                                    {/* Check Mark */}
                                    <div className="mt-4">
                                        <CheckCircle className="w-8 h-8 text-green-400 mx-auto" />
                                    </div>

                                    {/* Hover Effect Line */}
                                    <div className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-500 ease-out mx-auto mt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Trust Statement */}
                <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in delay-1800' : 'opacity-0'}`}>
                    <div className="bg-gradient-to-r from-green-100/80 to-amber-100/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-green-200/30 max-w-3xl mx-auto">
                        <p className="text-lg lg:text-xl text-green-800 font-medium leading-relaxed font-philosopher">
                            🌿 <em>"Every bottle represents our commitment to your health and our planet's well-being.
                                Experience the difference that quality, purity, and ancient wisdom can make."</em>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBrandSection;