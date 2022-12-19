import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import Wrapper from "../components/sections/Wrapper";
import News from "../components/sections/News";
import React from "react";

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <News />
    </div>
  );
};

export default index;
