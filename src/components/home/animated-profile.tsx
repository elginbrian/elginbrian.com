"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const AnimatedProfile: React.FC<{ maxScroll: number }> = ({ maxScroll }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [flipped, setFlipped] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const scrollLimit = window.innerHeight * 0.5;
    let hideTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScroll = Math.min(window.scrollY, scrollLimit);
      setScrollY(currentScroll);

      if (currentScroll >= scrollLimit) {
        if (!hideTimeout) {
          hideTimeout = setTimeout(() => {
            setIsHidden(true);
          }, 2000);
        }
      } else {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = Math.min(scrollY / maxScroll, 1);
  const horizontalPosition = `calc(${52 - 55 * (1 - t) ** 2}vw)`;
  const verticalPosition = `calc(${82 - 75 * t}vh)`;

  useEffect(() => {
    setFlipped(t > 0.5);
  }, [t]);

  const imageStyle: React.CSSProperties = {
    transform: `translate(-50%, -50%) rotateY(${flipped ? 180 : 180 * t}deg)`,
    position: "fixed",
    left: horizontalPosition,
    top: verticalPosition,
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    transition: "transform 0.6s ease, left 0.1s ease, top 0.1s ease, filter 0.5s ease",
    boxShadow: "0px 4px 15px rgba(173, 216, 230, 0.3)",
    backfaceVisibility: "hidden",
    filter: isHidden ? "blur(10px)" : "blur(0)",
    opacity: isHidden ? 0 : 1,
  };

  const circleStyle: React.CSSProperties = {
    position: "fixed",
    left: horizontalPosition,
    top: verticalPosition,
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    backgroundColor: "rgba(51, 51, 51, 0.2)",
    zIndex: -1,
    transition: `transform 0.6s ease ${0.1 * t}s, left 0.1s ease, top 0.1s ease, filter 0.5s ease`,
    transform: `translate(-50%, -50%) rotateY(${flipped ? 180 : 180 * t}deg)`,
    boxShadow: `0px 0px 30px rgba(51, 51, 51, 0.5)`,
    filter: isHidden ? "blur(10px)" : "blur(0)",
  };

  return (
    <div className="relative w-[200px] h-[200px]">
      <div style={circleStyle} className="absolute"></div>
      <Image
        src="/pluto.png"
        alt="Profile Front"
        width={240}
        height={240}
        style={{
          ...imageStyle,
          opacity: flipped ? 0 : 1,
        }}
      />
      <Image
        src="/avatar.png"
        alt="Profile Back"
        width={240}
        height={240}
        style={{
          ...imageStyle,
          opacity: flipped ? 1 : 0,
          transform: `translate(-50%, -50%) rotateY(${flipped ? 0 : 180}deg)`,
        }}
      />
      <div
        className={`fixed text-white text-center transition-opacity duration-500 ${isHidden ? "opacity-0" : flipped ? "opacity-100" : "opacity-0"}`}
        style={{
          left: horizontalPosition,
          top: `calc(${82 - 75 * t}vh + 130px)`,
          transform: "translate(-50%, 0)",
          zIndex: 2,
        }}
      >
        <div className="font-bold text-medium sm:text-lg mb-2 sm:mb-1">Elgin Brian Wahyu Bramadhika</div>
        <div className="text-sm sm:text-medium mb-6 sm:mb-4">Software Engineering Enthusiast</div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://linkedin.com/in/elginbrian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl sm:text-2xl text-white sm:mr-2" />
            <span className="hidden sm:block">LinkedIn</span>
          </a>
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/elginbrian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl sm:text-2xl text-white sm:mr-2" />
            <span className="hidden sm:block">GitHub</span>
          </a>
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.instagram.com/_elginbrian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl sm:text-2xl text-white sm:mr-2" />
            <span className="hidden sm:block">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProfile;
