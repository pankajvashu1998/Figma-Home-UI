"use client";
import React from "react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

export default function Team() {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-8 py-6">
      {/* Top section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        {/* Left - Team Name */}
        <div className="flex items-center gap-3">
          <div className="bg-pink-500 text-white rounded-md p-2 text-xl">
            <FaUserFriends/>
          </div>
          <h1 className="text-xl sm:text-2xl  text-gray-800">
            Pankaj Kumar's team
          </h1>
          <span className="text-gray-500 text-sm cursor-pointer">
            ▼
          </span>
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-medium px-4 py-2 rounded-md">
            <IoIosAdd className="text-lg" />
            Project
          </button>
          <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm sm:text-base font-medium px-4 py-2 rounded-md">
            Share
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex justify-end items-center mb-6">
        <select className="border border-gray-300 rounded-md text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400">
          <option>Last modified</option>
          <option>Name</option>
          <option>Date created</option>
        </select>

        <div className="flex items-center gap-2 ml-3 text-gray-500">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h18M3 10h18M3 16h18"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Team Project Card */}
        <div className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
          <div className="bg-gray-50 rounded-xl h-40 mb-3 overflow-hidden relative">
            <img
              src="https://via.placeholder.com/300x150"
              alt="Project thumbnail"
              className="w-full h-full object-cover rounded-xl"
            />
            <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
              <MdOutlineStar className="text-yellow-500" />
            </button>
          </div>
          <h2 className="text-sm sm:text-base font-medium text-gray-800">
            Team project
          </h2>
          <p className="text-xs text-gray-500 mt-1">1 file</p>
        </div>

        {/* Upgrade Card */}
        <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50 hover:shadow-md transition flex flex-col justify-center items-center text-center">
          <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mb-3">
            <IoIosAdd />
          </div>
          <h2 className="text-sm sm:text-base font-medium text-gray-800">
            Upgrade to create more projects
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Get unlimited everything on the{" "}
            <a href="#" className="text-blue-500 underline">
              Professional plan.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
