import React from "react";
import { FaChartBar, FaPlug, FaCogs, FaLightbulb } from "react-icons/fa";
import card1 from "../../assets/Home/s1.jpg";
import card2 from "../../assets/Home/s2.jpg";
import card3 from "../../assets/Home/s3.jpg";
import card4 from "../../assets/Home/s4.jpg";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const cardData = [
  {
    icon: <FaChartBar className="text-[#00a34d] text-3xl mb-2" />,
    title: "AI-Powered Solutions",
    desc: [
      "Shovig crafts intelligent AI systems that automate operations, enhance decision-making, and transform user experiences across various platforms and business domains.",
      "Our AI models help forecast customer behavior, streamline processes, and deliver personalized solutions that drive growth and efficiency at scale.",
    ],
    image: card1,
  },
  {
    icon: <FaPlug className="text-[#00a34d] text-3xl mb-2" />,
    title: "Mobile App Development",
    desc: [
      "We develop robust and scalable mobile applications with user-focused design, performance optimization, and seamless cross-platform compatibility.",
      "Our apps are built for engagement and business impact, integrating real-time features, secure APIs, and sleek UX across iOS and Android.",
    ],
    image: card2,
  },
  {
    icon: <FaCogs className="text-[#00a34d] text-3xl mb-2" />,
    title: "Web Development",
    desc: [
      "From dynamic websites to complex platforms, we create fast, SEO-friendly, and responsive web experiences that reflect your brand’s vision and goals.",
      "Our full-stack team uses modern frameworks to deliver secure, scalable, and easily manageable websites tailored to your business needs.",
    ],
    image: card3,
  },
  {
    icon: <FaLightbulb className="text-[#00a34d] text-3xl mb-2" />,
    title: "Digital Marketing",
    desc: [
      "Shovig’s marketing strategies blend creativity and data to amplify your online presence, generate leads, and drive measurable business growth.",
      "From SEO and social media to paid ads, we execute campaigns that increase visibility, conversion, and brand loyalty with proven results.",
    ],
    image: card4,
  },
];

const CraftingSection = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="w-full max-w-[1440px] mx-auto px-0 md:px-8 lg:px-24 xl:px-32 2xl:px-64">
        <div className="text-center mb-10 flex flex-col justify-center items-center min-h-[50vh]">
          <div className="text-center max-w-4xl mx-auto -my-[150px] md:-my-44 text-[#00a34d]">
            <TextReveal className="!text-[#00a34d]">
              Crafting digital excellence through strategy, innovation, and
              design to elevate your brand and impact online.
            </TextReveal>
          </div>
          <p className="text-2xl px-5 font-semibold sm:text-xl md:text-2xl lg:text-base lg:font-normal text-[#1b1b1b] max-w-xl">
            IT Solutions crafted to empower your digital journey through
            innovation.
          </p>
        </div>

        <div className="px-5">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              480: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-[#F4F4F9] rounded-xl h-full overflow-hidden mx-2"
                  data-aos="fade-up"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover"
                  />
                  <div className="p-4 sm:p-5 md:p-8">
                    <div className="mb-3 sm:mb-4">{card.icon}</div>
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#2d2d2d] mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-[#999999] text-sm sm:text-base">
                      {card.desc.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CraftingSection;
