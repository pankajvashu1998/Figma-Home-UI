import FileCard from "./FileCard";

export default function FileGrid() {
  const files = [
    {
      id: 1,
      title: "Untitled",
      description: "Edited 1 hour ago",
      type: "file",
      image:
        "/img1.jpg",
    },
    {
      id: 2,
      title: "Your Name Here",
      description: "Edited 2 days ago",
      type: "file",
      image:
        "/img2.jpg",
    },
    {
      id: 3,
      title: "Personal Portfolio Template",
      description: "Edited 10 days ago",
      type: "file",
      image:
        "/img3.png",
    },
    {
      id: 4,
      title: "Design Tags",
      description: "Fig Jam Stides Buzz Site Make",
      type: "tags",
      image:
        "/img4.png",
    },
    {
      id: 5,
      title: "Build your own team library",
      description: "Team Library Edited 10 days ago",
      type: "library",
      image:
        "/img5.png",
    },

    {
      id: 6,
      title: "Create your personal design hub",
      description: "Design Library • Updated 2 days ago",
      type: "library",
      image:
        "/img6.png",
    },

    {
      id: 7,
      title: "Manage your shared project assets",
      description: "Project Assets • Edited just now",
      type: "library",
      image:
        "/img7.jpg",
    },

    {
      id: 8,
      title: "Collaborate on your component library",
      description: "Component Hub • Updated 5 hours ago",
      type: "library",
      image:
        "/img8.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}
