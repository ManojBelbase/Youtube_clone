import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import logo from "../../assets/logot.png";
import profile from "../../assets/profile.jpg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-1 border fixed top-0 w-[100%] z-10 bg-white">
      {/* logo section */}
      <div className="flex items-center gap-4">
        <GiHamburgerMenu className="text-xl cursor-pointer" />
        <p className="w-24">
          <img src={logo} alt="logo" className="h-full w-full cursor-pointer" />
        </p>
      </div>
      {/* search section */}
      <div className="flex items-center gap-4 w-[35%]">
        <div className="h-9 border border-gray-300 w-[100%] rounded-3xl pl-2  flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none px-2 bg-transparent"
          />
          <p className="cursor-pointer px-5 bg-gray-100 flex items-center h-full rounded-r-3xl border-l border-gray-300">
            <CiSearch className="text-2xl " />
          </p>
        </div>
        <div className="p-1 border rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
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
