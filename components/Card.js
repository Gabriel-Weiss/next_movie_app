import Image from "next/image";
import React from "react";

function Card({ item }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={`${BASE_URL}${item.backdrop_path || item.poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="p-2 transition-all duration-100 ease-in-out group-hover:font-bold">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="flex items-center text-2xl text-white">
          {item.title || item.original_name}&nbsp;
          <Image src={"/thumbs-up-32.png"} width={32} height={32} />
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          <Image src={"/google-calendar-32.png"} width={32} height={32} />
          {item.release_date || item.first_air_date}
          <Image src={"/rating-32.png"} width={32} height={32} />
          {item.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Card;
