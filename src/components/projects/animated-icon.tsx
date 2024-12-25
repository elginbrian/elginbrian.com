"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedIcon: React.FC = () => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  const scatteredImages: string[] = ["/tech/mobile-stack.svg", "/tech/frontend-stack.svg", "/tech/backend-stack.svg", "/tech/tools-stack.svg"];
  const positionValues = [15, 20, 25, 30, 60, 65, 70, 75, 80];
  const defaultSize = 100;

  const getRandomPosition = () => positionValues[Math.floor(Math.random() * positionValues.length)];

  const isPositionTooClose = (newX: number, newY: number) => {
    const threshold = 40;
    return positions.some(({ x, y }) => {
      const distance = Math.sqrt(Math.pow(newX - x, 2) + Math.pow(newY - y, 2));
      return distance < threshold;
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
    const newPositions = scatteredImages.map(() => getUniquePosition());
    setPositions(newPositions);
  }, []);

  if (positions.length === 0) return null;

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {scatteredImages.map((src, index) => {
        const { x, y } = positions[index];
        const animationDuration = `${Math.random() * 4 + 4}s`;
        const animationDelay = `${Math.random() * 2}s`;

        return (
          <div
            key={index}
            className="image-container"
            style={{
              position: "absolute",
              top: `${(y / 100) * window.innerHeight}px`,
              left: `${x}vw`,
              transform: "translate(-50%, -50%)",
              animation: `floatingWiggle ${animationDuration} ease-in-out infinite`,
              animationDelay: animationDelay,
              filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
            }}
          >
            <Image src={src} alt={`Image ${index + 1}`} width={defaultSize} height={defaultSize} />
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

export default AnimatedIcon;
