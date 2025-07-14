import React, { useEffect, useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import Threads from "@/components/reactBits/Threads";

const UiUxTrainingHero = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRevealed(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center text-neutral-800 overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Threads
          amplitude={5}
          distance={1}
          enableMouseInteraction={true}
          color={[0, 0.639, 0.302]}
        />
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#fef5e5c7] z-10 transition-transform duration-[1800ms] ease-in-out ${
          isRevealed ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      <div className="relative z-20 max-w-3xl px-[64px] text-center flex flex-col items-center justify-center">
        <p className="text-base md:text-lg text-gray-600 mb-4">
          Shape digital experiences with creativity and strategy
        </p>

        <TextAnimate
          animation="blurInUp"
          once
          as="h1"
          className="text-4xl md:text-6xl font-medium text-gray-800 leading-tight"
        >
          UI/UX Design Programs
        </TextAnimate>

        <p className="text-base md:text-lg text-gray-900 max-w-2xl mt-6">
          Unleash Your Creativity and Build Beautiful, User-Friendly Digital Experiences
        </p>
      </div>
    </section>
  );
};

export default UiUxTrainingHero;
