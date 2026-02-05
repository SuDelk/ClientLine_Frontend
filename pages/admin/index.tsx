import AdminLayout from "../../components/admin/AdminLayout";
import { useTheme } from "../../contexts/ThemeContext";

const AdminDashboard = () => {
  const { theme } = useTheme();

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Organizations Section */}
        <div className={`rounded-lg shadow-sm p-6 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>Organizations</h2>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Add New
              </button>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                View All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="space-y-2">
                <p className="text-teal-500">1. Hair Fusion</p>
                <p className="text-teal-500">2. Tattoo Shop</p>
                <p className="text-teal-500">{"3. Dee's Nails"}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <p className="text-teal-500">Moratuwa</p>
                <p className="text-teal-500">Nugegoda</p>
                <p className="text-teal-500">Colombo 7</p>
              </div>
            </div>
          </div>

          <p className={`text-right mt-4 ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}>...more</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className={`rounded-lg shadow-sm p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div>
                <p className="text-teal-500 font-medium">Total Appointments</p>
                <p className="text-3xl font-bold text-teal-500">145</p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-sm p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div>
                <p className="text-teal-500 font-medium">Organizations</p>
                <p className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}>This Month</p>
                <p className="text-3xl font-bold text-teal-500">14</p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-sm p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div>
                <p className="text-teal-500 font-medium">Total Service Staff</p>
                <p className="text-3xl font-bold text-teal-500">145</p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-sm p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div>
                <p className="text-teal-500 font-medium">Missed</p>
                <p className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}>This Month</p>
                <p className="text-3xl font-bold text-teal-500">15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Chart Section */}
        <div className={`rounded-lg shadow-sm p-6 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-teal-500">Appointments</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-teal-500 border border-teal-500 rounded-lg">
                Daily
              </button>
              <button className="px-4 py-2 text-teal-500 border border-teal-500 rounded-lg">
                Weekly
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                Monthly
              </button>
            </div>
          </div>

          <div className={`h-64 rounded-lg flex items-center justify-center ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}>
            <p className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}>Chart will be implemented here</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
