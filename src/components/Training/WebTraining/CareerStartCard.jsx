import React from "react";
import cardBg from "../../../assets/Training/9.jpg";

const CareerStartCard = () => {
  return (
    <section className="w-full relative py-24 px-4 bg-[#f5f5f5] flex justify-center">
      <div
        className="max-w-[1000px] w-full h-auto md:h-[340px] bg-cover bg-center relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.01]"
        style={{ backgroundImage: `url(${cardBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 flex flex-col md:flex-row h-full w-full p-8 md:p-12 gap-8 text-white">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Your Career Starts Here
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-200">
              The future of technology belongs to those who can build it. And you can be one of them.
              Whether you're looking to land a high-paying job, start your own freelance gig, or simply
              bring your tech ideas to life — Full Stack Web Development is your gateway.
            </p>
          </div>

          <div className="hidden md:block w-px bg-white/30"></div>

          <div className="flex-1 flex flex-col justify-center space-y-3">
            <p className="text-lg font-medium text-white">
              Are you ready to build websites, apps, and a fulfilling career?
            </p>
            <p className="font-semibold text-[16px] text-white">
              Join the Full Stack Web Development Training at{" "}
              <span className="text-[#00a34d]">Shovig Business Solutions</span> today!
            </p>
            <p className="italic text-sm text-gray-200">
              Let’s code your future — one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerStartCard;
