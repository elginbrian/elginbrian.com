import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    } else {
      setTimeout(() => setShowAnimation(false), 300);
    }
  }, [isOpen]);

  if (!isOpen && !showAnimation) return null;

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 mx-6 ${isOpen ? "fade-in" : "fade-out"}`}>
      <div className={`relative bg-black border-2 border-white rounded-2xl p-8 max-w-2xl w-full z-10 scale-up-center`}>
        <button className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl" onClick={onClose}>
          &times;
        </button>
        <div className="text-white">
          <div className="flex flex-col gap-8 items-center">
            <img src="https://i.gifer.com/17xo.gif" alt="Meme" width={120} height={20} />

            <ul className="text-sm text-center font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">This website is still under development</li>
              <li className="mb-2">by: Elgin Brian Wahyu Bramadhika</li>
              <li>For now you can access my socials if you want to know more.</li>
            </ul>
            <div className="flex gap-4 items-center flex-row">
              <a
                className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://linkedin.com/in/elginbrian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl sm:text-2xl text-white sm:mr-2" />
                <span className="hidden sm:block">LinkedIn</span>
              </a>
              <a
                className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://github.com/elginbrian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl sm:text-2xl text-white sm:mr-2" />
                <span className="hidden sm:block">GitHub</span>
              </a>
              <a
                className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://www.instagram.com/_elginbrian/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl sm:text-2xl text-white sm:mr-2" />
                <span className="hidden sm:block">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
