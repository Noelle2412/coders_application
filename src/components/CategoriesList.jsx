import React from "react";

const categories = ["Data structure", "Graphs", "Databases", "Arrays"];

const CategoriesList = () => {
  return (
    <div className="flex flex-row gap-2">
      <button
        className="bg-navbar p-3 rounded-2xl"
        key="All"
        onClick={() => {}}>
        All
      </button>
      {categories.map((category) => (
        <button className="bg-navbar p-3 rounded-2xl" key={category}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesList;
