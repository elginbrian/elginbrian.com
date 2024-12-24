import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

interface ContactLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const ContactLinks: React.FC = () => {
  const links: ContactLink[] = [
    {
      href: "https://www.linkedin.com/in/elginbrian",
      label: "linkedin.com/in/elginbrian",
      icon: <FaLinkedin className="text-white text-2xl group-hover:text-gray-700 transition-colors" />,
    },
    {
      href: "https://github.com/elginbrian",
      label: "github.com/elginbrian",
      icon: <FaGithub className="text-white text-2xl group-hover:text-gray-700 transition-colors" />,
    },
    {
      href: "mailto:elginbrian49@student.ub.ac.id",
      label: "elginbrian49@student.ub.ac.id",
      icon: <FaEnvelope className="text-white text-2xl group-hover:text-gray-700 transition-colors" />,
    },
  ];

  return (
    <div className="flex-col space-y-4 mt-2 justify-center items-center">
      {links.map((link, index) => (
        <div key={index} className="flex items-center space-x-2 hover:text-gray-700">
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="group flex items-center space-x-2">
            {link.icon}
            <span className="text-sm text-white group-hover:text-gray-700 transition-colors">{link.label}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactLinks;
