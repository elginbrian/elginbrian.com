"use client";
import React, { useState } from "react";
import Modal from "@/components/common/intro-modal";
import Navbar from "@/components/common/navbar";
import CursorCircle from "@/components/common/cursor-circle";
import Clock from "@/components/common/clock";
import PageName from "@/components/common/page-name";
import AuthorizeButton from "@/components/common/authorize-button";

import "./globals.css";
import AnimatedProfile from "@/components/home/animated-profile";
import AnimatedWelcome from "@/components/home/animated-welcome";

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>("/");

  return (
    <div className="dotted-background scrollbar-hide" style={{ minHeight: "150vh", position: "relative" }}>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <AuthorizeButton />
      <PageName text="Introduction" />
      <Clock />

      <AnimatedProfile maxScroll={500} />
      <AnimatedWelcome />

      <CursorCircle size={600} blur={40} gradientStart="rgba(255, 255, 255, 0.05)" gradientEnd="rgba(255, 255, 255, 0)" />
    </div>
  );
};

export default Page;
