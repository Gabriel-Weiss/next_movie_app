import React from "react";
import categoryItems from "@/utils/categoryItems";
import { useRouter } from "next/router";

function Categories() {
  const router = useRouter();

  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {categoryItems.map(({ title, url }) => (
          <h2
            key={title}
            onClick={() => router.push(`/?genre=${title}`)}
            className="cursor-pointer text-purple-300 transition duration-100 transform hover:scale-125 hover:text-purple-500 active:text-purple-700"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Categories;
