import React from "react";
import Button from "../ui/Button";

const News = () => {
  return (
    <div className="py-[48px] px-[60px] flex flex-col gap-y-6">
      <h2 className="text-[32px] font-bold ">News from TUM</h2>
      <p className="text-xl text-semibold">
        News, research results and events: everything that enthuses people at
        our university.
      </p>
      <Button text="SEE ALL" />
    </div>
  );
};

export default News;
