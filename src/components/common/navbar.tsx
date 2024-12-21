import { useState } from "react";
import { FaCamera, FaDiagramProject, FaGamepad, FaGithub, FaHouse, FaInstagram, FaLinkedin, FaNewspaper } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <nav className="hidden md:block fixed right-6 top-1/2 transform -translate-y-1/2 bg-black border-2 border-gray-700 rounded-full shadow-lg z-50 p-4 md:p-6">
        <div className="flex md:flex-col justify-between items-center gap-8">
          <a href="/" className="text-white hover:text-gray-400 transition-colors" aria-label="Home">
            <FaHouse size={24} />
          </a>
          <a href="/projects" className="text-white hover:text-gray-400 transition-colors" aria-label="Projects">
            <FaDiagramProject size={24} />
          </a>
          <a href="/activities" className="text-white hover:text-gray-400 transition-colors" aria-label="Activities">
            <FaCamera size={24} />
          </a>
          <a href="/articles" className="text-white hover:text-gray-400 transition-colors" aria-label="Articles">
            <FaNewspaper size={24} />
          </a>
          <a href="/arcades" className="text-white hover:text-gray-400 transition-colors" aria-label="Arcades">
            <FaGamepad size={24} />
          </a>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black border-2 border-gray-700 rounded-full shadow-lg z-50 p-4">
        <div className="flex justify-between items-center gap-8">
          <a href="/" className="text-white hover:text-gray-400 transition-colors" aria-label="Home">
            <FaHouse size={24} />
          </a>
          <a href="/projects" className="text-white hover:text-gray-400 transition-colors" aria-label="Projects">
            <FaDiagramProject size={24} />
          </a>
          <a href="/activities" className="text-white hover:text-gray-400 transition-colors" aria-label="Activities">
            <FaCamera size={24} />
          </a>
          <a href="/articles" className="text-white hover:text-gray-400 transition-colors" aria-label="Articles">
            <FaNewspaper size={24} />
          </a>
          <a href="/arcades" className="text-white hover:text-gray-400 transition-colors" aria-label="Arcades">
            <FaGamepad size={24} />
          </a>
        </div>
      </nav>
    </>
  );
}
