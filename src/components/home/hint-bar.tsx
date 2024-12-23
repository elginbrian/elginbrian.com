import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const HintBar: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 0.1;
      setIsBlurred(scrollPosition <= triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-16 left-6 md:top-8 md:left-1/2 md:-translate-x-1/2 flex items-center space-x-4 transition-all duration-300 ${!isBlurred ? "opacity-0 blur-sm" : "opacity-100 blur-none"}`}>
      <FaArrowDown className="animate-bounce text-xl" />
      <div>
        <div className="font-semibold text-sm sm:text-base mb-1">Scroll down to start exploring!</div>
        <div className="font-light text-xs sm:text-sm">Learn more about myself.</div>
      </div>
    </div>
  );
};

export default HintBar;
