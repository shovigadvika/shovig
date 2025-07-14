import React, { useEffect, useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import Silk from "@/components/reactBits/Silk";

const PortfolioHero = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRevealed(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center text-neutral-800">
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#f5f5f5" 
          noiseIntensity={0.1}
          rotation={1}
        />
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#d5dfdac7] z-10 transition-transform duration-[1800ms] ease-in-out ${
          isRevealed ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      <div className="relative z-20 max-w-3xl px-[64px] text-center flex flex-col items-center justify-center">
        <TextAnimate
          animation="blurInUp"
          once
          as="h1"
          className="text-4xl md:text-6xl font-medium text-gray-800 leading-tight"
        >
          Our Portfolio
        </TextAnimate>
        <p className="text-base md:text-lg text-gray-900 max-w-2xl mt-6">
          Explore our recent work in web, branding, UI/UX, and product design —
          where strategy meets aesthetics.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
