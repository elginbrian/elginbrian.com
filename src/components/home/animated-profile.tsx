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
    if (t >= 0.95) {
      setFlipped(true);
    }
  }, [t]);

  const imageStyle: React.CSSProperties = {
    transform: `translate(-50%, -50%) rotateY(${flipped ? 180 : 0}deg)`,
    position: "fixed",
    left: horizontalPosition,
    top: verticalPosition,
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    transition: "transform 1s ease, left 0.1s linear, top 0.1s linear",
    boxShadow: "0px 4px 15px rgba(173, 216, 230, 0.3)",
    backfaceVisibility: "hidden",
  };

  return <Image src={flipped ? "/next.svg" : "/pluto.png"} alt="Profile" width={240} height={240} style={imageStyle} />;
};

export default AnimatedProfile;
