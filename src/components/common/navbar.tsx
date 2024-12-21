import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b-2 border-gray-700 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-white text-xl font-bold tracking-wide">
          <a href="/">Elgin Brian</a>
        </div>

        <div className="hidden md:flex gap-6">
          <a href="/projects" className="text-sm text-white hover:text-gray-400 transition-colors">
            Projects
          </a>
          <a href="/activities" className="text-sm text-white hover:text-gray-400 transition-colors">
            Activities
          </a>
          <a href="/articles" className="text-sm text-white hover:text-gray-400 transition-colors">
            Articles
          </a>
          <a href="/arcades" className="text-sm text-white hover:text-gray-400 transition-colors">
            Arcades
          </a>
        </div>

        <div className="hidden md:flex gap-4">
          <a href="https://linkedin.com/in/elginbrian" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/elginbrian" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.instagram.com/_elginbrian/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
            <FaInstagram size={20} />
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t-2 border-gray-700">
          <div className="flex flex-col items-center gap-4 py-4">
            <a href="/projects" className="text-sm text-white hover:text-gray-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="/activities" className="text-sm text-white hover:text-gray-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Activities
            </a>
            <a href="/articles" className="text-sm text-white hover:text-gray-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Articles
            </a>
            <a href="/arcade" className="text-sm text-white hover:text-gray-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Arcades
            </a>
          </div>
          <div className="flex justify-center gap-4 py-4 border-t border-gray-700">
            <a href="https://linkedin.com/in/elginbrian" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/elginbrian" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.instagram.com/_elginbrian/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
