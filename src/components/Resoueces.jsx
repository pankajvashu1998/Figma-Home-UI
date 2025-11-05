"use client";
import React from "react";

export default function Resources() {
  return (
    <div className="w-full min-h-screen bg-white p-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">
          Resources
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for internal templates and plugins"
          className="w-full sm:w-[380px] border border-gray-300 bg-gray-50 rounded-md px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      {/* Template Cards Section */}
      <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-[#FFE6DA] rounded-xl p-4 shadow hover:shadow-md transition-all w-[250px] sm:w-[260px]">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Onboard Guide
            </h2>
            <p className="text-sm text-gray-600 mb-4">PRODUCT DESIGN TEAM</p>
            <div className="bg-white rounded-md h-12"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8DDFE] rounded-xl p-4 shadow hover:shadow-md transition-all w-[250px] sm:w-[260px]">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Conference Event template
            </h2>
            <p className="text-sm text-gray-600 mb-4">PRODUCT DESIGN TEAM</p>
            <div className="bg-white rounded-md h-12"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFD8C5] rounded-xl p-4 shadow hover:shadow-md transition-all w-[250px] sm:w-[260px] relative">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Design team weekly progress
            </h2>
            <p className="text-sm text-gray-600 mb-4">PRODUCT DESIGN TEAM</p>
            <div className="bg-white rounded-md h-12"></div>

            {/* WIP Tag */}
            <span className="absolute top-3 right-3 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md font-semibold">
              #wip
            </span>
          </div>
        </div>

        {/* Upgrade Section */}
        <div className="max-w-lg text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Custom templates—just for your team
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Upgrade to the Professional plan, and build templates for your team’s
            rituals and workflows—without creating a new file each time.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-md mb-3 transition-all">
            Upgrade to Professional
          </button>

          <p className="text-sm text-blue-500 hover:underline cursor-pointer">
            Browse resources from Community
          </p>
        </div>
      </div>
    </div>
  );
}
