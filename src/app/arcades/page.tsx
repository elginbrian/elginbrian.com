"use client";
import Modal from "@/components/common/intro-modal";
import Navbar from "@/components/common/navbar";
import React, { useState } from "react";

const page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <>
      <Navbar />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
    </>
  );
};

export default page;
