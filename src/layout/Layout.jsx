import React from "react";
import Navbar from "../components/shared_components/Navbar";
import Sidebar from "../components/shared_components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="mt-16 ml-2 w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
