// app/layout.js
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import TopBar from "@/components/Topbar";

export const metadata = {
  title: "Figma Dashboard",
  description: "Figma Dashboard Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5] text-[#1A1A1A] font-sans relative">
        {/* Sidebar - fixed on left */}
        <div className="fixed top-0 left-0 h-full w-[270px] border-r border-gray-200 bg-white z-40">
          <Sidebar />
        </div>

        {/* TopBar - fixed on top (beside sidebar) */}
        <div className="fixed top-0 left-[270px] right-0 h-[60px] border-b border-gray-200 bg-white z-30">
          <TopBar />
        </div>

        {/* Main Content */}
        <main className="ml-[270px] mt-[60px] p-6 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
