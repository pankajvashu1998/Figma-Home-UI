// components/FileCard.js
export default function FileCard({ file }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      {/* Thumbnail */}
      <div className={`h-40 ${file.color} flex items-center justify-center`}>
        {file.type === "tags" ? (
          <div className="text-white text-center">
            <div className="font-medium mb-2">{file.title}</div>
            <div className="text-sm opacity-90">{file.description}</div>
          </div>
        ) : (
          <div className="text-white font-medium">
            {file.title.split(' ')[0]}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-1 truncate">{file.title}</h3>
        {file.description && (
          <p className="text-xs text-gray-500 truncate">{file.description}</p>
        )}
      </div>
    </div>
  );
}