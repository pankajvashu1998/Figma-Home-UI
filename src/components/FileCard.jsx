export default function FileCard({ file }) {
  return (
    <div className="bg-white shadow-sm border-2 border-transparent hover:border-blue-400 rounded-xl overflow-hidden transition cursor-pointer duration-200 animate__animated animate__fadeIn">
      {/* Image */}
      <div className="h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        {file.image ? (
          <img
            src={file.image}
            alt={file.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-500 text-2xl font-semibold">
            {file.title.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1 truncate">{file.title}</h3>
        {file.description && (
          <p className="text-xs text-gray-500 truncate">{file.description}</p>
        )}
      </div>
    </div>
  );
}
