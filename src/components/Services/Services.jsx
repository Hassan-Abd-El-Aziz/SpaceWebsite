import React from "react";
import { FaReact } from "react-icons/fa";
import LogoSection from "../../components/LogoSec/LogoSection";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave.gif";
import TitleHeader from "../TitleHeader";
const ServicesDate = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for asronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300 ",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro explicabo impedit maxime illo. Minus, nobis!.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "300 ",
  },
  {
    title: "GPS",
    content: "800-1500km",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro explicabo impedit maxime illo. Minus, nobis!",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "300 ",
  },
];
const Services = () => {
  return (
    <div id="services" className="bg-black text-white relative z-50">
      <TitleHeader title="Our Services " sub="⭐ Services" />
      <div className="container my-2 mx-auto">
        <div className="min-h-[400px]">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative
            z-10"
          >
            {ServicesDate.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col justify-center gap-2
              items-center rounded-xl
               bg-sky-900/60 backdrop-blur-sm 
               text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            data-aos="fade-up"
            src={wave}
            alt=""
            className="h-[150px] w-full object-cover 
          mix-blend-screen-translate-y-24 relative z-0"
          />
        </div>
        <LogoSection />
      </div>
    </div>
  );
};

export default Services;
