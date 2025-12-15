import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const FeatureCards: React.FC = () => {
  const { theme } = useTheme();

  const cardBaseClass = `p-6 rounded-xl shadow-lg transition-colors ${
    theme === 'dark' 
      ? 'bg-teal-900 border border-teal-700' 
      : 'bg-white border border-gray-200'
  }`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
      {/* Performance Tracking Card */}
      <div className={cardBaseClass}>
        <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        
        <h3 className={`text-xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Performance Tracking
        </h3>
        
        <div className={`w-12 h-1 bg-teal-500 mb-4`}></div>
        
        <p className={`text-sm leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Generate reports on the performances of each employee.
        </p>
      </div>

      {/* Handle Appointments Card */}
      <div className={cardBaseClass}>
        <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 className={`text-xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Handle Appointments
        </h3>
        
        <div className={`w-12 h-1 bg-teal-500 mb-4`}></div>
        
        <p className={`text-sm leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Handle appointments like a pro and enhance your business.
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
