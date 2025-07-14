import React, { useEffect, useState } from "react";
import { Ripple } from "@/components/magicui/ripple";
import { HyperText } from "@/components/magicui/hyper-text";

const AboutHeroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRevealed(true);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#d5dfdac7] z-0 transition-transform duration-[1800ms] ease-in-out ${
          isRevealed ? "-translate-y-full" : "translate-y-0"
        }`}
      ></div>

      <div className="relative z-0 h-full w-full flex items-center justify-center">
        <p className="text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-700">
          <HyperText>About Us</HyperText>
        </p>
        <Ripple />
      </div>
    </div>
  );
};

export default AboutHeroSection;
