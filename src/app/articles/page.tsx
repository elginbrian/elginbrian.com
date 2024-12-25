"use client";
import Clock from "@/components/common/clock";
import CursorCircle from "@/components/common/cursor-circle";
import Modal from "@/components/common/intro-modal";
import Navbar from "@/components/common/navbar";
import PageName from "@/components/common/page-name";
import Sparkles from "@/components/home/sparkle";
import React, { useState } from "react";

const page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>("/articles");

  return (
    <div className="dotted-background" style={{ minHeight: "100vh" }}>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />

      <PageName text="Tech Articles" />
      <Clock />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CursorCircle size={600} blur={40} gradientStart="rgba(255, 255, 255, 0.05)" gradientEnd="rgba(255, 255, 255, 0)" />
      <Sparkles />
    </div>
  );
};

export default page;
