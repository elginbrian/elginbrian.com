"use client";
import AuthModal from "@/components/authorization/auth-modal";
import Clock from "@/components/common/clock";
import CursorCircle from "@/components/common/cursor-circle";
import Navbar from "@/components/common/navbar";
import PageName from "@/components/common/page-name";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const router = useRouter();

  return (
    <div className="dotted-background" style={{ minHeight: "100vh" }}>
      <PageName text="Authorization" />
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(code) => {
          console.log("Authorization code:", code);
        }}
      />

      <button
        onClick={() => router.back()}
        className="hidden lg:flex z-50 fixed sm:left-6 sm:top-[45%] bg-black rounded-full border border-solid border-white transition-colors items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      >
        <FaArrowLeft className="text-xl sm:text-2xl text-white sm:mr-2" />
        <span className="hidden sm:block">Back</span>
      </button>

      <button
        onClick={() => router.back()}
        className="flex lg:hidden z-50 fixed bottom-6 right-6 rounded-full bg-black border border-solid border-white transition-colors items-center justify-center hover:bg-gray-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      >
        <FaArrowLeft className="text-xl sm:text-2xl text-white sm:mr-2" />
        <span className="hidden sm:block">Back</span>
      </button>

      <Clock />
      <CursorCircle size={600} blur={40} gradientStart="rgba(255, 255, 255, 0.05)" gradientEnd="rgba(255, 255, 255, 0)" />
    </div>
  );
};

export default Page;
