import React from "react";
import BounceCards from "@/components/reactBits/BounceCards";

import img1 from "../../assets/portfolio/1.png";
import img2 from "../../assets/portfolio/2.png";
import img3 from "../../assets/portfolio/3.png";
import img4 from "../../assets/portfolio/4.png";
import img5 from "../../assets/portfolio/5.png";
import img6 from "../../assets/portfolio/6.png";
import img7 from "../../assets/portfolio/7.png";
import img8 from "../../assets/portfolio/8.png";
import img9 from "../../assets/portfolio/9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const transformStyles = [
  "rotate(5deg) translate(-320px)",
  "rotate(2deg) translate(-220px)",
  "rotate(1deg) translate(-120px)",
  "rotate(0deg) translate(-60px)",
  "scale(1.1) rotate(0deg)", // Center card: slight zoom + no offset
  "rotate(0deg) translate(60px)",
  "rotate(-2deg) translate(120px)",
  "rotate(2deg) translate(220px)",
  "rotate(-3deg) translate(320px)",
];

const PortfolioShowCase = () => {
  return (
    <section className="py-20 relative bg-[#f9f9f9] flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Highlights
      </h2>
      <BounceCards
        className="custom-bounceCards"
        images={images}
        containerWidth={700}
        containerHeight={300}
        animationDelay={0}
        animationStagger={0.18}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
        enableHover={true}
      />
    </section>
  );
};

export default PortfolioShowCase;
