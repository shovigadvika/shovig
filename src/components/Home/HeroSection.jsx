import React from "react";
import heroImg from "../../assets/Home/hero.png";
import CountUp from "react-countup";
import { FaUser } from "react-icons/fa";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] px-5 md:px-8 lg:px-24 xl:px-32 2xl:px-64 mx-auto flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="flex-1 text-center md:text-left space-y-4">
          <BoxReveal duration={0.4}>
            <p className="text-sm md:text-base text-gray-500 tracking-wide uppercase">
              Creative Thinking
            </p>
          </BoxReveal>

          <div className="space-y-2">
            <BoxReveal duration={0.5}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1e1e1e]">
                From clicks to
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.7}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1e1e1e]">
                clients <span className="text-[#00a34d]">Shovig</span>
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.9}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#00a34d]">
                makes it happen.
              </h1>
            </BoxReveal>
          </div>

          <BoxReveal duration={1.2}>
            <p className="text-gray-600 text-base sm:text-lg text-left leading-relaxed max-w-xl mx-auto md:mx-0">
              Imagine a solution that understands your goals, simplifies your
              path, and helps your business grow faster, smarter, and stronger.
              Curious how we make it happen? Let’s create your success story.
            </p>
          </BoxReveal>

          <BoxReveal duration={1.4}>
            <Link to="/contact">
              <button className="bg-[#00a34d] text-white px-6 py-3 rounded-full hover:bg-[#008e42] transition-all duration-300 text-sm sm:text-base mt-2">
                Enquiry Now
              </button>
            </Link>
          </BoxReveal>
        </div>

        <div
          className="flex-1 relative w-full flex justify-center"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animated-blob w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] bg-[#DFEDF3]" />

          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-[400px] mx-auto relative z-10"
          />
          <div className="absolute z-20 w-full flex flex-col gap-6 px-4 py-6">
            <div className="flex justify-start">
              <div className="bg-[#e6f5ed] px-8 py-5 rounded-xl shadow-md text-[#00a34d] text-xl lg:text-3xl italic font-extrabold tracking-wide animate-floatLeft">
                THINK
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#e6f5ed] px-8 py-5 rounded-xl shadow-md text-[#00a34d] text-xl lg:text-3xl italic font-extrabold tracking-wide animate-floatLeft">
                BUILD
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-[#e6f5ed] px-8 py-5 rounded-xl shadow-md text-[#00a34d] text-xl lg:text-3xl italic font-extrabold tracking-wide animate-floatLeft">
                EVOLVE
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-6 left-1/2 sm:left-auto sm:bottom-6 sm:right-12 -translate-x-1/2 sm:translate-x-0 bg-[#e6f5ed] px-7 py-5 rounded-xl shadow-md flex items-center gap-3 w-max z-20 animate-floatLeft"
            data-aos="fade-left"
            data-aos-delay="1500"
          >
            <div className="bg-[#00a34d] text-white p-2 rounded-full text-xl">
              <FaUser />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00a34d]">
                <CountUp end={150} duration={10} />+
              </h3>
              <p className="text-sm text-gray-600 font-medium">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
