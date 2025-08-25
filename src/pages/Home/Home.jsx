import React from 'react'
import HeroSection from './Components/Hero'
import WhyChooseSection from './Components/WhyChooseSection'
import HowItWorksSection from './Components/HowItWorksSection'
import PricingSection from './Components/PricingSection'
import SocialProofSection from './Components/SocialProofSection'
import AboutBrandSection from './Components/AboutBrandSection'
import FinalCTASection from './Components/FinalCTASection'


function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <PricingSection />
      <SocialProofSection />
      <AboutBrandSection />
      <FinalCTASection />
    </div>
  )
}

export default Home
