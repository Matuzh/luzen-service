import React from 'react'

import HeroSection from '../components/Hero';
import ServicesSection from '../components/Services';
import Pricing from '../components/Pricing';
import AboutSection from '../components/About';
import ContactSection from '../components/Contact'
import Reviews from '../components/Reviews';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Pricing />
      <AboutSection />
      <Reviews />
      <ContactSection />
    </>
  );
}
