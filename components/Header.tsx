import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import ToggleSwitch from './ToggleSwitch';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`w-full px-6 py-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={"/Logo.png"} alt='logo' width={324} height={88}/>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold hover:text-[#17A2B8] transition-colors duration-200`}>
            Home
          </a>
          <a href="#" className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold hover:text-[#17A2B8] transition-colors duration-200`}>
            LOGIN
          </a>
          <button className="text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2" style={{ backgroundColor: '#17A2B8' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#138496'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#17A2B8'}>
            <span>JOIN US</span>
            <span>→</span>
          </button>
          
          {/* Theme Toggle Switch */}
          <ToggleSwitch/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
