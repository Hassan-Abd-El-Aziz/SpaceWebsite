import React from "react";
import sateliteImg from "../../assets/satalite1.jpg";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="container mx-auto my-0">
        <div
          className="grid grid-cols-1 
        sm:grid-cols-2 gap-4 items-center"
        >
          <div>
            <img src={sateliteImg} alt="" />
          </div>
          <div
            className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2
           border-r-green-800 border-b-green-800"
          >
            <p className="text-green-600 uppercase">Our Mission</p>
            <h1 className="uppercase text-5xl">Repidcast</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi delectus saepe dignissimos corporis veniam fugiat
              molestiae dolore voluptatem reiciendis, accusantium vel laboriosam
              a expedita provident, maxime magnam optio placeat rem. Explicabo
              illum nulla dolore doloribus laboriosam, error, quis ratione,
              libero in illo porro. Assumenda eveniet doloribus delectus
              voluptatibus porro quaerat.
            </p>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
