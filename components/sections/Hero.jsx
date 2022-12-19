import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-dark absolute top-0 z-10 bottom-0 left-0 right-0"></div>
      <video src="/videos/tum.mp4" className="w-full"></video>

      <div className="px-[60px] pt-16 absolute z-20 top-0 right-0 left-0 bottom-0 max-w-[1400px] mx-auto">
        <div className=" text-white  flex-col space-y-6">
          <h1 className="text-5xl font-bold max-w-2xl">
            TUM. The Entrepreneurial University
          </h1>
          <p className="text-xl ">
            Innovation through talent, excellence and responsibility
          </p>
        </div>
        <button className="bg-lightblue p-2.5 absolute right-6 bottom-6">
          <Image
            width="24"
            height="24"
            alt="pause"
            src="/images/pause.svg"
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default Hero;
