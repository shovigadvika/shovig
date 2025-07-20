import React from "react";
import WebTrainingHeroSection from "../../components/Training/WebTraining/WebTrainingHeroSection";
import WhatYoullLearn from "../../components/Training/WebTraining/WhatYoullLearn";
import WhoShouldEnroll from "../../components/Training/WebTraining/WhoShouldEnroll";
import ProgramHighlights from "../../components/Training/WebTraining/ProgramHighlights";
import WhyChooseUs from "../../components/Training/WebTraining/WhyChooseUs";
import CareerStartCard from "../../components/Training/WebTraining/CareerStartCard";
import { Helmet } from "react-helmet-async";

const WebDevTraining = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.shovig.in/training/full-stack-website-development-training"
        />
      </Helmet>
      <WebTrainingHeroSection />
      <WhatYoullLearn />
      <WhoShouldEnroll />
      <ProgramHighlights />
      <CareerStartCard />
      <WhyChooseUs />
    </>
  );
};

export default WebDevTraining;
