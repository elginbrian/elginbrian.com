import React, { useState, useEffect } from "react";
import { FaExpand, FaLink, FaX } from "react-icons/fa6";

const InfoGrid: React.FC = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedBox, setExpandedBox] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);

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

  const handleBoxClick = (box: string) => {
    setExpandedBox(box);
  };

  const closeExpandedBox = () => {
    setClosing(true);
    setTimeout(() => {
      setExpandedBox(null);
      setClosing(false);
    }, 500);
  };

  return (
    <div className="relative">
      {showGrid && (
        <>
          <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            } w-full min-h-screen grid gap-4 pl-6 pr-6 pb-28 pt-36 sm:pl-12 sm:pb-12 sm:pt-28 sm:pr-32 sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 box-border`}
          >
            <div
              onClick={() => handleBoxClick("about")}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex items-center justify-center rounded-lg col-span-2 md:col-span-1 md:row-span-2 min-h-[100px] sm:min-h-[200px] cursor-pointer sm:pointer-events-none relative"
            >
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
              About
            </div>
            <div
              onClick={() => handleBoxClick("techStack")}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex items-center justify-center rounded-lg col-span-2 min-h-[100px] sm:min-h-[220px] cursor-pointer sm:pointer-events-none relative"
            >
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
              Tech Stack
            </div>
            <div
              onClick={() => handleBoxClick("experience")}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px] cursor-pointer sm:pointer-events-none relative"
            >
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
              Experience
            </div>
            <div
              onClick={() => handleBoxClick("achievement")}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px] cursor-pointer sm:pointer-events-none relative"
            >
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
              Achievement
            </div>
          </div>

          {expandedBox && (
            <div
              className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full min-h-screen grid gap-4 pl-6 pr-6 pb-28 pt-36 sm:pl-12 sm:pb-12 sm:pt-28 sm:pr-32 box-border transition-all duration-500 ease-in-out ${
                closing ? "opacity-0 scale-90" : "opacity-100 scale-100"
              } sm:hidden`}
            >
              <div className="relative bg-black border-gray-700 border-2 text-white flex items-center justify-center rounded-lg">
                <FaX className="absolute top-4 right-4 cursor-pointer text-white" onClick={closeExpandedBox} />
                <div className="p-4">{expandedBox} Expanded Box</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InfoGrid;
