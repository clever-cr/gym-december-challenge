import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
const MeetUp = () => {
  return (
    <div>
      <Image width={784} height={20} alt="img" src="/images/meet.webp"></Image>
      <div className="bg-lightblue text-white">
        <h1>What drives us: President Thomas F. Hofmann about TUM</h1>
        <p>
          Research and innovations for society, innovative teaching and
          continuing education: This is how we shape a sustainable future,
          relying on the intelligence of the entire university and working
          closely with global partners to do so.
        </p>
        <Button
          style={"bg-white border border-lightblue text-lightblue"}
          text={"Read More"}
        />
      </div>
    </div>
  );
};

export default MeetUp;
