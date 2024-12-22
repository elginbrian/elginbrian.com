"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedProfile: React.FC<{ maxScroll: number }> = ({ maxScroll }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
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
    transition: "transform 0.6s ease, left 0.1s ease, top 0.1s ease",
    boxShadow: "0px 4px 15px rgba(173, 216, 230, 0.3)",
    backfaceVisibility: "hidden",
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
    transition: `transform 0.6s ease ${0.1 * t}s, left 0.1s ease, top 0.1s ease`,
    transform: `translate(-50%, -50%) rotateY(${flipped ? 180 : 180 * t}deg)`,
    boxShadow: "0px 0px 30px rgba(51, 51, 51, 0.5)",
  };

  return (
    <div style={{ position: "relative", width: "200px", height: "200px" }}>
      <div style={circleStyle}></div>
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
    </div>
  );
};

export default AnimatedProfile;
