"use client";
import Modal from "@/components/common/intro-modal";
import React, { useState } from "react";

const page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></Modal>
    </>
  );
};

export default page;
