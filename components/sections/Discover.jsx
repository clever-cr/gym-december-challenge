import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import txt from "/public/images/txt.png";
const Discover = () => {
  return (
    <div className=" px-6 lg:px-[60px]  max-w-[1400px] mx-auto">
      <p className="text-base text-darkblue font-bold">Customized navigation</p>
      <h2 className="text-[32px] font-bold text-darkblue">
        Discover what TUM has to offer
      </h2>
      <div className="lg:relative flex flex-col lg:flex-row justify-between pt-12 gap-x-[56px] ">
        <div className="bg-yellow lg:bg-transparent">
          <div className="lg:max-w-[93px] lg:h-fit p-10 lg:px-0">
            <div className="lg:z-20 lg:pt-12 lg:relative lg:mt-[33px]  flex flex-col justify-between lg:w-[237px]  border-2 border-lightgray py-2 px-2 bg-white">
              <p className="text-sm text-darkblue">For:</p>
              <button className="text-base text-darkblue bg-lightgray py-3 px-5 text-left font-bold">
                Prospective Student
              </button>
              <button className="text-base  text-lightblue text-left font-bold hover:text-darkblue hover:bg-lightgray py-3 px-5">
                Founders
              </button>
              <button className="text-base  text-lightblue text-left font-bold hover:text-darkblue hover:bg-lightgray py-3 px-5">
                Employees
              </button>
              <button className="text-base  text-lightblue text-left font-bold hover:text-darkblue hover:bg-lightgray py-3 px-5 border-t-2 ">
                Show all
              </button>
            </div>
          </div>
        </div>

        <div className=" hidden lg:block max-w-[43rem] flex-1 ">
          <Image style={{ height: "auto" }} alt="img" src={txt}></Image>
        </div>

        <div className="flex-1 flex flex-col gap-y-6">
          <h3 className="text-[42px] font-bold text-darkblue  ">
            Prospective Students
          </h3>
          <p className="text-xl text-darkblue">
            Learn to bring ideas to life, discover new possibilities, work in
            teams and build networks.
          </p>
          <Button
            style={
              "bg-white text-lightblue border-lightblue border hover:border-darkblue hover:text-darkblue"
            }
            text={"Learn more"}
          />
        </div>
      </div>
      <div className="py-6">
        <div className="flex justify-between bg-lightgray py-6 px-6 text-base font-medium lg:text-2xl text-darkblue text-opacity-50">
          <p>Select degree program or enter keyword</p>
          <Image
            width={24}
            height={24}
            alt="dropdown"
            src="/images/expand.svg"
          ></Image>
        </div>
        <div className="flex justify-end text-lightblue hover:underline">
          <p>Degree programs</p>
          <Image
            width={24}
            height={24}
            src="/images/arrowf.svg"
            alt="arrow"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Discover;
