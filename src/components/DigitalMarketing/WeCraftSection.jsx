import React from "react";
import craftImg from "../../assets/services/service-8.jpg"; 

const features = [
  {
    title: "SEO Optimization",
    desc: "Improve rankings and attract organic traffic.",
  },
  {
    title: "Content Strategy",
    desc: "Engaging content that converts and retains.",
  },
  {
    title: "Analytics",
    desc: "Track, measure, and optimize performance.",
  },
];

const WeCraftSection = () => {
  return (
    <section className="relative bg-[#f9f9f9] w-full py-16 px-4 md:px-10 lg:px-[64px] overflow-x-hidden">
      <div className="max-w-[1940px] m-auto  mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        <div
          className="w-full lg:w-[55%] space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h6 className="text-sm font-medium text-gray-500 uppercase">
            Learn More
          </h6>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            We Craft Strategic Digital Campaigns <br /> to Boost Online Visibility.
          </h2>

          <div className="flex flex-col md:flex-row gap-24 items-start">
            <div className="relative bg-[#f5f5f5] rounded-xl px-6 pt-8 pb-6 w-full md:w-[500px] shadow-sm">
              <div className="absolute top-5 left-6 w-20 h-1.5 bg-[#00a650] rounded-full" />
              <p className="text-sm text-gray-700 mb-4">
                We blend strategy with creativity to craft digital marketing
                solutions that drive results.
              </p>
              <p className="text-sm text-gray-700">
                From SEO optimization to targeted campaigns, we ensure your
                brand reaches the right audience at the right time.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="border-l-4 border-transparent hover:border-[#00a650] pl-4 transition-all duration-300 cursor-pointer"
                >
                  <h5 className="text-base font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="w-full lg:w-[35%] flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={craftImg}
            alt="Craft Image"
            className="w-[320px] h-[460px] object-cover rounded-xl hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default WeCraftSection;
