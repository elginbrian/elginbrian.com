import React, { useMemo } from "react";
import Image from "next/image";

interface PolaroidProps {
  imageUrl: string;
  description: string;
  date: string;
}

const Polaroid: React.FC<PolaroidProps> = ({ imageUrl, description, date }) => {
  const animationDelay = useMemo(() => `${Math.random() * 3}s`, []);
  const animationDuration = useMemo(() => `${10 + Math.random() * 5}s`, []);

  return (
    <div
      className="polaroid bg-white border-1 border-gray-700 shadow-lg border w-72 p-2 pb-8 flex flex-col items-center text-center"
      style={{
        animationDelay,
        animationDuration,
        filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
      }}
    >
      <div className="h-48 w-full overflow-hidden mb-4 relative">
        <Image src={imageUrl} alt={description} layout="fill" objectFit="cover" />
      </div>
      <p className="font-semibold text-lg text-gray-800 mb-2">{description}</p>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
  );
};

export default Polaroid;
