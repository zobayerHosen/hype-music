import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/music/Header";
import Sidebar from "@/shared/music/Sidebar";

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
      <main className="w-full min-h-screen bg-neutral-900">
        <Outlet />
      </main>
    </div>
  );
};

export default MusicSiteLayout;
