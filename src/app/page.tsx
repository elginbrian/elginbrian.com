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
import Sparkles from "@/components/home/sparkle";
import ProfileBar from "@/components/home/profile-bar";
import HintBar from "@/components/home/hint-bar";
import WaveAnimation from "@/components/home/wave-animation";

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>("/");

  return (
    <div className="dotted-background scrollbar-hide" style={{ minHeight: "300vh", position: "relative" }}>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <WaveAnimation />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AuthorizeButton />
      <PageName text="Introduction" />
      <HintBar />
      <Clock />
      <AnimatedProfile maxScroll={500} />
      <ProfileBar name="Elgin Brian Wahyu Bramadhika" title="Software Engineering Enthusiast" avatarSrc="/avatar.png" />
      <AnimatedWelcome />
      <CursorCircle size={600} blur={40} gradientStart="rgba(255, 255, 255, 0.05)" gradientEnd="rgba(255, 255, 255, 0)" />
      <Sparkles />
    </div>
  );
};

export default Page;
