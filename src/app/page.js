// app/page.js

import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="">
        <MainContent />
      </div>
    </div>
  );
}
