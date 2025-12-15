import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
     <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero + Feature Cards */}
          <div className="space-y-12">
            <HeroSection />
            <FeatureCards />
          </div>
          
          {/* Right Side - Illustration Placeholder */}
          <div className={`hidden lg:flex items-center justify-center h-96 rounded-xl ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-lg`}>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Salon Illustration Goes Here
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="text-center py-8">
        <p className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Copyright © 2025 ClientLine. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
