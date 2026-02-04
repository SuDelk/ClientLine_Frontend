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

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-md w-full space-y-6 sm:space-y-8">
          <div className="text-center">
            <h2
              className={`text-2xl sm:text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Sign in to your account
            </h2>
          </div>

          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#17A2B8]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#17A2B8]"
                  } focus:outline-none focus:ring-2 focus:ring-[#17A2B8]/20`}
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#17A2B8]"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#17A2B8]"
                  } focus:outline-none focus:ring-2 focus:ring-[#17A2B8]/20`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-medium text-white transition-colors"
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
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
