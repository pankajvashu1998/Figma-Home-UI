// app/layout.js

import "./globals.css";
import 'animate.css';

import MainContent from "@/components/MainContent";

export const metadata = {
  title: "Figma Dashboard",
  description: "Figma Dashboard Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" text-[#1A1A1A] font-sans relative">
        <MainContent />
        <main>{children}</main>
      </body>
    </html>
  );
}
