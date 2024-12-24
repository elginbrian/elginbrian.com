import Image from "next/image";
import React from "react";

const TechStackContent: React.FC = () => {
  return (
    <>
      <Image alt="profile" src="/tech/github-stack.svg" width={320} height={100} className="block sm:hidden text-white cursor-pointer mx-auto mt-2" />
    </>
  );
};

export default TechStackContent;
