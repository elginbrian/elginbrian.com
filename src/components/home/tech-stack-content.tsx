import Image from "next/image";
import React from "react";

const TechStackContent: React.FC = () => {
  return (
    <>
      <Image
        alt="profile"
        src="/tech/github-stack.svg"
        width={320}
        height={100}
        className="block sm:hidden text-white cursor-pointer mx-auto mt-2"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.1))",
        }}
      />
    </>
  );
};

export default TechStackContent;
