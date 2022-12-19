import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
const MeetUp = () => {
  return (
    <div className="relative">
      <Image
        width={784}
        height={20}
        alt="img"
        src="/images/meet.webp"
        className="relative"
      ></Image>
      <div className="bg-lightblue flex flex-col w-[688px] gap-y-5 px-10 py-10 absolute z-10 top-12 right-20 ">
        <h1 className="text-[28px] font-bold text-white ">
          What drives us: President Thomas F. Hofmann about TUM
        </h1>
        <p className="text-base text-white ">
          Research and innovations for society, innovative teaching and
          continuing education: This is how we shape a sustainable future,
          relying on the intelligence of the entire university and working
          closely with global partners to do so.
        </p>
        <Button
          style={
            "bg-white border border-lightblue text-lightblue hover:bg-darkblue hover:text-white"
          }
          text={"Read More"}
        />
      </div>
    </div>
  );
};

export default MeetUp;
