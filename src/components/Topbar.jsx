"use client";
import { useState } from "react";
import { GoGlobe } from "react-icons/go";
import { TfiBlackboard } from "react-icons/tfi";
import { GrDocument } from "react-icons/gr";
import { BiParty } from "react-icons/bi";
import { GiLevelFour } from "react-icons/gi";
import { IoDownloadOutline } from "react-icons/io5";
import { FiPenTool } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function TopBar({ setSideBar, sideBar }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Help Button (bottom-right) */}
      <button className="fixed bottom-7 right-7 z-50 h-8 w-8 rounded-full bg-black flex justify-center items-center text-white">
        <FaQuestion />
      </button>

      {/* TopBar */}
      <div className="bg-white fixed top-0 md:static z-50 border-b border-gray-200 px-4 py-3 w-full">
        <div className="flex sm:flex-row sm:items-center justify-between gap-3 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <span
              onClick={() => setSideBar(!sideBar)}
              className="md:hidden cursor-pointer text-xl"
            >
              <FaBars />
            </span>
            <h1 className="text-[14px]">Recents</h1>
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <ul className="flex flex-wrap justify-start text-[12px] items-center gap-2">
                {/* Design */}
                <li className="px-4 py-2 rounded-2xl bg-gray-100 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-blue-500 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <FiPenTool className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Design
                </li>

                {/* FigJam */}
                <li className="px-4 py-2 rounded-2xl bg-gray-100 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-purple-400 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <GrDocument className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  FigJam
                </li>

                {/* Slides */}
                <li className="px-4 py-2 rounded-2xl bg-gray-100 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-orange-400 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <TfiBlackboard className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Slides
                </li>

                {/* Buzz */}
                <li className="px-4 py-2 rounded-2xl bg-gray-100 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-pink-500 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <BiParty className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Buzz
                </li>

                {/* Site */}
                <li className="px-4 py-2 rounded-2xl bg-gray-100 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-indigo-400 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <GoGlobe className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Site
                </li>

                {/* Make */}
                <li className="px-3 py-2 rounded-2xl bg-gray-100 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-black text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <GiLevelFour className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Make
                </li>
              </ul>

              {/* Download */}
              <span className="p-2 rounded-full bg-gray-100 flex items-center text-lg hover:bg-gray-300 transition cursor-pointer">
                <IoDownloadOutline />
              </span>
            </div>
          </div>

          {/* Mobile "Create" button */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sm lg:hidden cursor-pointer flex justify-center items-center gap-2 bg-blue-500 px-5 py-2 text-white rounded-sm"
          >
            <span className="text-xl">
              <IoIosAdd />
            </span>
            Create
            <span
              className={`text-xl transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <MdKeyboardArrowDown />
            </span>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Create Menu Card */}
      {menuOpen && (
        <div className="absolute top-[60px] right-0 w-full z-40 flex justify-end px-6 md:hidden">
          <div className="bg-white shadow-lg rounded-xl p-4 w-[90%] max-w-[200px] border border-gray-200">
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <FiPenTool className="text-blue-500" /> Design
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <GrDocument className="text-purple-500" /> FigJam
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <TfiBlackboard className="text-orange-400" /> Slides
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <BiParty className="text-pink-500" /> Buzz
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <GoGlobe className="text-indigo-400" /> Site
              </li>
              <li className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <GiLevelFour className="text-black" /> Make
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
