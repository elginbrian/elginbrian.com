"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedWelcome: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

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

  if (!isClient) {
    return null;
  }

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
