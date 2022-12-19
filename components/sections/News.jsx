import React from "react";
import Button from "../ui/Button";
import NewsCard from "../ui/NewsCard";
import vr from "/public/images/vr.jpg";

const News = () => {
  return (
    <div className="py-[48px] lg:px-[60px] px-6  max-w-[1400px] mx-auto">
      <div className=" flex gap-y-6 flex-col  lg:flex-row">
        <div className="flex flex-col gap-y-6">
          <h2 className="text-[32px] font-bold ">News from TUM</h2>
          <p className="text-xl text-semibold">
            News, research results and events: everything that enthuses people
            at our university.
          </p>
          <Button style={"bg-lightblue"} text="SEE ALL" />
        </div>
        <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
          <NewsCard
            image={vr}
            title={"TUM in ranking"}
            desc={"WirtschaftsWoche rankings"}
            headline={"Germany's strongest university in business sciences"}
            headdescr={
              "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            }
            date={"12/16/2022"}
            time={"reading time 2 min"}
          />
          <NewsCard
            image={vr}
            title={"TUM in ranking"}
            desc={"WirtschaftsWoche rankings"}
            headline={"Germany's strongest university in business sciences"}
            headdescr={
              "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            }
            date={"12/16/2022"}
            time={"newsteaser__readingtimes"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6 pt-[51px] lg:ml-[488px]">
        <NewsCard
          image={vr}
          title={"TUM in ranking"}
          desc={"WirtschaftsWoche rankings"}
          headline={"Germany's strongest university in business sciences"}
          headdescr={
            "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
          }
          date={"12/16/2022"}
          time={"newsteaser__readingtimes"}
        />
        <NewsCard
          image={vr}
          title={"TUM in ranking"}
          desc={"WirtschaftsWoche rankings"}
          headline={"Germany's strongest university in business sciences"}
          headdescr={
            "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
          }
          date={"12/16/2022"}
          time={"newsteaser__readingtimes"}
        />
      </div>
    </div>
  );
};

export default News;
