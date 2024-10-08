import React from "react";

const Categories = () => {
  const categories = [
    "All",
    "Recently Upload",
    "React routers",
    "Computer programming",
    "NextJs",
    "SEO",
    "ICC",
    "News",
    "Elon Musk",
    "History",
    "Comedy",
    "Live",
    "Dramedy",
    "Dubbing",
    "New to you",
    "Pop Music",
    "Football",
  ];
  return (
    <div className="flex overflow-x-scroll scrollbar-hide px-4">
      <div className="flex space-x-4">
        {categories.map((category, i) => {
          return (
            <div
              key={i}
              className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-3 py-1 font-medium text-gray-700 mb-4 cursor-pointer whitespace-nowrap"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
