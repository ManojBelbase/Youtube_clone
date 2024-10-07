import React from "react";
import Navbar from "../components/shared_components/Navbar";
import Sidebar from "../components/shared_components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loading from "../loader/Loading";

const Layout = () => {
  const { loading } = useAuth();
  const location = useLocation();

  // Check if the current route contains "video" to hide the sidebar
  const isPlayingVideo = location.pathname.includes("/video/");

  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* Conditionally render the Sidebar */}
        {!isPlayingVideo && <Sidebar />}
        <div
          className={`mt-16 ${
            isPlayingVideo ? "mx-10 w-full" : "ml-2 w-[80%]"
          }`}
        >
          {loading && <Loading />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
