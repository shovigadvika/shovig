import React from "react";
import {
  FaStore,
  FaCogs,
  FaCreditCard,
  FaShippingFast,
  FaSearchDollar,
} from "react-icons/fa";
import card from "../../assets/services/card2.webp";

const CardStack2 = () => {
  return (
    <section className="w-full py-12 relative lg:sticky lg:top-10 z-20 px-4 sm:px-6 lg:px-[64px] overflow-x-hidden">
      <div className="bg-[#f0eded] rounded-2xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-[500px] flex items-center">
            <img
              src={card}
              alt="E-Commerce"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-3">
              <FaStore className="text-[#00a34d] text-xl sm:text-2xl" />
              <h2 className="text-xl sm:text-2xl font-bold">
                E-Commerce Highlights
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base">
              We build more than just stores — we create fast, scalable, and high-converting e-commerce experiences that grow with your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-6">
              {seoCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-transform duration-300 transform hover:scale-[1.04]"
                >
                  <div className="bg-[#00a34d]/10 p-2 sm:p-3 rounded-full">
                    <card.icon className="text-[#00a34d] text-base sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const seoCards = [
  {
    icon: FaStore,
    title: "Custom Store Design",
    desc: "Unique storefronts that reflect your brand and drive conversions."
  },
  {
    icon: FaCogs,
    title: "Platform Flexibility",
    desc: "From Shopify to headless CMS — we adapt to your tech needs."
  },
  {
    icon: FaCreditCard,
    title: "Payment Integration",
    desc: "Secure, seamless payment options for better customer trust."
  },
  {
    icon: FaShippingFast,
    title: "Inventory & Delivery",
    desc: "Smart inventory and logistics tools that streamline operations."
  },
];

export default CardStack2;
