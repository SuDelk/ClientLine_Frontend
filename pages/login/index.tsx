import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/home/Header";
import Footer from "@/components/common/Footer";

const Login: React.FC = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      <Header page="login" />

      <main className="flex-1 flex flex-col lg:flex-row lg:gap-24">
        {/* Left side - Login Form */}
        <div className="flex-1 flex items-center justify-center lg:justify-end lg:pr-12 px-4 sm:px-6 py-8 lg:py-12">
          <div className={`w-full max-w-sm sm:max-w-md space-y-6 sm:space-y-8 border p-6 sm:p-8 rounded-xl shadow-lg ${theme === "dark" ? "bg-[#00A857]/30 border-gray-700" : "bg-white border-gray-200"}`}>
          <div className="text-start">
            <h2
              className={`text-2xl sm:text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Login
            </h2>
          </div>

          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-white border-gray-600 text-white placeholder-gray-400 focus:border-[#17A2B8]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#17A2B8]"
                  } focus:outline-none focus:ring-2 focus:ring-[#17A2B8]/20`}
                  placeholder="username@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  Password
                </label>
                <input
                  type="password"
                  required
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-white border-gray-600 text-white placeholder-gray-400 focus:border-[#17A2B8]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#17A2B8]"
                  } focus:outline-none focus:ring-2 focus:ring-[#17A2B8]/20`}
                  placeholder="user password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className={`text-xs sm:text-sm hover:underline ${
                theme === "dark" ? "text-[#17A2B8]" : "text-[#17A2B8]"
              }`}>
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base text-white transition-colors"
              style={{ backgroundColor: "#17A2B8" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#138496")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#17A2B8")
              }
            >
              Sign in
            </button>

            <div className="text-center">
              <span className={`text-xs sm:text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                Don&apos;t have an account yet?{" "}
                <a href="#" className={`hover:underline ${
                  theme === "dark" ? "text-[#17A2B8]" : "text-[#17A2B8]"
                }`}>
                  Register
                </a>
              </span>
            </div>
          </form>
        </div>
        </div>
        
        {/* Right side - Image */}
        <div className="hidden lg:flex flex-1 items-center justify-start lg:pl-12">
          <img 
            src="/Login.png" 
            alt="Login" 
            className="w-full max-w-xl object-contain"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
