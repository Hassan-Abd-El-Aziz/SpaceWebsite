import React from "react";
import bgVideo from "./assets/earth.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Banner3 from "./components/Banner/Banner3";
import Banner4 from "./components/Banner/Banner4";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out" });
  }, []);
  return (
    <div>
      <div className="h-[100vh] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[100%] w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      {/* Services card section */}

      <Services />

      <Banner />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
