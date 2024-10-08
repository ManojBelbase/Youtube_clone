import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import logo from "../../assets/logot.png";
import profile from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e?.key === "searchButton") &&
      search?.length > 0
    ) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-1 border fixed top-0 w-[100%] z-10 bg-white">
      {/* logo section */}
      <div className="flex items-center gap-4">
        <GiHamburgerMenu
          className="text-xl cursor-pointer"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <p className="w-24 hidden md:block">
          <img src={logo} alt="logo" className="h-full w-full cursor-pointer" />
        </p>
      </div>
      {/* search section */}
      <div className="flex items-center gap-4 ml-2 md:w-[35%]">
        <div className="h-9 border border-gray-300 w-[100%] rounded-3xl pl-2  flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none px-2 bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          {/* Wrap CiSearch in a div with onClick */}
          <div
            className="cursor-pointer px-5 bg-gray-100 flex items-center h-full rounded-r-3xl border-l border-gray-300"
            onClick={() => searchQueryHandler({ key: "searchButton" })} // Trigger search on button click
          >
            <CiSearch className="text-2xl " />
          </div>
        </div>
        <div
          className="p-1 border rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
          onClick={() => searchQueryHandler({ key: "searchButton" })}
        >
          <MdKeyboardVoice className="text-2xl" />
        </div>
      </div>
      {/* Profile section */}
      <div className="hidden md:flex items-center justify-center gap-2">
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RiVideoAddLine className="text-2xl" />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <BiBell className="text-2xl" />
        </div>
        <div className="p-1 h-11 rounded-full hover:bg-gray-200 cursor-pointer">
          <img src={profile} alt="" className="h-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
