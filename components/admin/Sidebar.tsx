import {
  FiGrid,
  FiHome,
  FiCalendar,
  FiUsers,
  FiLifeBuoy,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTheme } from "../../contexts/ThemeContext";

const Sidebar = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <div
      className={`w-64 h-screen shadow-sm border-r ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Logo */}
      <div
        className={`px-6 border-b h-20 flex items-center -m-2 ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <Image
          src="/Logo.png"
          alt="ClientLine"
          width={200}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <div className="px-4 space-y-2">
          <a
            href="/admin"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              isActive("/admin")
                ? "bg-blue-50 text-blue-600"
                : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FiGrid className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a
            href="/admin/organizations"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              isActive("/admin/organizations")
                ? "bg-blue-50 text-blue-600"
                : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FiHome className="w-5 h-5" />
            <span className="font-medium">Organizations</span>
          </a>
          <a
            href="/admin/appointments"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              isActive("/admin/appointments")
                ? "bg-blue-50 text-blue-600"
                : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FiCalendar className="w-5 h-5" />
            <span className="font-medium">Appointments</span>
          </a>
          <a
            href="/admin/users"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              isActive("/admin/users")
                ? "bg-blue-50 text-blue-600"
                : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FiUsers className="w-5 h-5" />
            <span className="font-medium">Users</span>
          </a>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-64 px-4 pb-6 space-y-2">
          <a
            href="/admin/support"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              isActive("/admin/support")
                ? "bg-blue-50 text-blue-600"
                : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FiLifeBuoy className="w-5 h-5" />
            <span className="font-medium">Support</span>
          </a>
          <a
            href="/admin/settings"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              isActive("/admin/settings")
                ? "bg-blue-50 text-blue-600"
                : theme === "dark"
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FiSettings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </a>
          <button
            className={`flex items-center space-x-3 px-4 py-3 w-full text-white rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            <FiLogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
