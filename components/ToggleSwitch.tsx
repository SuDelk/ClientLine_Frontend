import { useTheme } from '@/contexts/ThemeContext';

export default function ToggleSwitch() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <div className={`w-16 h-8 rounded-full peer transition-colors duration-200 ${
              theme === 'dark' ? 'bg-[#17A2B8]/50' : 'bg-slate-700'
            }`}></div>
            <span className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-200 ease-in-out flex items-center justify-center text-xs ${
              theme === 'dark' ? 'bg-black translate-x-8' : 'bg-white translate-x-0'
            }`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
        </label>
    );
};