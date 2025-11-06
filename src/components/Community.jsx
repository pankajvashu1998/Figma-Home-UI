import { communityData } from "@/utils/communityData";
import React from "react";
import { BsBookmark } from "react-icons/bs";
import { LuLeaf } from "react-icons/lu";

import { PiPuzzlePieceLight } from "react-icons/pi";
import { PiPresentationChartLight } from "react-icons/pi";
import { PiChalkboardSimpleLight } from "react-icons/pi";
import { GoGlobe } from "react-icons/go";

const Community = () => {
  const tabs = [
    {
      title: "Saved",
      icon: <BsBookmark size={18} />,
    },
    {
      title: "Design resources",
      icon: <LuLeaf size={18} />,
    },
    {
      title: "Figma Make",
      icon: "",
    },
    {
      title: "Plugins + widgets",
      icon: <PiPuzzlePieceLight size={18} />,
    },
    {
      title: "Presentations",
      icon: <PiPresentationChartLight size={18} />,
    },
    {
      title: "Whiteboarding",
      icon: <PiChalkboardSimpleLight size={18} />,
    },
    {
      title: "Websites",
      icon: <GoGlobe size={18} />,
    },
  ];

  return (
    <div>
      {/* Header section */}
      <div className="flex justify-between py-2 px-6 flex-col sm:flex-row">
        <span>Community</span>
        <div>
          <input
            type="text"
            placeholder="Search community"
            className="py-1.5 w-full sm:w-auto rounded-sm bg-gray-100 px-3 text-sm border border-gray-300"
          />
        </div>
      </div>

      {/* Banner section */}
      <div className="w-full min-h-[150px] sm:h-[180px] bg-blue-50 p-4 sm:p-0 flex flex-col sm:flex-row justify-center items-center text-center px-4 animate__animated animate__fadeIn">
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap justify-center items-center gap-1 text-lg sm:text-xl leading-snug">
            <span>Discover community-made</span>
            <span className="text-blue-500">libraries,</span>
          </div>
          <div className="text-lg sm:text-xl leading-snug">
            <span className="text-blue-500">plugins,</span>{" "}
            <span className="text-blue-500">icon sets</span> and more
          </div>
        </div>
      </div>

      {/* Tabs section with icons */}
      <div className="sm:px-8 px-4 py-4 flex  items-center flex-wrap">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className="text-sm text-left py-2 px-6 border border-gray-300 m-1 w-auto rounded-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <span className="text-gray-700">{tab.icon}</span>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Community items grid */}
      <div className="sm:p-8 p-4">
        <h1 className="py-2 text-sm">Promt to Code with Figma make</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {communityData.map((value, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-sm overflow-hidden"
            >
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={value.image}
                  alt={value.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center items-center flex-col bg-gray-100 py-6">
                <div className="flex justify-center items-center">
                  <div></div>
                  <div>
                    <div>{value.title}</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
