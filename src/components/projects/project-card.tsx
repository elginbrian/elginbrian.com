import React from "react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image"; // Import Next.js Image

interface ProjectCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  githubLink: string;
  categories?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, date, description, githubLink, categories }) => {
  const formattedLink = githubLink.replace(/^https?:\/\/github.com\//, "");

  return (
    <div className="relative floating-animation w-full bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {categories && categories.length > 0 && (
        <div className="absolute top-2 right-2 flex flex-wrap gap-1 z-10">
          {categories.map((category, index) => (
            <span key={index} className="px-2 py-1 text-xs font-medium text-white bg-gray-700 rounded-full shadow">
              {category}
            </span>
          ))}
        </div>
      )}

      <div className="relative w-full h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium border border-transparent hover:bg-gray-700 hover:text-white transition-colors"
          aria-label={`GitHub repository for ${title}`}
        >
          <FaGithub className="text-lg" />
          <span>{formattedLink}</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
