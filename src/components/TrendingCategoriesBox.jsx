import React from "react";

const trendingCategories = [
  {
    category: "Graphs",
    count: 100,
  },
  {
    category: "Stacks",
    count: 45,
  },
  {
    category: "Algorthims",
    count: 20,
  },
  {
    category: "Databases",
    count: 3,
  },
];

const TrendingCategoriesBox = () => {
  return (
    <div className="my-4">
      <h2 className="text-2xl">Trending Categories</h2>
      <div className="flex flex-row gap-4">
        {trendingCategories.map((category) => {
          return (
            <button
              className="bg-navbar rounded-full p-4 pb-3"
              key={category.category}>
              {category.category}
              <span className="bg-teal-500 rounded-full px-2 pt-1 ml-2">
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCategoriesBox;
