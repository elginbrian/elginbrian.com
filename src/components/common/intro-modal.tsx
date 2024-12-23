import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    setIsLocalhost(window.location.origin === "http://localhost:3000");
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    } else {
      setTimeout(() => setShowAnimation(false), 300);
    }
  }, [isOpen]);

  if (isLocalhost || (!isOpen && !showAnimation)) return null;

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300"></div>

      <div className={`relative bg-black bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 border-opacity-20 rounded-2xl mx-6 p-8 max-w-2xl w-full z-10 transition-transform duration-300 ${isOpen ? "scale-100" : "scale-98"}`}>
        <button className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl" onClick={onClose}>
          &times;
        </button>

        <div className="text-white">
          <div className="flex flex-col gap-8 items-center">
            <img src="https://i.gifer.com/17xo.gif" alt="Meme" width={100} height={20} />

            <ul className="text-sm text-center font-[family-name:var(--font-geist-mono)]">
              <li>This website is currently under development. Some features may not be fully functional yet.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
