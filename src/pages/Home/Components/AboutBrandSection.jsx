import React, { useRef, useEffect, useState } from 'react';
import { Leaf, Award, Shield, Heart, CheckCircle, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

const ModernBrandSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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
            icon: <Leaf className="w-7 h-7" />,
            title: "100% Organic",
            description: "Certified organic ingredients from sustainable farms",
            gradient: "from-green-500 to-emerald-600"
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "Non-GMO Verified",
            description: "Pure, natural ingredients without genetic modification",
            gradient: "from-amber-500 to-orange-600"
        },
        {
            icon: <Heart className="w-7 h-7" />,
            title: "Clean Label",
            description: "No artificial preservatives, colors, or flavors",
            gradient: "from-green-600 to-teal-600"
        }
    ];

    const storyPoints = [
        {
            icon: "🌿",
            title: "Ancient Wisdom",
            text: "5000-year-old Ayurvedic traditions"
        },
        {
            icon: "❄️",
            title: "Cold-Pressed",
            text: "Maximum nutrient preservation"
        },
        {
            icon: "🏆",
            title: "Premium Quality",
            text: "Sourced from the finest farms"
        },
        {
            icon: "💚",
            title: "Wellness Focus",
            text: "Crafted for your daily health"
        }
    ];

    return (
        <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-100 overflow-hidden">
            {/* Advanced CSS Animations */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
                
                .animate-fade-up {
                    animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                .animate-fade-left {
                    animation: fadeLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                .animate-fade-right {
                    animation: fadeRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                .animate-scale-up {
                    animation: scaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                .animate-bounce-gentle {
                    animation: bounceGentle 2s ease-in-out infinite;
                }
                
                .animate-pulse-soft {
                    animation: pulseSoft 3s ease-in-out infinite;
                }
                
                .animate-float-subtle {
                    animation: floatSubtle 4s ease-in-out infinite;
                }
                
                .animate-glow {
                    animation: glow 2s ease-in-out infinite alternate;
                }
                
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fadeLeft {
                    from { opacity: 0; transform: translateX(-60px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes fadeRight {
                    from { opacity: 0; transform: translateX(60px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes scaleUp {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                
                @keyframes bounceGentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                
                @keyframes pulseSoft {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 1; }
                }
                
                @keyframes floatSubtle {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-5px) rotate(1deg); }
                    75% { transform: translateY(5px) rotate(-1deg); }
                }
                
                @keyframes glow {
                    from { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
                    to { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
                }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-1000 { animation-delay: 1s; }
                .delay-1200 { animation-delay: 1.2s; }
                .delay-1500 { animation-delay: 1.5s; }
                
                .opacity-0 { opacity: 0; }
                
                .glass-effect {
                    backdrop-filter: blur(16px);
                    background: rgba(255, 255, 255, 0.1);
                }
                
                .text-gradient {
                    background: linear-gradient(135deg, #059669, #d97706);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .card-hover {
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .card-hover:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
                
                .btn-modern {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                }
                
                .btn-modern::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }
                
                .btn-modern:hover::before {
                    left: 100%;
                }
                
                .btn-modern:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
                }
                
                .font-display { font-family: 'Playfair Display', serif; }
                .font-body { font-family: 'Inter', sans-serif; }
                
                .pattern-dots {
                    background-image: radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0);
                    background-size: 20px 20px;
                }
            `}</style>

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-300/20 to-emerald-300/20 rounded-full blur-3xl animate-float-subtle"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-300/15 to-orange-300/15 rounded-full blur-3xl animate-float-subtle delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse-soft"></div>
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 pattern-dots opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 pattern-dots opacity-20"></div>
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

                {/* Hero Section */}
                <div className={`text-center mb-16 lg:mb-24 ${isVisible ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8 border border-green-200/30 ${isVisible ? 'animate-scale-up delay-300' : 'opacity-0'}`}>
                        <Star className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium text-green-800 font-body">Premium Wellness Brand</span>
                        <Sparkles className="w-4 h-4 text-amber-600 animate-bounce-gentle" />
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 font-display">
                        <span className="block text-green-900">Our</span>
                        <span className="block text-gradient">Story</span>
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-lg sm:text-xl lg:text-2xl text-green-700/80 max-w-3xl mx-auto font-body leading-relaxed ${isVisible ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
                        Where ancient Ayurvedic wisdom meets modern wellness innovation
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">

                    {/* Left Column - Image & Stats */}
                    <div className={`lg:col-span-5 ${isVisible ? 'animate-fade-left delay-700' : 'opacity-0'}`}>
                        <div className="relative">
                            {/* Main Image Card */}
                            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl card-hover">
                                <img
                                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Premium organic turmeric and ginger"
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                />
                                
                                {/* Floating Quality Badge */}
                                <div className={`absolute top-4 right-4 glass-effect rounded-2xl p-3 border border-white/20 ${isVisible ? 'animate-scale-up delay-1200' : 'opacity-0'}`}>
                                    <div className="text-center">
                                        <Award className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                                        <div className="text-green-900 text-xs font-bold">Premium</div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className={`absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle ${isVisible ? 'animate-scale-up delay-1000' : 'opacity-0'}`}>
                                    <span className="text-lg">🌿</span>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className={`grid grid-cols-2 gap-4 mt-6 ${isVisible ? 'animate-fade-up delay-1200' : 'opacity-0'}`}>
                                <div className="glass-effect rounded-2xl p-4 border border-green-200/30">
                                    <div className="text-2xl font-bold text-green-900 font-display">5000+</div>
                                    <div className="text-sm text-green-700 font-body">Years of Wisdom</div>
                                </div>
                                <div className="glass-effect rounded-2xl p-4 border border-amber-200/30">
                                    <div className="text-2xl font-bold text-amber-800 font-display">100%</div>
                                    <div className="text-sm text-amber-700 font-body">Organic Certified</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Story Content */}
                    <div className={`lg:col-span-7 ${isVisible ? 'animate-fade-right delay-700' : 'opacity-0'}`}>
                        
                        {/* Story Card */}
                        <div className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-green-600/20 relative overflow-hidden">
                            
                            {/* Card Background Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-700/30 via-transparent to-green-900/50 rounded-3xl"></div>
                            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
                            
                            <div className="relative z-10">
                                {/* Header */}
                                <div className={`mb-8 ${isVisible ? 'animate-fade-up delay-1000' : 'opacity-0'}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
                                            Our Journey
                                        </h2>
                                    </div>
                                    <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                                </div>

                                {/* Story Text */}
                                <div className={`mb-8 ${isVisible ? 'animate-fade-up delay-1200' : 'opacity-0'}`}>
                                    <p className="text-base sm:text-lg lg:text-xl text-green-100/90 leading-relaxed font-body mb-6">
                                        Born from a passion for holistic wellness, we've dedicated ourselves to bringing you 
                                        the purest, most potent wellness shots. Every bottle represents our commitment to 
                                        quality, sustainability, and your health.
                                    </p>
                                </div>

                                {/* Story Points Grid */}
                                <div className={`grid sm:grid-cols-2 gap-4 mb-8 ${isVisible ? 'animate-fade-up delay-1500' : 'opacity-0'}`}>
                                    {storyPoints.map((point, index) => (
                                        <div key={index} className="group">
                                            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                                                <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <span className="text-lg">{point.icon}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-amber-200 font-semibold text-sm mb-1 font-body">{point.title}</h4>
                                                    <p className="text-green-200/80 text-sm font-body">{point.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className={`${isVisible ? 'animate-fade-up delay-1500' : 'opacity-0'}`}>
                                    <button className="btn-modern text-white font-bold py-4 px-8 rounded-2xl shadow-xl flex items-center gap-3 text-base font-body group">
                                        <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                        <span>Experience Our Story</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className={`${isVisible ? 'animate-fade-up delay-1000' : 'opacity-0'}`}>
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-6 border border-green-200/30">
                            <Shield className="w-5 h-5 text-green-700" />
                            <span className="text-sm font-medium text-green-800 font-body">Trust & Certifications</span>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4 font-display">
                            Quality You Can Trust
                        </h2>
                        <p className="text-lg text-green-700/80 max-w-2xl mx-auto font-body">
                            Every certification represents our unwavering commitment to excellence
                        </p>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className={`card-hover group ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                            >
                                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-green-100/50 text-center h-full relative overflow-hidden">
                                    
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                                    
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                                            <div className="text-white">
                                                {cert.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl lg:text-2xl font-bold text-green-900 mb-3 group-hover:text-green-800 transition-colors font-display">
                                            {cert.title}
                                        </h3>

                                        <p className="text-green-700/80 leading-relaxed group-hover:text-green-800 transition-colors font-body mb-4">
                                            {cert.description}
                                        </p>

                                        {/* Verification Mark */}
                                        <div className="inline-flex items-center gap-2 text-green-600">
                                            <CheckCircle className="w-5 h-5" />
                                            <span className="text-sm font-medium font-body">Verified</span>
                                        </div>

                                        {/* Hover Effect Bar */}
                                        <div className={`w-0 h-1 bg-gradient-to-r ${cert.gradient} group-hover:w-full transition-all duration-500 ease-out mx-auto mt-4 rounded-full`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Quote Section */}
                <div className={`text-center mt-16 lg:mt-24 ${isVisible ? 'animate-fade-up delay-1500' : 'opacity-0'}`}>
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-effect rounded-3xl p-8 lg:p-12 border border-green-200/30 relative overflow-hidden">
                            
                            {/* Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-amber-100/30 to-green-100/50 rounded-3xl"></div>
                            
                            <div className="relative z-10">
                                {/* Quote Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <span className="text-2xl text-white">"</span>
                                </div>
                                
                                {/* Quote Text */}
                                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-green-900 font-medium leading-relaxed font-display italic mb-6">
                                    "Every bottle is a testament to our commitment to your wellness journey and our planet's future."
                                </blockquote>
                                
                                {/* Signature */}
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-green-800 font-semibold font-body">With Love & Care</div>
                                        <div className="text-green-600 text-sm font-body">The Wellness Team</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernBrandSection;