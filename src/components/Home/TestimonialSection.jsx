import { FaStar } from "react-icons/fa";
import testBg from "../../assets/Home/testi-bg.jpg";
import client1 from "../../assets/Home/testi1.png";
import client2 from "../../assets/Home/testi2.png";
import client3 from "../../assets/Home/testi3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonialData = [
  {
    img: client1,
    name: "Sasi Kumar",
    feedback:
      "Once I enquired for digital marketing service for my business,They shared me good awareness about meta campaigns and started my digital work with them and my ROI increased dramatically to next level.",
    status: "client",
  },
  {
    img: client2,
    name: "Praneet",
    feedback:
      "Recently i done along with them for my company's dynamic website they done in very perfect and in affordable price.... best place to find your needs in business solutions.",
    status: "client",
  },
  {
    img: client3,
    name: "Gopal Krishnan",
    feedback:
      "Recently I have design logo for our wholesale grocery shop ,they charged minimum amount and good logo design",
    status: "client",
  },
  {
    img: client1,
    name: "Ravindran A Ravi Johnson",
    feedback:
      "Best Digital marketing Company and their ideas on planning new strategy so awesome",
    status: "client",
  },
  {
    img: client2,
    name: "Saranya",
    feedback:
      "Great company to work with. They value long-term partnerships and always deliver quality.",
    status: "client",
  },
  {
    img: client3,
    name: "Mohan",
    feedback:
      "I love their attention to detail and customer-first approach. Worth every penny.",
    status: "client",
  },
];

const TestimonialSection = () => {
  return (
    <div
      className="sticky md:-top-48 lg:-top-32 bg-cover bg-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1440px] mx-auto"
      style={{ backgroundImage: `url(${testBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/99 to-transparent z-0"></div>
      <div className="relative z-10">
        <h6 className="text-center text-gray-500 text-base font-medium mb-3">
          Testimonials
        </h6>
        <h2 className="text-center text-gray-900 text-3xl md:text-4xl font-semibold mb-10">
          Our Clients Feedback <br /> & Best Review For Us
        </h2>

        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 h-[490px] rounded-xl text-center flex flex-col justify-between gap-4 shadow-md">
                <div className="flex justify-center gap-1 text-[#00a34d] text-xl mt-4">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <p className="italic text-gray-600 text-lg">
                  “ {item.feedback} ”
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[75px] h-[75px] object-cover rounded-full mb-2"
                  />
                  <h6 className="text-base font-semibold text-gray-700">
                    {item.name}
                  </h6>
                  <p className="text-sm font-medium text-gray-400">
                    {item.status}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
