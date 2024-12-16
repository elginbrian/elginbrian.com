"use client";
import { FaGithub, FaInstagram, FaLinkedin, FaRocket } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  useEffect(() => {
    toast.info("This website is still under development.", {
      autoClose: 7000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
      icon: <FaRocket className="text-xl text-white" />,
      progressStyle: {
        backgroundColor: "#d500f9",
        boxShadow: "0 0 15px #d500f9",
      },
    });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img src="https://i.pinimg.com/originals/11/ef/fa/11effa6bcf3fe387b110510e4baafe28.gif" alt="Meme" width={180} height={48} />
        <ul className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Soon to be my portfolio website🥵</li>
          <li className="mb-2">Developed by: Elgin Brian Wahyu Bramadhika</li>
          <li>For now you can access my socials if you want to know more.</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://linkedin.com/in/elginbrian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl sm:text-2xl text-white mr-2" />
            LinkedIn
          </a>

          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/elginbrian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl sm:text-2xl text-white mr-2" />
            GitHub
          </a>

          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.instagram.com/_elginbrian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl sm:text-2xl text-white mr-2" />
            Instagram
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>

      <ToastContainer />
    </div>
  );
}
