import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import ToggleSwitch from "../common/ToggleSwitch";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

interface HeaderProps {
  page: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`w-full px-4 sm:px-6 py-4 fixed top-0 left-0 right-0 z-50 ${theme === "dark" ? "bg-black" : "bg-white"} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src={"/Logo.png"} alt="logo" width={200} height={54} className="w-auto h-8 sm:h-12 md:h-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`${page == "home" ? "text-[#138496]" : theme === "dark" ? "text-white" : "text-gray-900"} font-bold hover:text-[#17A2B8] transition-colors duration-200`}
          >
            Home
          </Link>
          <Link
            href="./login"
            className={`${page == "login" ? "text-[#138496]" : theme === "dark" ? "text-white" : "text-gray-900"} font-bold hover:text-[#17A2B8] transition-colors duration-200`}
          >
            Login
          </Link>
          <button
            className="text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            style={{ backgroundColor: "#17A2B8" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#138496")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#17A2B8")
            }
          >
            <span>JOIN US</span>
            <span>
              <MdOutlineArrowRightAlt size={20} />
            </span>
          </button>
          <ToggleSwitch />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ToggleSwitch />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-100"}`}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-4 pb-4 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
          <nav className="flex flex-col space-y-4 pt-4">
            <Link
              href="/"
              className={`${page == "home" ? "text-[#138496]" : theme === "dark" ? "text-white" : "text-gray-900"} font-bold hover:text-[#17A2B8] transition-colors duration-200 px-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="./login"
              className={`${page == "login" ? "text-[#138496]" : theme === "dark" ? "text-white" : "text-gray-900"} font-bold hover:text-[#17A2B8] transition-colors duration-200 px-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <button
              className="text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 mx-2"
              style={{ backgroundColor: "#17A2B8" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#138496")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#17A2B8")
              }
            >
              <span>JOIN US</span>
              <span>
                <MdOutlineArrowRightAlt size={20} />
              </span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
