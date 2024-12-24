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
      return {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 50 - 30}vh`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 2}s`,
        color: `rgba(255, 255, 255, ${opacity})`,
      };
    });
  }, []);

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
