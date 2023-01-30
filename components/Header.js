import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import headerItems from "@/utils/headerItems";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map(({ title, icon }) => (
          <HeaderItem key={title} title={title} icon={icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="/retro-tv-94.png"
        alt="A icon image, src: https://icons8.com"
        width={60}
        height={60}
        priority
      />
    </header>
  );
}

export default Header;
