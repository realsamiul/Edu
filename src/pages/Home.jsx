// src/pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero';
import Work from '../Components/Work';
import Playreel from '../Components/Playreel';
import Images from '../Components/Images';
import Spread from '../Spread';

const Home = () => {
  return (
    <div>
      <Hero />
      <Work />
      <Playreel />
      <Images />
      <Spread />
    </div>
  );
};

export default Home;
