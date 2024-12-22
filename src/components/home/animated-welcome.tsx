"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedWelcome: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageShouldDisappear = scrollPosition > window.innerHeight * 0.5;

  return (
    <div
      className="image-container"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) ${imageShouldDisappear ? "translateX(100vw)" : "translateX(0)"}`,
        transition: "transform 0.5s ease-out",
      }}
    >
      <Image src="/welcome.gif" alt="Your Image" width={650} height={500} style={{ objectFit: "cover" }} />
    </div>
  );
};

export default AnimatedWelcome;
