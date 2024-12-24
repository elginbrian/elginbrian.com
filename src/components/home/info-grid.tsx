import React, { useState, useEffect, useRef } from "react";
import { FaDesktop, FaExpand, FaMobile, FaPhone } from "react-icons/fa6";
import InfoBox from "./info-box";
import AboutContent, { AboutContentExpanded } from "./about-content";
import ContactLinks from "./contact-links";
import ExpandedBox from "./expanded-box";
import TechStackContent from "./tech-stack-content";
import ExperienceContent from "./experience-content";
import AchievementContent from "./achievement-content";

const InfoGrid: React.FC = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedBox, setExpandedBox] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);

  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    setIsVisible(showGrid);
  }, [showGrid]);

  useEffect(() => {
    if (windowWidth && windowWidth > 768) {
      closeExpandedBox();
    }
  }, [windowWidth]);

  const handleBoxClick = (box: string) => {
    if (windowWidth && windowWidth <= 768) {
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

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current) {
        containerRef.current.requestFullscreen?.();
        setIsFullscreen(true);
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
        setIsFullscreen(false);
      }
    }
  };

  const checkScreenAndFullscreen = () => {
    const isLargeScreen = window.innerWidth >= 1024;
    const isCurrentlyFullscreen = !!document.fullscreenElement;
    setIsFullscreen(isLargeScreen && isCurrentlyFullscreen);
  };

  useEffect(() => {
    checkScreenAndFullscreen();
    window.addEventListener("resize", checkScreenAndFullscreen);
    document.addEventListener("fullscreenchange", checkScreenAndFullscreen);

    return () => {
      window.removeEventListener("resize", checkScreenAndFullscreen);
      document.removeEventListener("fullscreenchange", checkScreenAndFullscreen);
    };
  }, []);

  return (
    <div className="relative">
      {showGrid && (
        <>
          <div
            style={{
              filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.1))",
            }}
            ref={containerRef}
            className="hidden sm:flex lg:hidden fixed top-1/2 left-1/2 z-50 border-gray-700 border-2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm p-6 rounded-lg shadow-lg flex-col items-center text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FaDesktop className="text-3xl text-white" />
              <FaMobile className="text-3xl text-white" />
            </div>
            <p className="text-sm text-white">This section is not available on medium devices.</p>
            <p className="text-sm text-white mt-2">Please resize to a small device (mobile) or a large device (desktop).</p>
            <button onClick={toggleFullscreen} className="mt-4 px-4 py-2 bg-black text-white text-sm rounded-full border-2 border-white hover:bg-gray-700 focus:outline-none">
              {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
            </button>
          </div>

          <div
            className={`sm:hidden lg:grid fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            } w-full min-h-screen grid gap-4 pl-6 pr-6 pb-28 pt-36 lg:pl-12 lg:pb-12 lg:pt-28 lg:pr-32 lg:grid-cols-3 lg:grid-rows-2 grid-cols-2 grid-rows-3 box-border`}
          >
            <InfoBox
              title="About"
              showTitleOnDesktop={false}
              showTitleOnMobile={false}
              description={<AboutContent />}
              onClick={() => handleBoxClick("about")}
              isExpanded={!!expandedBox}
              className="bg-[rgba(0,0,0,0.5)] border-gray-700 border-2 hover:border-white text-white flex flex-col items-center justify-center rounded-lg col-span-2 lg:col-span-1 lg:row-span-2 min-h-[100px] lg:min-h-[200px] cursor-pointer lg:pointer-events-none relative p-6"
            />
            <InfoBox
              title="Tech Stack"
              description={<TechStackContent />}
              showTitleOnDesktop={false}
              onClick={() => handleBoxClick("techStack")}
              isExpanded={!!expandedBox}
              className="bg-[rgb(0,0,0,0.5)] lg:bg-black/0 lg:border-0 border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg col-span-2 min-h-[100px] lg:min-h-[220px] cursor-pointer lg:pointer-events-none relative"
            />
            <InfoBox
              title="Experience"
              description={<ExperienceContent />}
              onClick={() => handleBoxClick("experience")}
              isExpanded={!!expandedBox}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px] cursor-pointer sm:pointer-events-none relative"
            />
            <InfoBox
              title="Achievement"
              description={<AchievementContent />}
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
