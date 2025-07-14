import React from "react";
import img1 from "../../assets/services/img1.png"; 

const stats = [
  { number: "50", label: "Brands Served" },
  { number: "120", label: "Campaigns Run" },
  { number: "300", label: "Leads Generated" },
];

const DigitalMarketingSection = () => {
  return (
    <section className=" relative w-full py-16 px-4 md:px-10 lg:px-[64px] bg-white text-gray-800 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div
          className="flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Digital Marketing"
            className="w-full max-w-md md:max-w-lg lg:max-w-full object-contain"
          />
        </div>

        <div className="space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Drive Business Growth with{" "}
            <span className="text-[#00a34d]">Smart Digital Strategies</span>
          </h2>

          <p
            className="text-base text-gray-600 leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            At Shovig, we craft innovative marketing solutions using AI and real-time analytics.
            From SEO and branding to ad campaigns, we help you grow, connect with your customers,
            and build long-term impact.
          </p>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {stats.map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 100}
                className="text-center p-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#00a34d] mb-2">
                  {item.number}+
                </div>
                <div className="text-sm font-semibold text-gray-800 tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
