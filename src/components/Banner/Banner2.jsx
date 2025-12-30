import React from "react";
import sateliteImg from "../../assets/satalite2.jpg";

const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container mx-auto my-0">
        <div
          className="grid grid-cols-1 
        sm:grid-cols-2 gap-4 items-center"
        >
          <div
            className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2
           border-l-green-800 border-b-green-800"
          >
            <p className="text-green-600 uppercase">Our Mission</p>
            <h1 className="uppercase text-5xl">Repidcast</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              esse atque adipisci libero odit similique et cum animi iste, sit
              perspiciatis id omnis molestiae fugiat labore, porro ab nesciunt,
              sequi corrupti tempore vel vero obcaecati! Cumque incidunt nulla
              aperiam debitis numquam reprehenderit excepturi cum similique, est
              corporis. Consequuntur architecto impedit pariatur? Expedita
              incidunt ipsa, quo amet doloremque ullam, corporis illo natus
              delectus vero asperiores reiciendis illum cum. Repellendus a
              quaerat, eum culpa adipisci reiciendis delectus sequi
              necessitatibus repudiandae ex! Enim.
            </p>
            <button className="primary-button">Learn More</button>
          </div>
          <div>
            <img src={sateliteImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
