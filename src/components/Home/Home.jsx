import React from 'react';
import HeroSection from './HeroSection';
import BuildSection from './BuildSection';
import GetStartedSection from './GetStartedSection';

function Home() {
  return (
    <React.Fragment>
      <HeroSection/>
      <BuildSection/>
      <GetStartedSection/>
    </React.Fragment>
  )
}

export default Home
