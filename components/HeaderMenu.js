import Image from "next/image";
import React from "react";

function HeaderMenu() {
  return (
    <nav className="">
      <ul className="flex flex-wrap flex-row">
        <li className="group">
          <div className="flex flex-col cursor-pointer m-1 items-center">
            <p className="opacity-0 group-hover:opacity-100">Home</p>
            <Image
              className="group-hover:animate-ping"
              src="/icon-home-32.png"
              alt="Home menu icon"
              width={32}
              height={32}
            />
          </div>
        </li>
        <li className="group">
          <div className="flex flex-col cursor-pointer m-1 items-center">
            <p className="opacity-0 group-hover:opacity-100">Trending</p>
            <Image
              className="group-hover:animate-ping"
              src="/icon-topic-32.png"
              alt="Trending menu icon"
              width={32}
              height={32}
            />
          </div>
        </li>
        <li className="group">
          <div className="flex flex-col cursor-pointer m-1 items-center">
            <p className="opacity-0 group-hover:opacity-100">Verified</p>
            <Image
              className="group-hover:animate-ping"
              src="/icon-verified-32.png"
              alt="Verified menu icon"
              width={32}
              height={32}
            />
          </div>
        </li>
        <li className="group">
          <div className="flex flex-col cursor-pointer m-1 items-center">
            <p className="opacity-0 group-hover:opacity-100">Collections</p>
            <Image
              className="group-hover:animate-ping"
              src="/icon-box-32.png"
              alt="Collections menu icon"
              width={32}
              height={32}
            />
          </div>
        </li>
        <li className="group">
          <div className="flex flex-col cursor-pointer m-1 items-center">
            <p className="opacity-0 group-hover:opacity-100">Search</p>
            <Image
              className="group-hover:animate-ping"
              src="/icon-search-32.png"
              alt="Search menu icon"
              width={32}
              height={32}
            />
          </div>
        </li>
        <li className="group">
          <div className="flex flex-col cursor-pointer m-1 items-center">
            <p className="opacity-0 group-hover:opacity-100">Acount</p>
            <Image
              className="group-hover:animate-ping"
              src="/icon-user-32.png"
              alt="Account menu icon"
              width={32}
              height={32}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
