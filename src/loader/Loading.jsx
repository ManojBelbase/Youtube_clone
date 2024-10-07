import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Create 10 shimmer boxes */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          {/* Shimmer for Video Thumbnail */}
          <div className="w-full h-44 bg-gray-200 rounded-lg animate-pulse" />

          {/* Shimmer for Avatar and Text */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
            <div className="flex flex-col">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
