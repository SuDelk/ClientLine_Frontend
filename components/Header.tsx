import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`w-full px-6 py-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            ClientLine
          </span>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            DIGITALIZE YOUR APPOINTMENTS
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className={`${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} font-medium`}>
            Home
          </a>
          <a href="#" className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium`}>
            LOGIN
          </a>
          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors flex items-center space-x-2">
            <span>JOIN US</span>
            <span>→</span>
          </button>
          
          {/* Theme Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <div className={`w-16 h-8 rounded-full peer transition-colors duration-200 ${
              theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'
            }`}></div>
            <span className={`absolute left-1 top-1 w-6 h-6 bg-black rounded-full transition-transform duration-200 ease-in-out flex items-center justify-center text-xs ${
              theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
            }`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
          </label>
        </nav>
      </div>
    </header>
  );
};

export default Header;
