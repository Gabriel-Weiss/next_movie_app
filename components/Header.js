import Image from "next/image";
import React from "react";
import FilterMenu from "./FilterMenu";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <>
      <header className="flex flex-row flex-wrap p-2 justify-between">
        <HeaderMenu />
        <Image
          className="object-contain"
          src="/buy-now-img.png"
          alt="Buy Now Button Grey - Shop Now Button Icon, "
          width={200}
          height={100}
        />
      </header>
      <FilterMenu />
    </>
  );
}

export default Header;
