"use client";
import React, { useEffect, useMemo, useState } from "react";

const MeteorShower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 1.55) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const meteors = useMemo(() => {
    return Array.from({ length: 50 }, () => {
      const opacity = Math.random();
      const animationDuration = windowWidth && windowWidth < 768 ? 3 + Math.random() * 1.5 : 4 + Math.random() * 2;
      const topPosition = windowWidth && windowWidth < 768 ? `${Math.random() * 30 - 15}vh` : `${Math.random() * 50 - 30}vh`;

      return {
        left: `${Math.random() * 100}vw`,
        top: topPosition,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${animationDuration}s`,
        color: `rgba(255, 255, 255, ${opacity})`,
      };
    });
  }, [windowWidth]);

  return (
    <>
      {isVisible && (
        <div className="meteor-shower">
          {meteors.map((meteor, index) => (
            <div
              key={index}
              className="meteor"
              style={{
                left: meteor.left,
                top: meteor.top,
                animationDelay: meteor.animationDelay,
                animationDuration: meteor.animationDuration,
                background: `linear-gradient(45deg, ${meteor.color}, rgba(255, 255, 255, 0))`,
                filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MeteorShower;
