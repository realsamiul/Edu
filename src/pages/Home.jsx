// src/pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero';
import Work from '../Components/Work';
import Playreel from '../Components/Playreel';
import Images from '../Components/Images';
import Spread from '../Spread';
import FeaturedProjects from '../Components/FeaturedProjects'; // Import the new component

const Home = () => {
  return (
    <div>
      <Hero />
      <Work />
      <FeaturedProjects /> {/* Add the new component here */}
      <Playreel />
      <Images />
      <Spread />
    </div>
  );
};

export default Home;
