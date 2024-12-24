import Image from "next/image";
import React from "react";

const ExperienceContent: React.FC = () => {
  return (
    <>
      <Image
        alt="profile"
        src="/experience.png"
        width={85}
        height={85}
        className="animate-float block sm:hidden text-white cursor-pointer mx-auto"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
        }}
      />
    </>
  );
};

export default ExperienceContent;
