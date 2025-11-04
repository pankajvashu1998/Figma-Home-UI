// components/MainContent.js

import FileGrid from "./FileGride";
import TopBar from "./Topbar";


export default function MainContent() {
  return (
    <div className="h-full">
      <div className="p-8">
        <FileGrid />
      </div>
    </div>
  );
}