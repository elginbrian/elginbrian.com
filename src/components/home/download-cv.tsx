import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";

const DownloadCV: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight * 0.5 && scrollY <= windowHeight * 1.4) {
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

  return (
    <div>
      <nav
        className={`fixed bottom-52 sm:bottom-6 left-1/2 transform -translate-x-1/2 sm:bg-black bg-[rgb(0,0,0,0.5)] rounded-full shadow-lg z-50 transition-all duration-500 ease-in-out ${isVisible ? "fade-in block" : "fade-out hidden"}`}
        style={{
          filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))",
        }}
      >
        <div className="flex justify-center items-center gap-4">
          <a
            className="rounded-full border-solid border-white sm:border-gray-700 border sm:border-2 transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 px-4 min-w-44"
            href="https://docs.google.com/document/d/17do4n-9wnGqTWAWIQmR1w0Eq139c0vj5rt3426RZskw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV from LinkedIn Profile"
          >
            <FaDownload className="text-lg sm:text-xl text-white mr-2" />
            <span className="text-xs">Download CV</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default DownloadCV;
