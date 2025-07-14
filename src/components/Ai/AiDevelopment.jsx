import React from "react";
import { BsChatDotsFill, BsPeopleFill } from "react-icons/bs";
import AI_Banner from "../../assets/services/about7.jpg";

const AiDevelopment = () => {
  return (
    <section className="w-full relative bg-white py-16 px-4 md:px-12 lg:px-[64px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div
          className="relative w-full lg:w-1/2 flex justify-center"
          data-aos="fade-left"
        >
          <div className="absolute w-64 h-64 bg-[#e8f5ee] rounded-full -top-10 -left-6 z-0 animated-blob opacity-60" />
          <img
            src={AI_Banner}
            alt="AI Chatbot"
            className="relative z-10 rounded-xl shadow-lg w-[90%] h-auto max-h-[400px] object-cover"
          />
        </div>

        <div
          className="w-full lg:w-1/2 space-y-5 lg:space-y-6"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Embrace the future with{" "}
            <span className="text-[#00a34d]">AI Software Development</span> from
            Shovig Business Solutions.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            AI is no longer a buzzword — it's reshaping how industries operate
            and innovate.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We build smart, adaptive AI solutions — from chatbots to predictive
            systems — tailored to real business challenges.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Whether you're in retail, healthcare, logistics, or IoT, we bring
            AI's full potential to your fingertips.
          </p>

          <p className="text-gray-800 font-medium">
            With Shovig, you don’t just keep up —{" "}
            <span className="text-[#00a34d] font-semibold">you lead</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4 items-start">
              <div className="text-[#00a34d] text-3xl">
                <BsChatDotsFill />
              </div>
              <div>
                <h6 className="font-semibold text-lg text-gray-800 mb-1">
                  Smart Responses
                </h6>
                <p className="text-gray-600 text-sm leading-relaxed">
                  24/7 support with natural language understanding.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-[#00a34d] text-3xl">
                <BsPeopleFill />
              </div>
              <div>
                <h6 className="font-semibold text-lg text-gray-800 mb-1">
                  Customer Engagement
                </h6>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Automate conversations with a human-like touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDevelopment;
