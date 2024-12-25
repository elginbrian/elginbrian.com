import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProfileBarProps {
  name: string;
  title: string;
  avatarSrc: string;
  avatarSrcMobile: string;
}

const ActivityProfileBar: React.FC<ProfileBarProps> = ({ name, title, avatarSrc, avatarSrcMobile }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`z-50 fixed top-16 left-6 md:top-8 md:left-1/2 md:-translate-x-1/2 flex items-center space-x-4 transition-all duration-300`}>
      <Image src={isMobile ? avatarSrcMobile : avatarSrc} alt={`${name}'s avatar`} width={48} height={48} className="border rounded-full" />
      <div>
        <div className="font-semibold text-sm sm:text-base mb-1">{name}</div>
        <div className="font-light text-xs sm:text-sm">{title}</div>
      </div>
    </div>
  );
};

export default ActivityProfileBar;
