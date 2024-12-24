import Image from "next/image";
import React from "react";

const experiences = [
  {
    logo: "/raion.png",
    title: "Mobile Developer",
    company: "Raion Community",
    duration: "Mar 2024 - Present",
    description: "Contributed to the development of various mobile applications at RAION Community as a Mobile Developer.",
  },
  {
    logo: "/gdgoc.png",
    title: "Core Team of Android Development",
    company: "GDGoC Brawijaya University",
    duration: "Oct 2024 - Present",
    description: "Created learning modules on Flutter for GDGC members. Served as a speaker for workshops on basic Dart and Flutter.",
  },
];

const ExperienceContent: React.FC = () => {
  return (
    <>
      <Image
        alt="profile"
        src="/experience.png"
        width={85}
        height={85}
        className="animate-float block sm:hidden text-white cursor-pointer mx-auto mt-2"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
        }}
      />

      <div className="mt-4  hidden sm:block">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-start gap-2 mb-6 px-6 rounded-lg shadow-sm text-white">
            <Image
              alt={`${experience.company} logo`}
              src={experience.logo}
              width={50}
              height={50}
              className="rounded-full"
              style={{
                filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
              }}
            />
            <div>
              <h3 className="text-sm font-semibold">{experience.title}</h3>
              <p className="text-xs">{experience.company}</p>
              <p className="text-xs mb-1">{experience.duration}</p>
              <p className="text-xs text-justify">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const ExperienceContentExpanded: React.FC = () => {
  return (
    <div className="">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-start gap-2 mb-6 mt-4 rounded-lg shadow-sm text-white">
          <Image
            alt={`${experience.company} logo`}
            src={experience.logo}
            width={50}
            height={50}
            className="rounded-full"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))",
            }}
          />
          <div>
            <h3 className="text-sm font-semibold">{experience.title}</h3>
            <p className="text-xs">{experience.company}</p>
            <p className="text-xs mb-1">{experience.duration}</p>
            <p className="text-xs text-justify">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
