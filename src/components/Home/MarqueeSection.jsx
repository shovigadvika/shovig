import React from "react";
import logo1 from "../../assets/Home/logo1.png";
import logo2 from "../../assets/Home/logo2.png";
import logo3 from "../../assets/Home/logo3.png";
import logo4 from "../../assets/Home/logo4.png";
import logo5 from "../../assets/Home/logo5.png";
import logo6 from "../../assets/Home/logo6.png";
import logo7 from "../../assets/Home/logo7.png";
import logo8 from "../../assets/Home/logo8.png";
import logo9 from "../../assets/Home/logo9.png";
import logo10 from "../../assets/Home/logo10.png";
import logo11 from "../../assets/Home/logo11.png";
import logo12 from "../../assets/Home/logo12.png";
import logo13 from "../../assets/Home/logo13.png";
import logo14 from "../../assets/Home/logo14.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
];

const MarqueeSection = () => {
  return (
    <div className="w-full py-12 px-5 md:px-8 lg:px-24 xl:px-32 2xl:px-64">
      <h2 className="text-center text-[#454545] text-xl md:text-2xl font-semibold mb-8">
        Trusted by companies:
      </h2>

      <div className="overflow-hidden group">
        <div className="flex w-max animate-marquee group-hover:pause-marquee gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-32 h-20 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
