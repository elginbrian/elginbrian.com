import React, { useState, useEffect } from "react";

const ActivityTopShade: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight * 0.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={`fixed top-0 left-0 w-full h-32 md:h-24 bg-[rgb(0,0,0,0.5)] border-1 border-gray-700 backdrop-blur-sm transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} />;
};

export default ActivityTopShade;
