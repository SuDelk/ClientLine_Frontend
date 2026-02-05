import React from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FeatureCards from "@/components/home/FeatureCards";
import Footer from "@/components/common/Footer";
import Head from "next/head";

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>ClientLine</title>
      </Head>
      ,
      <div
        className={`min-h-screen transition-colors duration-300 pt-20 ${
          theme === "dark" ? "bg-black" : "bg-gray-50"
        }`}
      >
        {/* Header */}
        <Header page="home" />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Hero + Feature Cards */}
            <div className="space-y-8 lg:space-y-12">
              <HeroSection />
              <FeatureCards />
            </div>

            {/* Right Side - Illustration Placeholder */}
            <div
              className={`flex items-center justify-center lg:block ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              } `}
            >
              <Image
                src="/LandingSideImage.png"
                alt="Landing illustration"
                width={710}
                height={710}
                className="w-full max-w-md lg:max-w-none h-auto"
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
