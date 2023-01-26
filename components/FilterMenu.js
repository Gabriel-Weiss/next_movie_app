import React, { useEffect, useState } from "react";

function FilterMenu() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, [categories]);

  return (
    <div className="flex place-content-center px-5 sm:px-10 space-x-10 whitespace-nowrap overflow-scroll scrollbar-hide text-2xl">
      {categories.map((category) => (
        <h2
          key={category}
          className="text-lg font-bold text-white transition duration-100 transform hover:scale-100 hover:text-purple-200 active:text-purple-500 "
        >
          {category}
        </h2>
      ))}
    </div>
  );
}

export default FilterMenu;
