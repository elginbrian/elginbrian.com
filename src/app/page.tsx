"use client";
import Modal from "@/components/common/intro-modal";
import Navbar from "@/components/common/navbar";
import React, { useState } from "react";

import "./globals.css";
import CursorCircle from "@/components/common/cursor-circle";
import Clock from "@/components/common/clock";
import PageName from "@/components/common/page-name";
import AuthorizeButton from "@/components/common/authorize-button";

const page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>("/");

  return (
    <div className="dotted-background" style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <AuthorizeButton />
      <PageName text="Introduction" />
      <Clock />
      <CursorCircle size={600} blur={40} gradientStart="rgba(255, 255, 255, 0.05)" gradientEnd="rgba(255, 255, 255, 0)" />
    </div>
  );
};

export default page;
