"use client";
import React, { useState, useEffect } from "react";

const InfoGrid: React.FC = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 1.55) {
      setShowGrid(true);
    } else {
      setShowGrid(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showGrid) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [showGrid]);

  return (
    <div className="relative">
      {showGrid && (
        <div
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } w-full min-h-screen grid gap-4 pl-6 pr-6 pb-28 pt-36 sm:pl-12 sm:pb-12 sm:pt-28 sm:pr-32 sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 box-border`}
        >
          <div className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 text-white flex items-center justify-center rounded-lg col-span-2 md:col-span-1 md:row-span-2 min-h-[100px] sm:min-h-[200px]">About</div>
          <div className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 text-white flex items-center justify-center rounded-lg col-span-2 min-h-[100px] sm:min-h-[220px]">Tech Stack</div>
          <div className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 text-white flex items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px]">Experience</div>
          <div className="bg-[rgb(0,0,0,0.5)] border-gray-700 border-2 text-white flex items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px]">Achievement</div>
        </div>
      )}
    </div>
  );
};

export default InfoGrid;
