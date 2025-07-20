import React from "react";
import whatWeDoImg from "../../assets/Home/why-choose.jpg";

const WhatWeDo = () => {
  return (
    <section className="relative z-[10] max-w-[1940px] m-auto bg-white px-4 sm:px-10 md:px-16 lg:px-[64px] py-10">
      <div className="w-full flex flex-col lg:flex-row justify-center gap-6 px-4 py-10">
        <div
          className="flex-1 bg-[#e6f5ed] px-10 py-10 rounded-2xl shadow-md flex items-center justify-center text-[#00a34d] text-3xl lg:text-5xl italic font-extrabold tracking-wider animate-floatUp"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          THINK
        </div>

        <div
          className="flex-1 bg-[#e6f5ed] px-10 py-10 rounded-2xl shadow-md flex items-center justify-center text-[#00a34d] text-3xl lg:text-5xl italic font-extrabold tracking-wider animate-floatUp"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          BUILD
        </div>

        <div
          className="flex-1 bg-[#e6f5ed] px-10 py-10 rounded-2xl shadow-md flex items-center justify-center text-[#00a34d] text-3xl lg:text-5xl italic font-extrabold tracking-wider animate-floatUp"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          EVOLVE
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <img
            src={whatWeDoImg}
            alt="What We Do"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#00a34d] font-semibold uppercase text-sm tracking-wide mb-2">
            About Shovig Business Solution
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Delivering Impact-Driven Tech Solutions
          </h1>

          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              <span className="text-[#00a34d] font-semibold">
                Shovig Business Solution
              </span>{" "}
              was recognized in{" "}
              <span className="text-[#00a34d] font-semibold">2022</span> by{" "}
              <span className="text-[#00a34d] font-semibold">Shobiga</span>,{" "}
              <span className="text-[#00a34d] font-semibold">aardent</span> and{" "}
              <span className="text-[#00a34d] font-semibold">Ambition</span>{" "}
              with a strong background in education and technology. With a clear
              vision to support{" "}
              <span className="text-[#00a34d] font-semibold">businesses</span>{" "}
              and <span className="text-[#00a34d] font-semibold">startups</span>
              , Shovig was created to offer simple, effective, and
              result-oriented{" "}
              <span className="text-[#00a34d] font-semibold">IT solutions</span>
              .
            </p>
            <p>
              We understand that not every business owner speaks “
              <span className="text-[#00a34d] font-semibold">tech</span>”—and
              that’s entirely why we do what we do. From{" "}
              <span className="text-[#00a34d] font-semibold">
                Google My Business
              </span>{" "}
              setup to{" "}
              <span className="text-[#00a34d] font-semibold">branding</span>,{" "}
              <span className="text-[#00a34d] font-semibold">SEO</span>,{" "}
              <span className="text-[#00a34d] font-semibold">paid ads</span>,{" "}
              <span className="text-[#00a34d] font-semibold">
                website development
              </span>
              ,{" "}
              <span className="text-[#00a34d] font-semibold">mobile apps</span>,
              and{" "}
              <span className="text-[#00a34d] font-semibold">AI solutions</span>
              , our goal is to make your digital journey{" "}
              <span className="text-[#00a34d] font-semibold">easier</span>,{" "}
              <span className="text-[#00a34d] font-semibold">faster</span>, and
              more{" "}
              <span className="text-[#00a34d] font-semibold">profitable</span>.
            </p>
            <p>
              At <span className="text-[#00a34d] font-semibold">Shovig</span>,
              we focus on clear{" "}
              <span className="text-[#00a34d] font-semibold">master plans</span>{" "}
              that bring real{" "}
              <span className="text-[#00a34d] font-semibold">growth</span>.
              We’re here to help businesses turn ideas into{" "}
              <span className="text-[#00a34d] font-semibold">effect</span>
              —concise, comprehension, just{" "}
              <span className="text-[#00a34d] font-semibold">results</span>.
            </p>
            <p>
              Looking to grow your{" "}
              <span className="text-[#00a34d] font-semibold">brand online</span>{" "}
              but not sure where to start?{" "}
              <span className="text-[#00a34d] font-semibold">
                We’re here to guide you.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
