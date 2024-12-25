import React from "react";
import ProjectCard from "./project-card";

const projects = [
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQEh-822ZH2ZYA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735108099329?e=1735714800&v=beta&t=I2Yk8mynPRXrsmciL38ld09wrNat8bA4W3oeb0ADkug",
    title: "ELGINBRIAN.COM",
    date: "Dec 2024 - Jan 2025",
    categories: ["Web", "Frontend", "NextJS"],
    description: "The website you're browsing right now, built with NextJS and a touch of creativity. A hub for my projects, ideas, and maybe a few surprises if you look closely.",
    githubLink: "https://github.com/elginbrian/elginbrian.com",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQFo5ywWGFqJ-w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734351826116?e=1735714800&v=beta&t=6zoBOPQcABp_owHDPZKp7P1fzS90EQfnlmEjN8Hzf1A",
    title: "EDUTECH - ICF UPNVJT 2024",
    date: "Nov 2024 - Dec 2024",
    categories: ["Web", "Backend", "NestJS"],
    description: "EDUTECH is a learning platform designed to help users access courses, monitor their progress, and share feedback through reviews.",
    githubLink: "https://github.com/elginbrian/EDUTECH-BE",
  },
  {
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQG4zZ8nutgAqg/articleshare-shrink_800/articleshare-shrink_800/0/1734008742236?e=1735714800&v=beta&t=gUs4oP8AgKkGruPlslIwwanTez1aMZ7Zuy5VQmsORZU",
    title: "ONLYFIX",
    date: "Oct 2024 - Dec 2024",
    categories: ["Web", "Backend", "Laravel"],
    description: "OnlyFix provides easy and reliable access to verified technician services, ensuring that repairs are carried out safely, efficiently, and transparently.",
    githubLink: "https://github.com/elginbrian/ONLYFIX-BE",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQFyrlkXXXruTw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732460889876?e=1735714800&v=beta&t=mrG-QiZqV_A2m2rCra_eptVtJiVvkKZdDYVSNoyI9hQ",
    title: "CALTRACK - MAGE X ITS",
    date: "Sep 2024 - Nov 2024",
    categories: ["Mobile", "Flutter"],
    description: "CalTrack is a mobile-based application designed to simplify nutrition and health tracking automatically.",
    githubLink: "https://github.com/caltrack-mage-x/CALTRACK-APP",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQFCm3gUu7n0mA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1725164129685?e=1735714800&v=beta&t=l9lAw7WQpV7bbESON9Xbw-zlC1iq0gprAv2nywKV57U",
    title: "GREVENTURE - RAION HACKJAM 2024",
    date: "Aug 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Greventure is an Android application designed to connect users with their local environments through a map-based social media platform.",
    githubLink: "https://github.com/elginbrian/Greventure",
  },
  {
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQGfJoskKmw_6w/articleshare-shrink_800/articleshare-shrink_800/0/1734008060636?e=1735714800&v=beta&t=PjDgsjMrCFB-DR3x4ZyRfJAPowG9jAwQ8yOlteFjsms",
    title: "SEATUDY - SEA COMPFEST UI 2024",
    date: "Aug 2024",
    categories: ["Web", "Frontend", "NextJS"],
    description: "SEATUDY is an educational platform that allows users to manage their courses, track their progress, and provide feedback through reviews.",
    githubLink: "https://github.com/elginbrian/project-one",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQG4oMfaCtq8Lw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1725765532642?e=1735714800&v=beta&t=UVjAmlp4fPGdHi84LWwvNJUs9f-sHcOVAOY0r2IufeM",
    title: "BISA INDONESIA",
    date: "December 18, 2024",
    categories: ["Web", "Frontend", "HTML"],
    description: "BISA INDONESIA is a non-profit organization operating in the fields of environmental conservation and social welfare.",
    githubLink: "https://github.com/elginbrian/DDAP-BISA-INDONESIA",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQEQKzR6rd4rGA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720260713201?e=1735714800&v=beta&t=LwkIX97U5E-DwCg8G-raZ66vmyAoXn2uXHkUB-sWPaY",
    title: "SEA SALON - SEA COMPFEST UI 2024",
    date: "Jun 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Introducing SEA SALON, this app lets users easily browse available services, select their preferred stylist, and book appointments quickly.",
    githubLink: "https://github.com/elginbrian/COMPFEST16-SEA-SALON",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQHo8PFNUdE-dw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1715305704309?e=1735714800&v=beta&t=kod_qpjKWLyXzuPqRRO-bM7xv8AYSauXYN8lqs9XAV0",
    title: "TRUFRIEND - SLASHCOM UPNVJ 2024",
    date: "May 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Trufriend is an application created for users with autism, allowing them to feel present in the world of social media.",
    githubLink: "https://github.com/elginbrian/5bounties-Trufriend-FE",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQFzE86WhYT6_A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1714488858781?e=1735714800&v=beta&t=_m6BSiDoppCejA-cfBcym1yTpT5U7VDfeh1kWjSca0Y",
    title: "AIRONMENT - SSG x HACKFEST UC 2024",
    date: "Apr 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Aironment is a mobile apps that provides a platform for creating communities aimed at environmental empowerment. This apps can also provide information and education regarding air quality.",
    githubLink: "https://github.com/elginbrian/hackfestuc2024_frontend",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQHxTdOGtiNLiA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1711200676204?e=1735714800&v=beta&t=q7t2vu4Xk0l3ynp9CN0IhjGI9IEuX7HhW8FZUzmb2Tk",
    title: "COINVEST - RAION INTERNSHIP 2024",
    date: "Feb 2024 - Apr 2024",
    categories: ["Mobile", "Kotlin"],
    description: "Coinvest is a mobile-based discussion and community application in the field of digital investment. This application provide a safe platform to discuss about digital investment.",
    githubLink: "https://github.com/elginbrian/Raion-Coinvest",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D562DAQF3LwyINTbSvQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1705587543320?e=1735714800&v=beta&t=xRJKxt-ljBuVcX4xT6uV_q4uQ4m6DJerLiS7ThGddnw",
    title: "KEREHORE! - GDSC HACKFEST 2024",
    date: "Dec 2023 - Jan 2024",
    categories: ["Mobile", "Kotlin"],
    description: "KereHore! is a mobile application based on Kotlin and Jetpack Compose designed to help students to manage their daily spending.",
    githubLink: "https://github.com/elginbrian/HackFest-KereHore",
  },
];

interface ProjectListProps {
  activeCategory: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ activeCategory }) => {
  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.categories.includes(activeCategory));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 pl-6 pr-6 pb-28 pt-32 lg:pl-12 lg:pb-12 md:pt-28 md:pr-32">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} image={project.image} categories={project.categories} title={project.title} date={project.date} description={project.description} githubLink={project.githubLink} />
      ))}
    </div>
  );
};

export default ProjectList;
