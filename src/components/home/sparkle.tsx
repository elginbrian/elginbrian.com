import React, { useEffect } from "react";

const Sparkles: React.FC = () => {
  useEffect(() => {
    const generateSparkles = () => {
      const isMobile = window.innerWidth <= 768;
      const sparkleCount = isMobile ? 20 : 50;
      const container = document.querySelector(".dotted-background");

      if (container) {
        for (let i = 0; i < sparkleCount; i++) {
          const sparkle = document.createElement("div");
          sparkle.classList.add("sparkle");
          sparkle.style.left = `${Math.random() * 100}vw`;
          sparkle.style.top = `${Math.random() * 100}vh`;
          sparkle.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
          container.appendChild(sparkle);

          setTimeout(() => {
            sparkle.remove();
          }, 1500);
        }
      }
    };

    const intervalId = setInterval(generateSparkles, 300);
    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default Sparkles;
