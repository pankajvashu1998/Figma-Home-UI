"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Team from "@/components/Team";
import FileGrid from "@/components/FileGride";
import Resources from "@/components/Resoueces";
import TrashPage from "@/components/Trash";
import Community from "@/components/Community";
const page = () => {
  const path = usePathname();
  return (
    <div className="md:ml-[280px] ml-0">
      {path === "/team" && <Team />}
      {path === "/draft" && <FileGrid />}
      {path === "/resource" && <Resources />}
      {path === "/trash" && <TrashPage />}
      {path === "/community" && <Community />}
    </div>
  );
};

export default page;
