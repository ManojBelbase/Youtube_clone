import React, { useState } from "react";
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

  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <div className={`flex items-center`}>
        {/* Conditionally render the Sidebar */}
        {!isPlayingVideo && <Sidebar sidebar={sidebar} />}
        <div
          className={`mt-16 flex-1 mx-2 ${
            isPlayingVideo ? "mx-2 md:mx-10 w-full" : "ml-2 w-[85%] md:w-[80%]"
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
