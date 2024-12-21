"use client";
import Modal from "@/components/common/intro-modal";
import Navbar from "@/components/common/navbar";
import React, { useState } from "react";

import "./globals.css";
import CursorCircle from "@/components/common/cursor-circle";

const page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <div className="dotted-background" style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <CursorCircle size={600} blur={40} gradientStart="rgba(255, 255, 255, 0.05)" gradientEnd="rgba(255, 255, 255, 0)" />
    </div>
  );
};

export default page;
