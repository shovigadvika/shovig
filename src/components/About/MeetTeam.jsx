import React from "react";
import founderImg from "../../assets/Home/testi1.png";

const FounderStorySection = () => {
  return (
    <section className="sticky md:top-0 px-4 sm:px-10 md:px-16 lg:px-[64px] py-20 bg-white flex flex-col md:flex-row-reverse gap-12 items-center overflow-x-hidden">
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="fade-right"
      >
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[500px]">
          <div className="absolute -top-6 -left-6 w-full h-full bg-[#e6f5ed] rounded-3xl -z-10" />
          <img
            src={founderImg}
            alt="Founder"
            className="w-full h-auto object-cover rounded-3xl shadow-lg transform scale-x-[-1] "
          />
        </div>
      </div>

      <div className="w-full md:w-1/2" data-aos="fade-left">
        <p className="text-[#00a34d] font-semibold uppercase text-sm tracking-wide mb-3">
          Our Founder’s Story
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-snug">
          From <span className="text-[#00a34d]">vision</span> to reality — how
          Shobiga sparked a digital movement.
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Every project we’ve created carries more than code or design—it
          carries a <span className="text-[#00a34d] font-semibold">story</span>.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          <span className="text-[#00a34d] font-semibold">
            Shovig Business Solution
          </span>{" "}
          was founded by{" "}
          <span className="text-[#00a34d] font-semibold">Shobiga</span>, a bold
          woman speculator who turned her vision into a mission: to empower
          other businesses through clear, efficient, and digital innovations.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          From her{" "}
          <span className="text-[#00a34d] font-semibold">
            intellectual upbringing
          </span>{" "}
          to hands-on{" "}
          <span className="text-[#00a34d] font-semibold">tech leadership</span>,
          her journey is one of
          <span className="text-[#00a34d] font-semibold"> growth</span>,
          <span className="text-[#00a34d] font-semibold"> grit</span>, and
          <span className="text-[#00a34d] font-semibold"> purpose</span>.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          Curious how one woman’s vision is transforming businesses like yours?{" "}
          <span className="text-[#00a34d] font-semibold">Explore our work</span>
          . Imagine what we can build{" "}
          <span className="text-[#00a34d] font-semibold">together</span>.
        </p>
      </div>
    </section>
  );
};

export default FounderStorySection;
