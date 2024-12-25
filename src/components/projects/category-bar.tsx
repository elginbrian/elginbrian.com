import React, { useState } from "react";

const categories = ["All", "Mobile", "Web", "FE", "BE"];

const CategoryBar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className={`z-50 fixed top-16 left-6 md:top-8 md:left-1/2 md:-translate-x-1/2 flex items-center space-x-4 transition-all duration-300`}>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full border border-solid ${
              activeCategory === category ? "bg-white text-black border-transparent" : "bg-[rgb(0,0,0,0.5)] text-gray-300 border-white hover:bg-gray-700 hover:text-white hover:border-transparent"
            } transition-colors flex items-center justify-center text-sm sm:text-base h-8 sm:h-10 px-4`}
            onClick={() => handleCategoryClick(category)}
            aria-label={`${category} Category`}
          >
            <span className="text-xs sm:text-sm">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
