import React from "react";



import heroDesktop from '../assets/images/image-hero-desktop.png';
import heroMobile from '../assets/images/image-hero-mobile.png';

import audiophile from '../assets/images/client-audiophile.svg';
import databiz from '../assets/images/client-databiz.svg';
import maker from '../assets/images/client-maker.svg';
import meet from '../assets/images/client-meet.svg';

const Hero = () => {
  return (
    <div className="block min-w-[375px] h-[80vh] my-20 text-center md:flex md:justify-center md:flex-row-reverse md:px-20 bg-Almost-White">
     
        <img src={heroMobile} alt="hero-mobile" className="md:hidden"/>
        <img src={heroDesktop} alt="hero-mobile" className="hidden md:block h-[500px] px-20"/>
     
      <div className="py-5 text-center md:text-left p-3 md:p-20">
        <h1 className="text-5xl md:text-6xl font-extrabold" >Make <span className="md:inline-block ">remote work</span></h1>
        <p className="text-[18px] text-Almost-Black py-7 text-center md:text-justify md:w-[350px]">Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.</p>
        <div className="mx-auto pb-5 md:pb-12">
          <button className="text-Almost-White bg-black p-3 px-5 border-Almost-Black rounded-2xl hover:bg-white hover:text-black hover:border"> Learn more</button>
        </div>
        <div className="flex justify-around md:justify-start md:gap-14 py-9">
          <img src={databiz} alt="databiz" className="h-3"/>
          <img src={audiophile} alt="audiophile" className="h-6" /> 
          <img src={meet} alt="meet"  className="h-3"/>
          <img src={maker} alt="maker" className="h-5" />
        </div>
      </div>

    </div>
  );
};

export default Hero;
