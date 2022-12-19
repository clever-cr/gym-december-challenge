import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import Wrapper from "../components/sections/Wrapper";
import News from "../components/sections/News";
import Discover from "../components/sections/Discover";
import React from "react";

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <News />
      <Discover />
    </div>
  );
};

export default index;
