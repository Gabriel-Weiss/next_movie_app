import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="">
      <h1 className="text-3xl font-extralight">Hello world!</h1>
      <Image
        className="object-contain"
        src="/buy-now-img.png"
        alt="Buy Now Button Grey - Shop Now Button Icon, "
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
