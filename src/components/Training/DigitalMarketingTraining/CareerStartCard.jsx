import React from "react";
import cardBg from "../../../assets/Training/9.jpg";

const CareerStartCard = () => {
  return (
    <section className="w-full relative py-24 px-4 bg-[#f5f5f5] flex justify-center">
      <div
        className="max-w-[1000px] w-full h-auto md:h-[400px] lg:h-[340px] bg-cover bg-center relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.01]"
        style={{ backgroundImage: `url(${cardBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full w-full p-8 md:p-12 gap-6 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Turn Skills Into Success
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200 max-w-4xl mx-auto">
            Digital marketing isn’t just a skill—it’s an opportunity. The opportunity to start a career you love, work from anywhere, earn a steady income, or even launch your own brand. From startups to global giants, every business needs digital marketers—and this is your chance to become one.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-200 max-w-4xl mx-auto">
            So whether you're a student, career changer, business owner, or someone simply looking to make a meaningful change—Shovig’s Digital Marketing Training can help you unlock your full potential.
          </p>
          <p className="text-lg font-semibold text-white">
            Enroll today and transform your passion for digital into a powerful career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerStartCard;
