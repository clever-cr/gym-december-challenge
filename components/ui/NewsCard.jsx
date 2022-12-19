import React from "react";
import Image from "next/image";
const NewsCard = ({ image, title, desc, headline, headdescr, date, time }) => {
  return (
    <div className=" w-full lg:w-[332px] flex flex-col gap-3 group text-darkblue">
      <div className="relative">
        <Image
          style={{ height: "auto" }}
          alt="image"
          src={image}
          className="relative z-10"
        ></Image>

        <p className="absolute bottom-0 left-0 z-20 py-[2px] px-2 bg-lightgray text-[13.3333333px] font-medium  group-hover:text-lightblue">
          {title}
        </p>
      </div>
      <div className="group-hover:text-lightblue">
        <p className="text-base font-bold">{desc}</p>
        <h3 className="text-xl font-bold">{headline}</h3>
      </div>

      <p className="text-sm group-hover:text-lightblue font-medium ">
        {headdescr}
      </p>
      <div className="flex font-medium text-[13.33333px] justify-between group-hover:text-lightblue ">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default NewsCard;
