import React from "react";
import MountainPng from "../../assets/moon surface.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              laboriosam libero sequi minus, ullam soluta!
            </p>
            <button className="primary-button">Learn More</button>
          </div>
          <div></div>
        </div>
      </div>
      {/* surgace section */}
      <img
        src={MountainPng}
        alt=""
        className="absolute left-[-80px] right-0 
        bottom-[-80px] w-full brightness-50 z-10"
      />
      {/* bottom gradient section */}
      <div
        className="absolute bottom-0 w-full z-30 bg-gradient-to-b  
      from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]"
      ></div>
    </div>
  );
};

export default Hero;
