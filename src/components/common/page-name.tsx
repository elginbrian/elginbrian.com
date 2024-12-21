import React from "react";

interface PageNameProps {
  text: string;
}

const PageName: React.FC<PageNameProps> = ({ text }) => {
  return <div className="absolute top-6 right-6 bg-white text-black text-sm font-sans font-semibold py-2 px-4 rounded-full">{text}</div>;
};

export default PageName;
