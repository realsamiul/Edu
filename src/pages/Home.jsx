// src/pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero';
import Work from '../Components/Work';
import Playreel from '../Components/Playreel';
import Images from '../Components/Images';
import Spread from '../Spread';
import FeaturedProjects from '../Components/FeaturedProjects';
import SEO from '../Components/SEO'; // Import SEO
import { homeSEO } from '../data'; // Import SEO data

const Home = () => {
  return (
    <div>
      <SEO title={homeSEO.title} description={homeSEO.description} />
      <Hero />
      <Work />
      <FeaturedProjects />
      <Playreel />
      <Images />
      <Spread />
    </div>
  );
};

export default Home;
