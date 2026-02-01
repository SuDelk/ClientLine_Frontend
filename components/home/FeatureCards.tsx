import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { IoAnalytics } from 'react-icons/io5';
import { RxCalendar } from 'react-icons/rx';

const FeatureCards: React.FC = () => {
  const { theme } = useTheme();

  const cardBaseClass = `p-6 rounded-xl shadow-lg transition-colors ${
    theme === 'dark' 
      ? 'bg-[#00BF63]/30' 
      : 'bg-white'
  }`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
      {/* Performance Tracking Card */}
      <div className={cardBaseClass}>
        <div className="flex items-center justify-center w-12 h-12 bg-[#17A2B8] rounded-full mb-4">
          <IoAnalytics className="w-6 h-6 text-white" />
        </div>
        
        <h3 className={`text-xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Performance Tracking
        </h3>
        
        <div className={`w-12 h-1 bg-[#00BF63] mb-4`}></div>
        
        <p className={`text-sm leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Generate reports on the performances of each employee.
        </p>
      </div>

      {/* Handle Appointments Card */}
      <div className={cardBaseClass}>
        <div className="flex items-center justify-center w-12 h-12 bg-[#17A2B8] rounded-full mb-4">
          <RxCalendar className="w-6 h-6 text-white" />
        </div>
        
        <h3 className={`text-xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Handle Appointments
        </h3>
        
        <div className={`w-12 h-1 bg-[#00BF63] mb-4`}></div>
        
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
