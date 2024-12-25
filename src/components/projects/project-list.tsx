import React from "react";
import ProjectCard from "./project-card";

const projects = [
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "ELGINBRIAN.COM",
    date: "Dec 2024 - Jan 2025",
    categories: ["Web", "Frontend", "NextJS"],
    description: "The website you're browsing right now, built with NextJS and a touch of creativity. A hub for my projects, ideas, and maybe a few surprises if you look closely.",
    githubLink: "https://github.com/elginbrian/elginbrian.com",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "EDUTECH - ICF UPNVJT 2024",
    date: "Nov 2024 - Dec 2024",
    categories: ["Web", "Backend", "NestJS"],
    description: "EDUTECH is a learning platform designed to help users access courses, monitor their progress, and share feedback through reviews.",
    githubLink: "https://github.com/elginbrian/EDUTECH-BE",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "ONLYFIX - PAW FILKOM UB",
    date: "Oct 2024 - Dec 2024",
    categories: ["Web", "Backend", "Laravel"],
    description: "OnlyFix provides easy and reliable access to verified technician services, ensuring that repairs are carried out safely, efficiently, and transparently.",
    githubLink: "https://github.com/elginbrian/ONLYFIX-BE",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "CALTRACK - MAGE X ITS",
    date: "Sep 2024 - Nov 2024",
    categories: ["Mobile", "Flutter"],
    description: "CalTrack is a mobile-based application designed to simplify nutrition and health tracking automatically.",
    githubLink: "https://github.com/caltrack-mage-x/CALTRACK-APP",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "GREVENTURE - RAION HACKJAM 2024",
    date: "Aug 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Greventure is an Android application designed to connect users with their local environments through a map-based social media platform.",
    githubLink: "https://github.com/elginbrian/Greventure",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "SEATUDY - SEA COMPFEST UI 2024",
    date: "Aug 2024",
    categories: ["Web", "Frontend", "NextJS"],
    description: "SEATUDY is an educational platform that allows users to manage their courses, track their progress, and provide feedback through reviews.",
    githubLink: "https://github.com/elginbrian/project-one",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "BISA INDONESIA - DDAP FILKOM UB",
    date: "December 18, 2024",
    categories: ["Web", "Frontend", "HTML"],
    description: "BISA INDONESIA is a non-profit organization operating in the fields of environmental conservation and social welfare.",
    githubLink: "https://github.com/elginbrian/DDAP-BISA-INDONESIA",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "SEA SALON - SEA COMPFEST UI 2024",
    date: "Jun 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Introducing SEA SALON, this app lets users easily browse available services, select their preferred stylist, and book appointments quickly.",
    githubLink: "https://github.com/elginbrian/COMPFEST16-SEA-SALON",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "TRUFRIEND - SLASHCOM UPNVJ 2024",
    date: "May 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Trufriend is an application created for users with autism, allowing them to feel present in the world of social media.",
    githubLink: "https://github.com/elginbrian/5bounties-Trufriend-FE",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "AIRONMENT - SSG x HACKFEST UC 2024",
    date: "Apr 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Aironment is a mobile apps that provides a platform for creating communities aimed at environmental empowerment. This apps can also provide information and education regarding air quality.",
    githubLink: "https://github.com/elginbrian/hackfestuc2024_frontend",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "COINVEST - RAION INTERNSHIP 2024",
    date: "Feb 2024 - Apr 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Coinvest is a mobile-based discussion and community application in the field of digital investment. This application provide a safe platform to discuss about digital investment.",
    githubLink: "https://github.com/elginbrian/Raion-Coinvest",
  },
  {
    image: "https://img.freepik.com/premium-vector/dark-concrete-background-with-grunge-effect_278222-9629.jpg?semt=ais_hybrid",
    title: "KEREHORE! - GDSC HACKFEST 2024",
    date: "Dec 2023 - Jan 2024",
    categories: ["Mobile", "Kotlin"],
    description: "KereHore! is a mobile application based on Kotlin and Jetpack Compose designed to help students to manage their daily spending.",
    githubLink: "https://github.com/elginbrian/HackFest-KereHore",
  },
];

const ProjectList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 pl-6 pr-6 pb-28 pt-32 lg:pl-12 lg:pb-12 md:pt-28 md:pr-32 ">
      {projects.map((project, index) => (
        <ProjectCard key={index} image={project.image} categories={project.categories} title={project.title} date={project.date} description={project.description} githubLink={project.githubLink} />
      ))}
    </div>
  );
};

export default ProjectList;
