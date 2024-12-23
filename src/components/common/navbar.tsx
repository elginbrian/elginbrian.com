import { FaCamera, FaCodeBranch, FaDiagramProject, FaGamepad, FaHouse, FaNewspaper } from "react-icons/fa6";

interface NavbarProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, setActiveLink }) => {
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const getIconClasses = (link: string) => {
    return `flex items-center justify-center p-2 rounded-full transition-all duration-300 ${activeLink === link ? "bg-white text-gray-800" : "bg-transparent text-white"}`;
  };

  return (
    <>
      <nav className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 bg-black border-2 border-gray-700 rounded-full shadow-lg z-50 p-2 md:p-3 transition-all duration-500 ease-in-out opacity-0 blur-md fade-in-right">
        <div className="flex flex-col justify-center items-center gap-6">
          <a href="/" className={getIconClasses("/")} aria-label="Home" onClick={() => handleLinkClick("/")}>
            <FaHouse size={24} />
          </a>
          <a href="/projects" className={getIconClasses("/projects")} aria-label="Projects" onClick={() => handleLinkClick("/projects")}>
            <FaCodeBranch size={24} />
          </a>
          <a href="/activities" className={getIconClasses("/activities")} aria-label="Activities" onClick={() => handleLinkClick("/activities")}>
            <FaCamera size={24} />
          </a>
          <a href="/articles" className={getIconClasses("/articles")} aria-label="Articles" onClick={() => handleLinkClick("/articles")}>
            <FaNewspaper size={24} />
          </a>
          <a href="/arcades" className={getIconClasses("/arcades")} aria-label="Arcades" onClick={() => handleLinkClick("/arcades")}>
            <FaGamepad size={24} />
          </a>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black border-2 border-gray-700 rounded-full shadow-lg z-50 p-2 transition-all duration-500 ease-in-out opacity-0 blur-md fade-in-bottom">
        <div className="flex justify-center items-center gap-4">
          <a href="/" className={getIconClasses("/")} aria-label="Home" onClick={() => handleLinkClick("/")}>
            <FaHouse size={20} />
          </a>
          <a href="/projects" className={getIconClasses("/projects")} aria-label="Projects" onClick={() => handleLinkClick("/projects")}>
            <FaCodeBranch size={20} />
          </a>
          <a href="/activities" className={getIconClasses("/activities")} aria-label="Activities" onClick={() => handleLinkClick("/activities")}>
            <FaCamera size={20} />
          </a>
          <a href="/articles" className={getIconClasses("/articles")} aria-label="Articles" onClick={() => handleLinkClick("/articles")}>
            <FaNewspaper size={20} />
          </a>
          <a href="/arcades" className={getIconClasses("/arcades")} aria-label="Arcades" onClick={() => handleLinkClick("/arcades")}>
            <FaGamepad size={20} />
          </a>
        </div>
      </nav>

      <style jsx>{`
        .fade-in-right {
          animation: fade-in-right 0.5s ease-in-out forwards;
        }

        .fade-in-bottom {
          animation: fade-in-bottom 0.5s ease-in-out forwards;
        }

        @keyframes fade-in-right {
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes fade-in-bottom {
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
