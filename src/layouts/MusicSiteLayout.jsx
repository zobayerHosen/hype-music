import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/music/Header";

const MusicSiteLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full min-h-screen bg-neutral-900">
        <Outlet />
      </main>
    </div>
  );
};

export default MusicSiteLayout;
