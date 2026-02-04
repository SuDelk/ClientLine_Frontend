import { FiUser } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import ToggleSwitch from "../common/ToggleSwitch";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`border-b px-6 py-4 ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center">
        <ToggleSwitch />
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p
              className={`text-sm font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Anima Agrawal
            </p>
            <p
              className={`text-xs ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Super Admin
            </p>
          </div>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              theme === "dark" ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <FiUser
              className={`w-5 h-5 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
