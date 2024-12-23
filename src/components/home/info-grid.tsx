import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaExpand, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import Sparkles from "./sparkle";

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
              className="bg-[rgba(0,0,0,0.5)] border-2 border-gray-700 hover:border-white text-white flex flex-col items-center justify-center rounded-lg col-span-2 md:col-span-1 md:row-span-2 min-h-[100px] sm:min-h-[200px] cursor-pointer relative p-6"
            >
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
              <Image alt="profile" src="/avatar.png" width={150} height={150} className="hidden sm:block text-white cursor-pointer" />

              <h3 className="sm:mt-8 mt-0 text-lg sm:text-xl font-semibold block sm:hidden">About</h3>
              <p className="text-sm sm:text-base mt-2 sm:mt-8 text-center sm:text-justify">Hi, I am Elgin Brian Wahyu Bramadhika, a second-year Information Technology student at the Faculty of Computer Science, Universitas Brawijaya.</p>

              <p className="text-sm sm:text-base mt-4 text-justify hidden lg:block">
                I am passionate about expanding my knowledge, especially in computer science and the business side of technology. I approach learning as a continuous process and enjoy engaging with new topics to deepen my understanding and
                skills.
              </p>

              <p className="text-sm sm:text-base mt-8 text-justify hidden lg:block">Contact:</p>
              <div className="flex-col space-y-4 mt-2 justify-center items-center hidden lg:block">
                <div className="flex items-center space-x-2 hover:text-gray-700">
                  <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group flex items-center space-x-2">
                    <FaLinkedin className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
                    <span className="text-sm text-white group-hover:text-gray-700 transition-colors">linkedin.com/in/elginbrian</span>
                  </a>
                </div>

                <div className="flex items-center space-x-2 hover:text-gray-700">
                  <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="group flex items-center space-x-2">
                    <FaGithub className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
                    <span className="text-sm text-white group-hover:text-gray-700 transition-colors">github.com/elginbrian</span>
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email Me" className="group flex items-center space-x-2">
                    <FaEnvelope className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
                    <span className="text-sm text-white group-hover:text-gray-700 transition-colors">elginbrian49@student.ub.ac.id</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleBoxClick("techStack")}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg col-span-2 min-h-[100px] sm:min-h-[220px] cursor-pointer sm:pointer-events-none relative"
            >
              <h3 className="text-lg font-semibold">Tech Stack</h3>
              <p className="text-sm sm:text-base mt-2 text-center sm:text-justify">Coming soon...</p>
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
            </div>
            <div
              onClick={() => handleBoxClick("experience")}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px] cursor-pointer sm:pointer-events-none relative"
            >
              <h3 className="text-lg font-semibold">Experience</h3>
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
              <p className="text-sm sm:text-base mt-2 text-center sm:text-justify">Coming soon...</p>
            </div>
            <div
              onClick={() => handleBoxClick("achievement")}
              className="bg-[rgb(0,0,0,0.5)] border-gray-700 hover:border-white border-2 text-white flex flex-col items-center justify-center rounded-lg max-h-[160px] sm:max-h-none sm:min-h-[250px] cursor-pointer sm:pointer-events-none relative"
            >
              <h3 className="text-lg font-semibold">Achievement</h3>
              <p className="text-sm sm:text-base mt-2 text-center sm:text-justify">Coming soon...</p>
              <FaExpand className="block sm:hidden absolute bottom-4 right-4 cursor-pointer text-white" />
            </div>
          </div>

          {expandedBox === "about" && (
            <div
              className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full min-h-screen grid gap-4 pl-6 pr-6 pb-28 pt-36 sm:pl-12 sm:pb-12 sm:pt-28 sm:pr-32 box-border transition-all duration-500 ease-in-out ${
                closing ? "opacity-0 scale-90" : "opacity-100 scale-100"
              } sm:hidden`}
            >
              <div className="relative bg-black border-gray-700 border-2 text-white flex items-center justify-center rounded-lg">
                <FaX className="absolute top-4 right-4 cursor-pointer text-white" onClick={closeExpandedBox} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">About</h3>
                  <p className="text-base mt-2 sm:mt-8 text-justify">Hi, I am Elgin Brian Wahyu Bramadhika, a second-year Information Technology student at the Faculty of Computer Science, Universitas Brawijaya.</p>

                  <p className="text-base mt-4 text-justify">
                    I am passionate about expanding my knowledge, especially in computer science and the business side of technology. I approach learning as a continuous process and enjoy engaging with new topics to deepen my understanding
                    and skills.
                  </p>

                  <p className="text-base mt-8 text-justify font-semibold">Contact:</p>
                  <div className="flex-col space-y-4 mt-2 justify-center items-center">
                    <div className="flex items-center space-x-2 hover:text-gray-700">
                      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group flex items-center space-x-2">
                        <FaLinkedin className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
                        <span className="text-sm text-white group-hover:text-gray-700 transition-colors">linkedin.com/in/elginbrian</span>
                      </a>
                    </div>

                    <div className="flex items-center space-x-2 hover:text-gray-700">
                      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="group flex items-center space-x-2">
                        <FaGithub className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
                        <span className="text-sm text-white group-hover:text-gray-700 transition-colors">github.com/elginbrian</span>
                      </a>
                    </div>

                    <div className="flex items-center space-x-2">
                      <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email Me" className="group flex items-center space-x-2">
                        <FaEnvelope className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
                        <span className="text-sm text-white group-hover:text-gray-700 transition-colors">elginbrian49@student.ub.ac.id</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InfoGrid;
