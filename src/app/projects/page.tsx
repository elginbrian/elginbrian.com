"use client";

import React, { useState } from "react";
import Clock from "@/components/common/clock";
import CursorCircle from "@/components/common/cursor-circle";
import Modal from "@/components/common/intro-modal";
import Navbar from "@/components/common/navbar";
import PageName from "@/components/common/page-name";
import Sparkles from "@/components/home/sparkle";
import CategoryBar from "@/components/projects/category-bar";
import ProjectList from "@/components/projects/project-list";
import AnimatedIcon from "@/components/projects/animated-icon";
import TopShade from "@/components/projects/top-shade";

const ProjectsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>("/projects");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <div className="dotted-background min-h-screen">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <PageName text="Previous Projects" />
      <Clock />
      <CursorCircle size={600} blur={40} gradientStart="rgba(255, 255, 255, 0.05)" gradientEnd="rgba(255, 255, 255, 0)" />
      <Sparkles />
      <CategoryBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ProjectList activeCategory={activeCategory} />
      <TopShade />
    </div>
  );
};

export default ProjectsPage;
