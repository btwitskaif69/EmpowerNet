// src/pages/Home.jsx
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Ourmission from '@/components/Ourmission'; // Assuming this is the correct path
import Initiative from '@/components/Initiative';
import Testimonials from '@/components/Testimonials'; // Assuming this is the correct path
import CTA from '@/components/CTA';
import Newsletter from '@/components/Newsletter';

const Home = () => {
  return <div>
    <HeroSection/>
    <Ourmission/>
    <Initiative/>
    <Testimonials/>
    <CTA/>
    <Newsletter/>
  </div>;
};

export default Home;
