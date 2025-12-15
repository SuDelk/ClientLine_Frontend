import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="flex-1 flex flex-col justify-center max-w-lg">
      <h1 className={`text-5xl font-bold leading-tight mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Digitalize & Elevate Your Appointments
      </h1>
      
      <div className={`text-lg leading-relaxed mb-8 space-y-1 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        <p>Effortless Booking, Enhanced Client Experience.</p>
        <p>The all-in-one platform built for Salons, Tattoo Shops</p>
        <p>and Nail Artists to streamline scheduling and boost revenue.</p>
      </div>

      <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors w-fit">
        LOGIN
      </button>
    </section>
  );
};

export default HeroSection;
