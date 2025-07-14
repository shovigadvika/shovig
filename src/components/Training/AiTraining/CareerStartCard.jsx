import React from "react";
import cardBg from "../../../assets/Training/9.jpg";

const CareerStartCard = () => {
  return (
    <section className="w-full relative py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-[32px] lg:px-[64px] bg-[#f5f5f5] flex justify-center">
      <div
        className="max-w-[1000px] w-full h-auto md:h-[520px] lg:h-[420px] bg-cover bg-center relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.01]"
        style={{ backgroundImage: `url(${cardBg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 flex flex-col md:flex-row h-full w-full p-6 sm:p-8 md:p-12 gap-8 text-white">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Future-Proof Your Career
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
              AI is no longer optional—it’s essential. Whether you're dreaming of a tech job,
              building an app, or planning to launch your startup, AI will give you the power
              to innovate and lead.
              With the right training, support, and projects, you can transform your curiosity
              into capability. And that's exactly what we promise at Shovig Business Solutions.
            </p>
          </div>

          <div className="hidden md:block w-px bg-white/30"></div>

          <div className="flex-1 flex flex-col justify-center space-y-3">
            <p className="text-base md:text-lg font-medium text-white">
              Ready to build real-world AI projects and secure your future?
            </p>
            <p className="font-semibold text-[15px] md:text-[16px] text-white">
              Join the AI Development Training at {" "}
              <span className="text-[#00a34d]">Shovig Business Solutions</span> today!
            </p>
            <p className="italic text-sm text-gray-200">
              Let’s build intelligence—one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerStartCard;