import React from "react";

// Icons
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { RiFeedbackLine } from "react-icons/ri";

const Sidebar = ({ sidebar }) => {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Padcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <MdOutlinedFlag />,
    },
    {
      id: 3,
      name: "Help",
      icon: <TfiHelpAlt />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <RiFeedbackLine />,
    },
  ];
  return (
    <div
      className={`px-2 mt-16 ${
        sidebar ? "w-[5%]" : "w-[17%]"
      } md:block h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden`}
    >
      <div className="flex flex-col">
        {sidebarItems.map((item) => (
          <div
            className="flex items-center space-x-4  cursor-pointer hover:bg-gray-100 duration-300 rounded-lg p-2"
            key={item.id}
          >
            <div className="text-xl">{item.icon}</div>
            <span className="text-base">{item.name}</span>
          </div>
        ))}
      </div>
      {/* horizontal line */}
      <hr className="mt-2" />
      <div className="mt-4">
        <div className="flex items-center space-x-2 p-2">
          <span className={`${sidebar ? "hidden" : "text-lg font-medium"}`}>
            You
          </span>
          <FaChevronRight className="font-thin text-xs" />
        </div>
        <div className="flex flex-col space-y-1">
          {sidebarItems2.map((item) => (
            <div
              className="flex items-center space-x-4  cursor-pointer hover:bg-gray-100 duration-300 rounded-lg p-2"
              key={item.id}
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Explore */}
      <hr className="mt-2" />
      <div className="mt-3">
        <span
          className={`${
            sidebar ? "hidden" : "text-lg font-medium p-2"
          } md:block hidden`}
        >
          Explore
        </span>
        <div className="flex flex-col space-y-1">
          {sidebarItems3.map((item) => (
            <div
              className="flex items-center space-x-4  cursor-pointer hover:bg-gray-100 duration-300 rounded-lg p-2"
              key={item.id}
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* More from youtube */}
      <hr className="mt-2" />
      <div className="mt-4">
        <span
          className={`${
            sidebar ? "hidden" : "text-lg font-medium p-2"
          } md:block hidden`}
        >
          More from YouTube
        </span>
        <div className="flex flex-col space-y-1">
          {sidebarItems4.map((item) => (
            <div
              className="flex items-center space-x-4  cursor-pointer hover:bg-gray-100 duration-300 rounded-lg p-2"
              key={item.id}
            >
              <div className="text-xl text-red-500">{item.icon}</div>
              <span className="text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* sidebar 5 */}
      <hr className="mt-2" />
      <div className="mt-4">
        <div className="flex flex-col space-y-1">
          {sidebarItems5.map((item) => (
            <div
              className="flex items-center space-x-4  cursor-pointer hover:bg-gray-100 duration-300 rounded-lg p-2"
              key={item.id}
            >
              <div className="text-xl">{item.icon}</div>
              <span className="text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <hr className="mt-2" />
      <div className={`${sidebar ? "hidden" : "mt-2"}`}>
        <span className="text-xs text-gray-500 font-semibold cursor-pointer md:block hidden">
          About Press Copyright <br />
          Contact us Creator Advertise <br /> Developers
          <br />
          <br />
          Terms Privacy Policy & Safety <br />
          How YouTube works <br /> Test new features
        </span>
        <p className="text-gray-500 text-xs font-extralight mt-4">
          &copy; 2024 Google LLC
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
