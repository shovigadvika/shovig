import React from "react";
import imgBig from "../../assets/Home/about2.jpg";
import imgSmall from "../../assets/Home/about3.jpg";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] px-5 md:px-8 lg:px-24 xl:px-32 2xl:px-64 mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <h3
            className="text-base sm:text-4xl text-[#454545] mb-3 uppercase tracking-wide font-medium"
            data-aos="fade-up"
          >
            About Us
          </h3>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00a34d] leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Elevating Your Business Uniqueness
          </h2>

          <p
            className="text-gray-600 text-base sm:text-lg lg:text-xl leading-loose mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-[#00a34d] font-semibold">
              Shovig Business Solution
            </span>{" "}
            was recognized in 2022 by{" "}
            <span className="text-[#00a34d] font-semibold">Shobiga</span>,{" "}
            <span className="text-[#00a34d] font-semibold">aardent</span> and{" "}
            <span className="text-[#00a34d] font-semibold">Ambition</span>{" "}
            with a strong background in education and technology.
          </p>

          <p
            className="text-gray-600 text-base sm:text-lg lg:text-xl leading-loose"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            With a clear vision to support{" "}
            <span className="text-[#00a34d] font-semibold">businesses</span> and{" "}
            <span className="text-[#00a34d] font-semibold">startups</span>,{" "}
            <span className="text-[#00a34d] font-semibold">Shovig</span> was
            created to offer simple, effective, and result-oriented{" "}
            <span className="text-[#00a34d] font-semibold">IT solutions</span>.
          </p>

          <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-[#00a34d] text-white rounded-full text-sm font-medium hover:bg-[#008f43] transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 relative flex justify-center items-center w-full max-w-[500px] mx-auto">
          <img
            src={imgBig}
            alt="Main"
            className="w-[280px] sm:w-[360px] md:w-[400px] mx-auto object-cover rounded-xl shadow-lg relative z-10"
            data-aos="fade-left"
            data-aos-delay="200"
          />
          <img
            src={imgSmall}
            alt="Overlay Bottom"
            className="hidden sm:block absolute -bottom-8 -left-8 w-[180px] sm:w-[220px] md:w-[200px] lg:w-[300px] h-auto object-cover rounded-xl border-4 border-white shadow-md z-20"
            data-aos="fade-left"
            data-aos-delay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
