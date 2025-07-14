import React from "react";
import bg from "../../assets/portfolio/10.jpg";
import { Link } from "react-router-dom";

const CreativeCTA = () => {
  return (
    <section className=" sticky lg:top-20 flex  justify-center items-center py-20 bg-white px-3">
      <div
        className="relative w-full max-w-[1000px] h-[300px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top-right Ball */}
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[300px] max-[767px]:w-[120px] max-[767px]:h-[150px] bg-gray-200 rounded-full z-0"></div>

        {/* Bottom-left Ball */}
        <div className="absolute -bottom-10 md:bottom-[-150px] left-[-150px] w-[700px] h-[370px] max-[767px]:w-[490px] max-[767px]:h-[380px] bg-gray-200 rounded-full z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-10 md:justify-between items-center h-full px-10 md:px-16 md:mt-10 rounded-3xl">
          <div className="text-left max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Like our creative works?
            </h2>
            <p className="text-[#374151] mt-3 text-base md:text-lg">
              Let's collaborate on your next big idea.
            </p>
            <p className="text-[#374151] mt-1 text-base md:text-lg">
              From design to deployment, we bring it to life.
            </p>
          </div>

          <div className=" md:mt-[-250px]">
            <Link to={"/contact"}>
            <button className="bg-[#111827] hover:bg-[#1f2937] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCTA;
