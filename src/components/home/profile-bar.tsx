import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProfileBarProps {
  name: string;
  title: string;
  avatarSrc: string;
}

const ProfileBar: React.FC<ProfileBarProps> = ({ name, title, avatarSrc }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 1.55;
      setIsBlurred(scrollPosition <= triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-16 left-6 md:top-8 md:left-1/2 md:-translate-x-1/2 flex items-center space-x-4 transition-all duration-300 ${isBlurred ? "opacity-0 blur-sm" : "opacity-100 blur-none"}`}>
      <Image src={avatarSrc} alt={`${name}'s avatar`} width={48} height={48} className="border rounded-full" />
      <div>
        <div className="font-semibold text-sm sm:text-base mb-1">{name}</div>
        <div className="font-light text-xs sm:text-sm">{title}</div>
      </div>
    </div>
  );
};

export default ProfileBar;
