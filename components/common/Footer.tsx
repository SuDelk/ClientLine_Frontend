import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="text-center py-8">
      <p
        className={`text-sm font-semibold ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Copyright © 2026 ClientLine. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
