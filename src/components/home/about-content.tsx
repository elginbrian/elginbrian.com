import Image from "next/image";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import ContactLinks from "./contact-links";

const AboutContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Image alt="profile" src="/avatar.png" width={150} height={150} className="hidden sm:block text-white cursor-pointer mx-auto" />

      <p className="text-sm sm:text-base mt-2 sm:mt-8 text-center sm:text-justify">Hi, I am Elgin Brian Wahyu Bramadhika, a second-year Information Technology student at the Faculty of Computer Science, Universitas Brawijaya.</p>

      <p className="text-sm sm:text-base mt-4 text-justify hidden lg:block">
        I am passionate about expanding my knowledge, especially in computer science and the business side of technology. I approach learning as a continuous process and enjoy engaging with new topics to deepen my understanding and skills.
      </p>

      <p className="text-sm sm:text-base mt-8 text-justify hidden lg:block">Contact:</p>
      <div className="flex-col space-y-4 mt-2 justify-center items-center hidden lg:block">
        <div className="flex items-center space-x-2 hover:text-gray-700">
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group flex items-center space-x-2">
            <FaLinkedin className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
            <span className="text-sm text-white group-hover:text-gray-700 transition-colors">linkedin.com/in/elginbrian</span>
          </a>
        </div>

        <div className="flex items-center space-x-2 hover:text-gray-700">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="group flex items-center space-x-2">
            <FaGithub className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
            <span className="text-sm text-white group-hover:text-gray-700 transition-colors">github.com/elginbrian</span>
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email Me" className="group flex items-center space-x-2">
            <FaEnvelope className="text-white text-2xl group-hover:text-gray-700 transition-colors" />
            <span className="text-sm text-white group-hover:text-gray-700 transition-colors">elginbrian49@student.ub.ac.id</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const AboutContentExpanded: React.FC = () => {
  return (
    <div className="">
      <p className="text-base mt-2 sm:mt-8 text-justify">Hi, I am Elgin Brian Wahyu Bramadhika, a second-year Information Technology student at the Faculty of Computer Science, Universitas Brawijaya.</p>

      <p className="text-base mt-4 text-justify mb-8">
        I am passionate about expanding my knowledge, especially in computer science and the business side of technology. I approach learning as a continuous process and enjoy engaging with new topics to deepen my understanding and skills.
      </p>

      <ContactLinks />
    </div>
  );
};

export default AboutContent;
