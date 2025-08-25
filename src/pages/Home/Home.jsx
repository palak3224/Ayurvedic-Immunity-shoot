import React from 'react'
import HeroSection from './Components/Hero'
import WhyChooseSection from './Components/WhyChooseSection'
import HowItWorksSection from './Components/HowItWorksSection'
import PricingSection from './Components/PricingSection'
import SocialProofSection from './Components/SocialProofSection'
import FinalCTASection from './Components/FinalCTASection'
import ModernBrandSection from './Components/AboutBrandSection'


function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <PricingSection />
      <SocialProofSection />
      <ModernBrandSection />
      <FinalCTASection />
    </div>
  )
}

export default Home
