import React, { useEffect, useState } from "react";
import bgImage from "../../assets/services/bg.jpg";
import { TextAnimate } from "@/components/magicui/text-animate";

const AppHeroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRevealed(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-center text-neutral-800 overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})`, opacity: 0.9 }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#d5dfdac7] z-10 transition-transform duration-[1800ms] ease-in-out ${
          isRevealed ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      <div className="relative z-20 max-w-3xl px-[64px] text-center flex flex-col items-center justify-center">
        <p className="text-base md:text-lg text-gray-600 mb-4">
          Build the next big thing
        </p>

        <TextAnimate
          animation="blurInUp"
          once
          as="h1"
          className="text-4xl md:text-6xl font-medium text-gray-800 leading-tight"
        >
          Mobile App Development Services
        </TextAnimate>

        <p className="text-base md:text-lg text-gray-900 max-w-2xl mt-6">
          We build high-performance Android and iOS apps tailored to your
          business goals — combining sleek design, powerful features, and smooth
          user experience.
        </p>
      </div>
    </section>
  );
};

export default AppHeroSection;
