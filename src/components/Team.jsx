"use client";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import {
  MdArrowDropDown,
  MdOutlineArrowRightAlt,
  MdOutlineStar,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { FcBiohazard } from "react-icons/fc";
import { PiSpinner } from "react-icons/pi";
import { SiGooglecolab } from "react-icons/si";
import { VscSettings } from "react-icons/vsc";
import Link from "next/link";
export default function Team() {
  const [isProject, setProduct] = useState(false);
  const [isInviteLink, setInviteLink] = useState(false);
  const url = window.location.href;

  //copy link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    } catch (err) {
      alert("Failed to copy");
    }
  };

  // project modal
  if (isProject) {
    return (
      <div className="w-full p-4 min-h-screen flex justify-center items-center bg-black/60 fixed top-0 left-0 right-0 animate__animated animate__fadeIn">
        <div className="w-full h-[450px] max-w-xl rounded-2xl bg-white relative p-5 overflow-y-auto">
          <span
            onClick={() => setProduct(false)}
            className="absolute right-3 top-3 text-xl text-black hover:bg-gray-100"
          >
            <IoClose />
          </span>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mt-3 sm:mt-0">
              Needs more project?
            </h1>
            <h2 className="text-gray-600 text-sm py-2">
              The Starter plan only comes with 1 project, but getting more is
              easy.
            </h2>
            <div className="flex h-full justify-center flex-col sm:flex-row  w-full rounded-xl border border-gray-200 overflow-hidden">
              <div className="w-full p-6 border-r border-gray-200">
                <div className="flex items-center gap-3 ">
                  <h1 className="text-xl font-semibold ">Starter</h1>
                  <span className="text-[10px] border text-gray-600 border-gray-200 p-0.5 rounded bg-gray-100">
                    Current plan
                  </span>
                </div>

                <h2 className="text-sm text-gray-600 py-1">
                  Best for anyone who wants to sample Figma.
                </h2>

                <p className="text-sm pt-14 pb-2 border-b border-b-gray-300 text-gray-600">
                  Free, but limited feature
                </p>
                <div>
                  <ul className="text-sm my-4 text-gray-600">
                    <li className="flex items-center gap-2 py-1">
                      <span>
                        <MdDone />
                      </span>
                      1 project
                    </li>
                    <li className="flex items-center gap-2 py-1">
                      <span>
                        <MdDone />
                      </span>
                      3 files to work in
                    </li>
                    <li className="flex items-center gap-2 py-1">
                      <span>
                        <MdDone />
                      </span>
                      3 pages per Figma design file
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full p-6  border-gray-200">
                <h1 className="text-xl font-semibold">Professional</h1>
                <p className="text-gray-600 text-sm py-2">
                  Best for small teams to create and colaborate
                </p>
                <div>
                  <ul className="text-sm py-4 text-gray-600 w-full border-b border-b-gray-300">
                    <li className="flex items-center justify-between gap-2 py-1">
                      <span className="flex justify-center items-center gap-1">
                        <FcBiohazard className="text-lg" />
                        Full seat
                      </span>

                      <span>$16/mo</span>
                    </li>
                    <li className="flex items-center justify-between gap-2 py-1">
                      <span className="flex justify-center items-center gap-1">
                        <PiSpinner className="text-lg text-blue-600" />
                        Dev seat
                      </span>
                      <span>$12/mo</span>
                    </li>
                    <li className="flex items-center justify-between gap-2 py-1">
                      <span className="flex justify-center items-center gap-1">
                        <SiGooglecolab className="text-lg text-purple-500" />
                        Collab seat
                      </span>
                      <span>$3/mo</span>
                    </li>
                  </ul>

                  <div>
                    <ul className="text-sm mt-4 text-gray-600">
                      <li className="flex items-center gap-2 py-1">
                        <span>
                          <MdDone />
                        </span>
                        Unlimited project
                      </li>
                      <li className="flex items-center gap-2 py-1">
                        <span>
                          <MdDone />
                        </span>
                        Unlimited files
                      </li>
                      <li className="flex items-center gap-2 py-1">
                        <span>
                          <MdDone />
                        </span>
                        Unlimited pages in Figma design file
                      </li>
                    </ul>

                    <Link
                      href={"/"}
                      className="flex items-center gap-2 py-1 text-blue-500 text-sm px-5"
                    >
                      See all features{" "}
                      <MdOutlineArrowRightAlt className="text-xl" />
                    </Link>

                    <button className="text-sm py-1 w-full my-3 bg-blue-500 text-white rounded-sm">
                      Upgrade to Professional
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Link invite

  if (isInviteLink) {
    return (
      <div className="w-full p-4 bg-black/60 fixed top-0 left-0 flex justify-center items-center min-h-screen animate__animated animate__fadeIn">
        <div className="max-w-lg w-full bg-white rounded-xl h-auto py-2  relative">
          <div className=" w-full py-3 border-b border-gray-300">
            <p className="text-sm text-gray-600 px-4">
              Invite other to Pankaj Kumar's team
            </p>
            <span
              onClick={() => setInviteLink(false)}
              className="absolute right-3 top-3 text-xl text-black hover:bg-gray-100"
            >
              <IoClose />
            </span>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Invite link</span>
              <span className="hover:bg-gray-100 p-0.5">
                <VscSettings />
              </span>
            </div>

            <div className="flex justify-between items-center flex-col sm:flex-row gap-3 w-full">
              <div className="py-2 text-sm px-3 w-full bg-gray-100 my-2 flex justify-between items-center rounded-sm">
                {url}
                <span className=" text-sm p-1 bg-white rounded-sm flex justify-center items-center">
                  can edit
                  <MdArrowDropDown className="text-lg" />
                </span>
              </div>
              <button
                onClick={handleCopyLink}
                className="sm:w-[100px] w-full text-center  text-sm p-3 bg-blue-500 text-white rounded-sm"
              >
                Copy link
              </button>
            </div>

            {/* invite via emai */}
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-gray-600">Invite by email</span>
              <span className="hover:bg-gray-100 p-0.5">
                <VscSettings />
              </span>
            </div>

            <div className="flex justify-between items-center flex-col sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Emails, comma seperate"
                className="py-2 outline-blue-400  text-sm bg-gray-100 px-2 w-full rounded-sm"
              />
              <button className="sm:w-[100px] w-full text-center  text-sm p-3 bg-gray-300 text-white rounded-sm">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-8 py-6 animate__animated animate__fadeIn">
      {/* Top section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        {/* Left - Team Name */}
        <div className="flex items-center gap-3">
          <div className="bg-pink-500 text-white rounded-md p-2 text-xl">
            <FaUserFriends />
          </div>
          <h1 className="text-xl sm:text-2xl  text-gray-800">
            Pankaj Kumar's team
          </h1>
          <span className="text-gray-500 text-sm cursor-pointer">▼</span>
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button
            onClick={() => setProduct(true)}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm  px-4 py-2 rounded-md"
          >
            <IoIosAdd className="text-lg" />
            Project
          </button>
          <button
            onClick={() => setInviteLink(true)}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm  px-4 py-2 rounded-md"
          >
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
              src="/img3.png"
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
          <div onClick={()=> setProduct(true)} className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mb-3">
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
