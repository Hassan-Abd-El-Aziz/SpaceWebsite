import React from "react";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-99 bg-black/10 backdrop-blur-sm
    py-4 sm:py-4 px-4"
    >
      <div className="container my-0 mx-auto">
        <div className="flex  items-center justify-between">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="w-15 " />
            <span>ZIZO</span>
          </div>
          <div className="text-white hidden md:block">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <li
                className="text-white hover:text-green-400 hover:pb-3
               transition-all duration-400 ease-in-out"
              >
                <a href="#hero">Home</a>
              </li>
              <li
                className="text-white hover:text-green-400 hover:pb-3
               transition-all duration-400 ease-in-out"
              >
                <a href="#services">Services</a>
              </li>
              <li
                className="text-white hover:text-green-400 hover:pb-3
               transition-all duration-400 ease-in-out"
              >
                <a href="#mission">Mission</a>
              </li>
              <li
                className="text-white hover:text-green-400 hover:pb-3
               transition-all duration-400 ease-in-out"
              >
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => alert("مساء العجوه")}
              className="text-white border-2
             border-white px-3 py-1 rounded-md 
             hover:bg-green-300 transition-all
              duration-400 ease-in-out hover:text-black hover:scale-110"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
