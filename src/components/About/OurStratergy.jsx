import React from "react";

const visionCards = [
  {
    number: "1",
    title: "Vision",
    desc: "To inspire limitless growth by novel digital solutions that transform businesses into proactive, industry-leading live wires across the globe.",
    width: "md:w-[95%]",
  },
  {
    number: "2",
    title: "Mission",
    desc: "We partner with pioneering businesses, leveraging the power of leading-edge web, AI, and digital course of action to drive marked expansion, boost brand visibility, and build everlasting completion on a worldwide scale.",
    width: "md:w-[105%]",
  },
  {
    number: "3",
    title: "Core Belief",
    desc: "We believe clarity, strategy, and creative execution are key to delivering real, measurable outcomes in today’s fast-paced digital world.",
    width: "md:w-[95%]",
  },
];

const VisionMissionSection = () => {
  return (
    <section className="px-4 sm:px-10 md:px-16 lg:px-[64px] py-20 bg-white relative z-[10] min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row gap-16 items-start w-full">
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-[#00a34d] font-semibold uppercase text-base mb-4">
            Our Vision & Mission
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            The values that drive every line of our code.
          </h2>
          <p className="text-gray-700 text-lg mb-5 leading-relaxed">
            At <span className="text-[#00a34d] font-semibold">Shovig</span>, we don’t just build tech — we build clarity, trust, and future-ready brands. Our vision and mission fuel everything we do, from first call to final delivery.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether launching your next big product or scaling growth globally, our mindset remains rooted in purpose and measurable results.
          </p>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col gap-8">
          {visionCards.map((card, index) => (
            <div key={index} className="w-full flex justify-end">
              <div
                className={`border border-[#00a34d33] shadow-md rounded-xl flex items-center gap-6 p-6 w-100 ${card.width}`}
              >
                <div className="w-[60px] aspect-square bg-[#cff5e1] text-[#00a34d] rounded-full flex items-center justify-center text-xl font-bold">
                  {card.number}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
