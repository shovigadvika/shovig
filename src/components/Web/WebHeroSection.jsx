import React, { useEffect, useState } from "react";
import bgImage from "../../assets/services/bg.jpg";
import { TextAnimate } from "@/components/magicui/text-animate";

const WebHeroSection = () => {
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
          Crafting digital experiences that convert
        </p>

        <TextAnimate
          animation="blurInUp"
          once
          as="h1"
          className="text-4xl md:text-6xl font-medium text-gray-800 leading-tight"
        >
          Web Development Services
        </TextAnimate>

        <p className="text-base md:text-lg text-gray-900 max-w-2xl mt-6">
          From custom websites to robust web apps — we design, develop, and deploy scalable solutions that grow your business.
        </p>
      </div>
    </section>
  );
};

export default WebHeroSection;
