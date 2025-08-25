import React, { useRef, useEffect, useState } from 'react';
import { Leaf, Award, Shield, Heart, CheckCircle, Sparkles, Star, Users, Globe } from 'lucide-react';
import AboutImg from '@/assets/about.png';

const MinimizedBrandSection = () => {
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

    useEffect(() => {
        // Load Google Fonts
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = 'https://fonts.googleapis.com';
        document.head.appendChild(link);

        const link2 = document.createElement('link');
        link2.rel = 'preconnect';
        link2.href = 'https://fonts.gstatic.com';
        link2.crossOrigin = 'true';
        document.head.appendChild(link2);

        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Belleza&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
            document.head.removeChild(fontLink);
        };
    }, []);

    const brandValues = [
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "100% Organic",
            description: "Certified organic ingredients from sustainable farms",
            gradient: "from-green-500 to-emerald-600"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Pure & Natural",
            description: "No artificial additives or preservatives",
            gradient: "from-amber-500 to-yellow-600"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Wellness Focused",
            description: "Crafted with your health and vitality in mind",
            gradient: "from-rose-500 to-pink-600"
        }
    ];

    const impactStats = [
        { number: "1M+", label: "Happy Customers" },
        { number: "99.9%", label: "Satisfaction Rate" },
        { number: "50+", label: "Countries" }
    ];

    return (
        <section ref={ref} className="relative bg-gradient-to-br from-amber-50 via-cream-100 to-green-50 py-16 lg:py-20" style={{
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 25%, #ecfdf5 75%, #f0fdf4 100%)'
        }}>
            
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-green-200/20 to-emerald-200/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-yellow-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-green-200/50">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-semibold text-green-800">Our Story</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-light text-green-900 mb-4" style={{fontFamily: 'Belleza, sans-serif'}}>
                        Crafted with
                        <span className="block font-bold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent" style={{fontFamily: 'Philosopher, serif'}}>
                            Purpose & Passion
                        </span>
                    </h1>
                    
                    <p className="text-xl text-green-800/70 max-w-2xl mx-auto">
                        Where ancient Ayurvedic wisdom meets modern wellness innovation
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    
                    {/* Left: Image */}
                    <div className="relative">
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 shadow-xl border border-green-200/30">
                            <img
                                src={AboutImg}
                                alt="Premium organic wellness ingredients"
                                className="w-full h-[28rem] lg:h-[42rem] object-fit rounded-2xl"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-3 shadow-lg">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Story Content */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-green-900 mb-4" style={{fontFamily: 'Philosopher, serif'}}>
                                Our Journey
                            </h2>
                            <p className="text-xl text-green-800/80 leading-relaxed mb-6">
                                Born from a passion for holistic wellness, we've dedicated ourselves to bringing you 
                                the purest, most potent wellness shots. Every bottle represents our commitment to 
                                quality, sustainability, and your health.
                            </p>
                            <p className="text-xl text-green-800/80 leading-relaxed">
                                Using 5000-year-old Ayurvedic traditions combined with modern cold-pressed technology, 
                                we preserve every nutrient while honoring ancient wisdom.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {impactStats.map((stat, index) => (
                                <div key={index} className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-green-200/30">
                                    <div className="text-2xl font-bold text-green-900">{stat.number}</div>
                                    <div className="text-sm text-green-700">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Brand Values */}
                <div>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-green-900 mb-3" style={{fontFamily: 'Philosopher, serif'}}>
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-green-800/70">
                            Quality standards that set us apart
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {brandValues.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-green-200/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
                            >
                                {/* Icon */}
                                <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {value.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-green-900 mb-2" style={{fontFamily: 'Belleza, sans-serif'}}>
                                    {value.title}
                                </h3>
                                
                                <p className="text-green-800/80 text-base leading-relaxed mb-3">
                                    {value.description}
                                </p>

                                {/* Verified Badge */}
                                <div className="inline-flex items-center gap-1 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span className="text-xs font-medium">Verified</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MinimizedBrandSection;