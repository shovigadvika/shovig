import React from "react";
import webImg from "../../assets/services/web1.jpg";

const WebDevelopmentSection = () => {
  return (
    <section className="relative bg-white px-4 sm:px-10 md:px-16 lg:px-[64px] py-20 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <div className="relative w-full">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#e6f5ed] rounded-3xl -z-10" />
            <img
              src={webImg}
              alt="Web Development"
              className="w-full rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <p className="text-[#00a34d] uppercase font-semibold text-sm mb-2">
            Web Development Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Building Digital Experiences That Go{" "}
            <span className="text-[#00a34d] italic">ineffable</span> Code
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            At{" "}
            <span className="text-[#00a34d] font-semibold">
              Shovig Business Solutions
            </span>
            , web development isn’t just about writing code—it’s about building
            powerful, innovative{" "}
            <span className="text-[#00a34d] font-semibold">
              digital ecosystems
            </span>{" "}
            that charge your growth.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Whether you need a smooth landing page, a high-performing{" "}
            <span className="text-[#00a34d] font-semibold">
              eCommerce platform
            </span>
            , or a smart{" "}
            <span className="text-[#00a34d] font-semibold">
              AI-powered web application
            </span>
            , we bring creativity, technology, and strategy together to work a
            solution tailored to your business goals.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We merge design with technology to deliver{" "}
            <span className="text-[#00a34d] font-semibold">perfect experiences</span> across all
            gadgets. Our websites are{" "}
            <span className="text-[#00a34d] font-semibold">
              visually stunning
            </span>
            ,{" "}
            <span className="text-[#00a34d] font-semibold">
              lightning-fast
            </span>
            , user-friendly, and prepared to convert traffic into{" "}
            <span className="text-[#00a34d] font-semibold">
              quantifiable results
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
