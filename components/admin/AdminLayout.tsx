import Sidebar from './Sidebar';
import Header from './Header';
import { useTheme } from '../../contexts/ThemeContext';
import { useState, useEffect } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`flex h-screen ${
      theme === "dark" ? "bg-gray-900" : "bg-gray-50"
    }`}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-4 lg:p-6 mt-20">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;