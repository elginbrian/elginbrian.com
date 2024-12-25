import Image from "next/image";
import React from "react";

const achievements = [
  {
    logo: "/bca.jpeg",
    title: "Bakti BCA Scholarship Awardee 2025",
    company: "PT. Bank Central Asia Tbk.",
    duration: "Dec 2024 - Present",
    description: "Contributed to the development of various mobile applications at RAION Community as a Mobile Developer.",
  },
  {
    logo: "/compfest.jpeg",
    title: "Best Team of SEA COMPFEST-16",
    company: "Universitas Indonesia",
    duration: "Sep 2024",
    description: "Contributed to the development of various mobile applications at RAION Community as a Mobile Developer.",
  },
  {
    logo: "/uc.png",
    title: "2nd Place of SSGxHackfest",
    company: "Universitas Ciputra",
    duration: "Apr 2024",
    description: "Contributed to the development of various mobile applications at RAION Community as a Mobile Developer.",
  },
];

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

      <div className="mt-4  hidden sm:block">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-4 mb-6 px-6 rounded-lg shadow-sm text-white">
            <Image
              alt={`${achievement.company} logo`}
              src={achievement.logo}
              width={50}
              height={50}
              className="rounded-full"
              style={{
                filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
              }}
            />
            <div>
              <h3 className="text-sm font-semibold">{achievement.title}</h3>
              <p className="text-xs">{achievement.company}</p>
              <p className="text-xs">{achievement.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const AchievementContentExpanded: React.FC = () => {
  return (
    <div className="">
      <h3 className="text-xl font-semibold items-center flex flex-row justify-center mb-4 absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Achievement</h3>
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-start gap-4 mb-6 mx-4 mt-4 rounded-lg shadow-sm text-white">
          <Image
            alt={`${achievement.company} logo`}
            src={achievement.logo}
            width={50}
            height={50}
            className="rounded-full"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
            }}
          />
          <div>
            <h3 className="text-sm font-semibold">{achievement.title}</h3>
            <p className="text-xs">{achievement.company}</p>
            <p className="text-xs">{achievement.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementContent;
