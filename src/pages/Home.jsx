import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Work from "../Components/Work";
import Playreel from "../Components/Playreel";
import Images from "../Components/Images";
import Spread from "../Spread";
import Story from "../Components/Story";

const Home = () => {
  return (
    <div className="bg-zinc-900 text-white">
      <Navbar />
      <Hero />
      <Work />
      <Playreel />
      <Images />
      <Spread />
      <Story />
    </div>
  );
};

export default Home;
