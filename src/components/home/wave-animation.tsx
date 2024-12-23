import React, { useState, useEffect } from "react";

const WaveAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const styles = {
    waveContainer: {
      position: "fixed" as const,
      bottom: isVisible ? "0" : "-200px",
      left: 0,
      width: "100%",
      height: "200px",
      overflow: "hidden" as const,
      backgroundColor: "#ffffff00",
      transition: "bottom 0.5s ease-in-out",
    },
    wave: {
      position: "absolute" as const,
      bottom: 0,
      left: 0,
      width: "200%",
      height: "100%",
      animation: "wave-animation 6s linear infinite",
    },
    keyframes: `
      @keyframes wave-animation {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `,
  };

  const addKeyframes = () => <style>{styles.keyframes}</style>;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight * 0.5 && scrollY <= windowHeight * 1.5) {
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
    <>
      {addKeyframes()}
      <div style={styles.waveContainer}>
        <svg style={styles.wave} viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,120 C200,180 400,40 600,120 C800,200 1000,40 1200,120 L1200,0 L0,0 Z" fill="white" transform="scale(1, -1) translate(0, -200)" />
        </svg>
      </div>
    </>
  );
};

export default WaveAnimation;
