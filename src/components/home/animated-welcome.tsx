"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedWelcome: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  const scatteredImages: string[] = ["/retro/retro-peace.png", "/retro/retro-can.png", "/retro/retro-flower.png", "/retro/retro-melon.png", "/retro/retro-tape.png", "/retro/retro-glasses.png", "/retro/retro-icecream.png"];

  const positionValues = [15, 20, 25, 30, 60, 65, 70, 75, 80];

  const getRandomPosition = () => {
    const randomIndex = Math.floor(Math.random() * positionValues.length);
    return positionValues[randomIndex];
  };

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  const isVertical = (src: string) => {
    const verticalImages = ["/retro/retro-can.png", "/retro/retro-icecream.png"];
    return verticalImages.includes(src);
  };

  const defaultSize = 100;
  const verticalSize = 70;

  const isPositionTooClose = (newX: number, newY: number) => {
    const threshold = 40;
    return positions.some(({ x, y }) => {
      const distance = Math.sqrt(Math.pow(newX - x, 2) + Math.pow(newY - y, 2));
      return distance < threshold || newX === x || newY === y;
    });
  };

  const getUniquePosition = () => {
    let x, y;
    do {
      x = getRandomPosition();
      y = getRandomPosition();
    } while (isPositionTooClose(x, y));
    return { x, y };
  };

  useEffect(() => {
    setIsClient(true);

    const newPositions = scatteredImages.map(() => getUniquePosition());
    setPositions(newPositions);

    const handleScroll = () => {
      setScrollPosition(document.documentElement.scrollTop);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  if (!isClient || positions.length === 0) {
    return null;
  }

  const fadeThreshold = window.innerHeight * 0.2;

  const calculateOpacity = (scrollPosition: number, fadeThreshold: number) => {
    const opacity = 1 - scrollPosition / fadeThreshold;
    return Math.max(opacity, 0);
  };

  const welcomeSlideEffect = scrollPosition > window.innerHeight * 0.2 ? "translateX(100vw)" : "translateX(0)";

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div
        className="image-container"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) ${welcomeSlideEffect}`,
          transition: "transform 0.5s ease-out",
          zIndex: "10",
          filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
        }}
      >
        <Image src="/welcome.gif" alt="Your Image" width={550} height={350} style={{ objectFit: "cover" }} />
      </div>

      {scatteredImages.map((src, index) => {
        const { x, y } = positions[index];
        const size = isVertical(src) ? verticalSize : defaultSize;

        const imageOpacity = calculateOpacity(scrollPosition, fadeThreshold);

        const animationDuration = `${Math.random() * 4 + 4}s`;
        const animationDelay = `${Math.random() * 2}s`;

        return (
          <div
            key={index}
            className="image-container"
            style={{
              position: "fixed",
              top: `${y}vh`,
              left: `${x}vw`,
              transform: "translate(-50%, -50%)",
              opacity: imageOpacity,
              animation: `floatingWiggle ${animationDuration} ease-in-out infinite`,
              animationDelay: animationDelay,
              filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
            }}
          >
            <Image src={src} alt={`Image ${index + 1}`} width={size} height={size} style={{ objectFit: "cover" }} />
          </div>
        );
      })}

      <style jsx>{`
        @keyframes floatingWiggle {
          0% {
            transform: translate(-50%, -50%) translateY(0) rotate(0deg);
          }
          25% {
            transform: translate(-50%, -50%) translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(0) rotate(-5deg);
          }
          75% {
            transform: translate(-50%, -50%) translateY(20px) rotate(5deg);
          }
          100% {
            transform: translate(-50%, -50%) translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedWelcome;
