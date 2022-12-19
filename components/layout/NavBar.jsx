import React from "react";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="flex gap-[332px] items-center bg-darkblue text-white ">
      <div className="flex gap-3">
        <Image width="33" height="33" alt="logo" src="/images/bar.svg"></Image>
        <Image width="80" height="42" alt="logo" src="/images/logo.svg"></Image>
        <span className="text-xs">
          Techcnicalc
          <br />
          University <br /> of Munich
        </span>
      </div>
      <div className="flex gap-[52px]">
        <div className=" flex gap-6 text-sm font-bold">
          <Link href="#" className="hover:border-b ">
            NEWS AND EVENTS
          </Link>
          <Link href="#">STUDIES</Link>
          <Link href="#">LIFELONG LEARNING</Link>
          <Link href="#">REASEARCH</Link>
          <Link href="#">INNOVATION</Link>
          <Link href="#">COMMUNITY</Link>
          <Link href="#">ABOUTTUM</Link>
        </div>
        <div className="flex gap-2 ">
          <Link href="#">DE</Link>
          <p>EN</p>
          <Image
            width="24"
            height="24"
            src="/images/search.svg"
            alt="search"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
