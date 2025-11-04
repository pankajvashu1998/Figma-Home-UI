"use client";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosList } from "react-icons/io";

const TopBottomNavbar = () => {
  const [activeTab, setActiveTab] = useState("Recently viewed");

  const tabs = ["Recently viewed", "Shared files", "Shared projects"];

  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[12px] px-3 py-1 rounded-sm transition-colors ${
                activeTab === tab
                  ? "text-gray-700 bg-gray-200 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <select className="border border-gray-300 text-[12px] rounded-md px-3 py-1.5 text-gray-700 bg-white hover:border-gray-400 focus:outline-none w-full sm:w-auto">
            <option className="bg-black text-white">All organizations</option>
            <option className="bg-black text-white">Pankaj Kumar's team</option>
          </select>

          <select className="border border-gray-300 text-[12px] rounded-md px-3 py-1.5 text-gray-700 bg-white hover:border-gray-400 focus:outline-none w-full sm:w-auto">
            <option className="bg-black text-white">All files</option>
            <option className="bg-black text-white">Design</option>
            <option className="bg-black text-white">FigJam</option>
            <option className="bg-black text-white">Slides</option>
            <option className="bg-black text-white">Buzz</option>
            <option className="bg-black text-white">Site</option>
            <option className="bg-black text-white">Prototype</option>
          </select>

          <select className="border border-gray-300 text-[12px] rounded-md px-3 py-1.5 text-gray-700 bg-white hover:border-gray-400 focus:outline-none w-full sm:w-auto">
            <option className="bg-black text-white">Last viewed</option>
            <option className="bg-black text-white">Alphabetical</option>
            <option className="bg-black text-white">Date created</option>
            <option className="bg-black text-white">Oldest first</option>
            <option className="bg-black text-white">Newest first</option>
          </select>

          <div className="flex items-center gap-2 border border-gray-300 rounded-md p-0.5 w-fit">
            <button className="p-1 hover:bg-gray-100 rounded-md">
              <RxDashboard className="text-gray-700" size={16} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-md">
              <IoIosList className="text-gray-700" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBottomNavbar;
