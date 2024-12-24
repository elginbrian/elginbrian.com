import Image from "next/image";
import React from "react";

const AchievementContent: React.FC = () => {
  return (
    <>
      <Image
        alt="profile"
        src="/achievement.png"
        width={80}
        height={80}
        className="animate-float block sm:hidden text-white cursor-pointer mx-auto mt-2"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
        }}
      />
    </>
  );
};

export default AchievementContent;
