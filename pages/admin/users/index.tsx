import AdminLayout from '../../../components/admin/AdminLayout';
import { useTheme } from '../../../contexts/ThemeContext';
import { useState } from 'react';

const Users = () => {
  const { theme } = useTheme();
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className={`text-xl sm:text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>Users</h1>
          <button 
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full sm:w-auto"
          >
            Add New User
          </button>
        </div>

        {/* Add User Form */}
        {showAddForm && (
          <div className={`rounded-lg shadow-sm p-4 sm:p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-semibold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>Add New User</h2>
              <button 
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>Full Name</label>
                <input type="text" className={`w-full px-3 py-2 border rounded-lg ${
                  theme === "dark" 
                    ? "bg-gray-700 border-gray-600 text-white" 
                    : "bg-white border-gray-300"
                }`} placeholder="Enter full name" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>Email</label>
                <input type="email" className={`w-full px-3 py-2 border rounded-lg ${
                  theme === "dark" 
                    ? "bg-gray-700 border-gray-600 text-white" 
                    : "bg-white border-gray-300"
                }`} placeholder="Enter email" />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>Role</label>
                <select className={`w-full px-3 py-2 border rounded-lg ${
                  theme === "dark" 
                    ? "bg-gray-700 border-gray-600 text-white" 
                    : "bg-white border-gray-300"
                }`}>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Staff</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>Phone</label>
                <input type="tel" className={`w-full px-3 py-2 border rounded-lg ${
                  theme === "dark" 
                    ? "bg-gray-700 border-gray-600 text-white" 
                    : "bg-white border-gray-300"
                }`} placeholder="Enter phone number" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                Add User
              </button>
              <button 
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        
        {/* Users List */}
        <div className={`rounded-lg shadow-sm p-4 sm:p-6 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}>
          {/* Desktop Table */}
          <div className="hidden md:block space-y-4">
            <div className="grid grid-cols-5 gap-4 p-4 border-b">
              <div className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>Name</div>
              <div className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>Email</div>
              <div className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>Role</div>
              <div className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>Status</div>
              <div className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>Actions</div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">John Doe</div>
              <div className="text-teal-500">john@example.com</div>
              <div className="text-teal-500">Admin</div>
              <div><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">Jane Smith</div>
              <div className="text-teal-500">jane@example.com</div>
              <div className="text-teal-500">Manager</div>
              <div><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span></div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
              <div className="text-teal-500">Mike Johnson</div>
              <div className="text-teal-500">mike@example.com</div>
              <div className="text-teal-500">Staff</div>
              <div><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span></div>
              <div className="space-x-2">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <div className={`p-4 rounded-lg border ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-teal-500 font-medium">John Doe</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
              </div>
              <p className="text-teal-500 text-sm mb-1">john@example.com</p>
              <p className="text-teal-500 text-sm mb-3">Admin</p>
              <div className="flex space-x-2">
                <button className="text-blue-500 hover:underline text-sm">Edit</button>
                <button className="text-red-500 hover:underline text-sm">Delete</button>
              </div>
            </div>
            
            <div className={`p-4 rounded-lg border ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-teal-500 font-medium">Jane Smith</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
              </div>
              <p className="text-teal-500 text-sm mb-1">jane@example.com</p>
              <p className="text-teal-500 text-sm mb-3">Manager</p>
              <div className="flex space-x-2">
                <button className="text-blue-500 hover:underline text-sm">Edit</button>
                <button className="text-red-500 hover:underline text-sm">Delete</button>
              </div>
            </div>
            
            <div className={`p-4 rounded-lg border ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-teal-500 font-medium">Mike Johnson</h3>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
              </div>
              <p className="text-teal-500 text-sm mb-1">mike@example.com</p>
              <p className="text-teal-500 text-sm mb-3">Staff</p>
              <div className="flex space-x-2">
                <button className="text-blue-500 hover:underline text-sm">Edit</button>
                <button className="text-red-500 hover:underline text-sm">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Users;