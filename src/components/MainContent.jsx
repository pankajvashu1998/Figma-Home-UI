// components/MainContent.js
"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import TopBottomNavbar from "./TopBottomNavbar";

export default function MainContent() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="flex justify-center w-full ">
      <Sidebar sideBar={sideBar} setSideBar = {setSideBar}/>

      <div className=" w-full md:ml-[280px]">
        <TopBar setSideBar={setSideBar} sideBar={sideBar} />
        <TopBottomNavbar />
      </div>
    </div>
  );
}
