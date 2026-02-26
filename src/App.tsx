import React from 'react';
import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { TargetAudienceSection } from './components/sections/TargetAudienceSection';
import { BonusesSection } from './components/sections/BonusesSection';
import { PricingSection } from './components/sections/PricingSection';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/30">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProblemSection />
      <TargetAudienceSection />
      <BonusesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
