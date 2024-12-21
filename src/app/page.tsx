"use client";

import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@/components/common/intro-modal";
import Navbar from "@/components/common/navbar";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <>
      <Navbar />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
