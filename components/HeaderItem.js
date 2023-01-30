import Image from "next/image";
import React from "react";

function HeaderItem({ title, icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
      <p className="tracking-widest opacity-0 text-purple-400 font-bold group-hover:opacity-100">
        {title}
      </p>
      <Image
        className="group-hover:animate-ping"
        src={icon}
        alt={`${title} menu icon`}
        width={32}
        height={32}
      />
    </div>
  );
}

export default HeaderItem;
