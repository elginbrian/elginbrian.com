"use client";
import React, { useEffect, useRef, useState } from "react";

interface CursorCircleProps {
  size: number;
  blur: number;
  gradientStart: string;
  gradientEnd: string;
}

const CursorCircle: React.FC<CursorCircleProps> = ({ size, blur, gradientStart, gradientEnd }) => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (circleRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        circleRef.current.style.left = `${x - size / 2}px`;
        circleRef.current.style.top = `${y - size / 2}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <div
      ref={circleRef}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${gradientStart} 20%, ${gradientEnd} 80%)`,
        pointerEvents: "none",
        transition: "left 0.1s ease, top 0.1s ease",
        filter: `blur(${blur}px)`,
      }}
    />
  );
};

export default CursorCircle;
