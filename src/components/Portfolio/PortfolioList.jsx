import React from "react";
import img1 from "../../assets/portfolio/8.png";
import img2 from "../../assets/portfolio/9.png";
import img3 from "../../assets/portfolio/6.png";
import img4 from "../../assets/portfolio/11.png";
import img5 from "../../assets/portfolio/2.png";
import img6 from "../../assets/portfolio/7.png";
import img7 from "../../assets/portfolio/1.png";
import img8 from "../../assets/portfolio/4.png";
import img9 from "../../assets/portfolio/5.png";

const projects = [
  {
    image: img1,
    title: "Hamensmith",
    link: "https://hamensmith.com",
  },
  {
    image: img2,
    title: "Innosap",
    link: "https://innosap.com",
  },
  {
    image: img3,
    title: "J Beauty Shop",
    link: "https://jbeautyshop.com",
  },
  {
    image: img4,
    title: "Projectors Malaysia",
    link: "https://projectorsmalaysia.com",
  },
  {
    image: img5,
    title: "Lomo Crewz",
    link: "https://lomocrewz.com",
  },
  {
    image: img6,
    title: "BioEats",
    link: "https://bioeats.in",
  },
  {
    image: img7,
    title: "JVR Sage",
    link: "https://jvr-sage.vercel.app",
  },
  {
    image: img8,
    title: "Seshan Homes",
    link: "https://seshanhomes.in",
  },
   {
    image: img9,
    title: "Seyon Softs",
    link: "https://seyonsofts.com",
  },
];

const PortfolioList = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 relative z-[100px]">
      <div className="text-center mb-12">
        <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
          A showcase of our featured work across industries and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => {
          const isCenterCol = index % 3 === 1;

          return (
            <div
              key={index}
              className={`group rounded-2xl my-10 overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 bg-white ${
                isCenterCol ? "lg:translate-y-[50px]" : ""
              }`}
            >
              <div className="overflow-hidden h-[220px] cursor-pointer">
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              <div className="p-5 my-10">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#650E45] transition-colors duration-300">
                  {proj.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioList;
