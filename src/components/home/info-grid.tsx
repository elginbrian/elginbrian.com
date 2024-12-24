import React, { useState, useEffect } from "react";
import { FaExpand } from "react-icons/fa6";
import InfoBox from "./info-box";
import AboutContent, { AboutContentExpanded } from "./about-content";
import ContactLinks from "./contact-links";
import ExpandedBox from "./expanded-box";

const InfoGrid: React.FC = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedBox, setExpandedBox] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 1.55) {
      setShowGrid(true);
    } else {
      setShowGrid(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisible(showGrid);
  }, [showGrid]);

  useEffect(() => {
    if (windowWidth > 768) {
      closeExpandedBox();
    }
  }, [windowWidth]);

  const handleBoxClick = (box: string) => {
    if (windowWidth <= 768) {
      setExpandedBox(box);
    }
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
            <InfoBox
              title="About"
              showTitleOnDesktop={false}
              description={<AboutContent />}
              onClick={() => handleBoxClick("about")}
              isExpanded={!!expandedBox}
              className="bg-[rgba(0,0,0,0.5)] border-gray-700 border-2 hover:border-white text-white flex flex-col items-center justify-center rounded-lg col-span-2 md:col-span-1 md:row-span-2 min-h-[100px] sm:min-h-[200px] cursor-pointer relative p-6"
            />
            <InfoBox
              title="Tech Stack"
              description={<p>Coming soon...</p>}
              onClick={() => handleBoxClick("techStack")}
              isExpanded={!!expandedBox}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg col-span-2 min-h-[100px] sm:min-h-[220px] cursor-pointer sm:pointer-events-none relative"
            />
            <InfoBox
              title="Experience"
              description={<p>Coming soon...</p>}
              onClick={() => handleBoxClick("experience")}
              isExpanded={!!expandedBox}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px] cursor-pointer sm:pointer-events-none relative"
            />
            <InfoBox
              title="Achievement"
              description={<p>Coming soon...</p>}
              onClick={() => handleBoxClick("achievement")}
              isExpanded={!!expandedBox}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px] cursor-pointer sm:pointer-events-none relative"
            />
          </div>

          {expandedBox === "about" && <ExpandedBox title="About" content={<AboutContentExpanded />} onClose={closeExpandedBox} />}

          {expandedBox === "techStack" && <ExpandedBox title="Tech Stack" content={<p className="text-base mt-2 sm:mt-8 text-justify">Coming soon...</p>} onClose={closeExpandedBox} />}

          {expandedBox === "experience" && <ExpandedBox title="Experience" content={<p className="text-base mt-2 sm:mt-8 text-justify">Coming soon...</p>} onClose={closeExpandedBox} />}

          {expandedBox === "achievement" && <ExpandedBox title="Achievement" content={<p className="text-base mt-2 sm:mt-8 text-justify">Coming soon...</p>} onClose={closeExpandedBox} />}
        </>
      )}
    </div>
  );
};

export default InfoGrid;
