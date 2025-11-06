"use client";
import { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

export default function TrashPage() {
  const [activeTab, setActiveTab] = useState("Files");

  const tabs = ["Files", "Projects"];
  const filters = ["Created by you", "All files", "Date trashed"];

  return (
    <>
      <div className="w-full p-3 border-b border-b-gray-300 mb-2">
        <span>Trash</span>
      </div>

      <div className="min-h-screen w-full bg-white text-gray-800 px-4 md:px-8 py-4 animate__animated animate__fadeIn">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center   pb-2 gap-3 sm:gap-0">
          {/* Tabs Section */}
          <div className="flex justify-center sm:justify-start gap-2 border-b sm:border-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-medium text-sm px-4 py-1 rounded-sm  ${
                  activeTab === tab ? "text-black bg-gray-100" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2">
            {filters.map((filter, i) => (
              <button
                key={i}
                className={`flex items-center gap-1 border rounded-md px-3 py-1.5 text-xs sm:text-sm transition-colors ${
                  i === 0
                    ? "text-blue-500 border-blue-400 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {filter}
                <BsChevronDown size={12} />
              </button>
            ))}

            {/* Grid/List Icons */}
            <div className="flex items-center gap-1 ml-2">
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <FiGrid size={18} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <FiList size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center h-[70vh] text-center text-gray-500 px-2">
          <p className="text-sm sm:text-base">
            You don’t have any trashed files.
          </p>
        </div>
      </div>
    </>
  );
}
