import React from "react";
import { Outlet } from "react-router-dom";

const MusicSiteLayout = () => {
  return (
    <div className="w-ful">
      <main className="w-full min-h-screen bg-dark">
        <Outlet />
      </main>
    </div>
  );
};

export default MusicSiteLayout;
