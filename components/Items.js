import React from "react";
import Card from "@/components/Card";

function Items({ data }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;
