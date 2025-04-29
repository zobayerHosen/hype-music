import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/shared/music/Header";
import Sidebar from "@/shared/music/Sidebar";
import Footer from "@/shared/music/Footer";

const MusicSiteLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // sidebar state

  const handleSideBarOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <Header handleSideBarOpen={handleSideBarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className="w-full min-h-screen bg-[#1F2730]">
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MusicSiteLayout;
