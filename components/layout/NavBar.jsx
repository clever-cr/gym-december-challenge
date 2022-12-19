import React from "react";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className=" bg-darkblue px-6 sticky top-0 z-30 w-full">
      <div className="flex justify-between  text-white  items-center max-w-wrap mx-auto ">
        <div className="flex gap-3 pt-6 pb-4">
          <Image
            width="33"
            height="33"
            alt="logo"
            src="/images/bar.svg"
          ></Image>
          <Image
            width="80"
            height="42"
            alt="logo"
            src="/images/logo.svg"
          ></Image>
          <span className="text-xs">
            Techcnicalc
            <br />
            University <br /> of Munich
          </span>
        </div>
        <div className="flex gap-[52px] items-center">
          <div className="hidden lg:flex gap-6 text-sm font-bold">
            <Link
              href="/page1"
              className="border-b-4 pb-6  pt-8 mb-0.5  border-darkblue hover:border-white"
            >
              NEWS AND EVENTS
            </Link>

            <Link
              href="/page1"
              className="border-b-4 pb-6  pt-8 mb-0.5  border-darkblue hover:border-white"
            >
              STUDIES
            </Link>
            <Link
              href="/page1"
              className="border-b-4 pb-6  pt-8 mb-0.5  border-darkblue hover:border-white"
            >
              LIFELONG LEARNING
            </Link>
            <Link
              href="/page1"
              className="border-b-4 pb-6  pt-8 mb-0.5  border-darkblue hover:border-white"
            >
              REASEARCH
            </Link>
            <Link
              href="/page1"
              className="border-b-4 pb-6  pt-8 mb-0.5  border-darkblue hover:border-white"
            >
              INNOVATION
            </Link>
            <Link
              href="/page1"
              className="border-b-4 pb-6  pt-8 mb-0.5  border-darkblue hover:border-white"
            >
              COMMUNITY
            </Link>
            <Link
              href="/page1"
              className="border-b-4 pb-6  pt-8 mb-0.5  border-darkblue hover:border-white"
            >
              ABOUT TUM
            </Link>
          </div>
          <div className="flex gap-2 ">
            <Link href="#" className=" opacity-50 hover:opacity-100">
              DE
            </Link>
            <p className="border-r-2 border-white"></p>
            <p>EN</p>
            <Image
              width="24"
              height="24"
              src="/images/search.svg"
              alt="search"
            ></Image>
            <Image
              width="24"
              height="24"
              src="/images/menu.svg"
              alt="menu"
              className="block lg:hidden"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
