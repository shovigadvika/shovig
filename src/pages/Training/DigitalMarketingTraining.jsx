import React from "react";
import DigitalMarketingTrainingHero from "../../components/Training/DigitalMarketingTraining/DigitalMarketingTrainingHero";
import WhatYoullLearn from "../../components/Training/DigitalMarketingTraining/WhatYoullLearn";
import WhoShouldEnroll from "../../components/Training/DigitalMarketingTraining/WhoShouldEnroll";
import ProgramHighlights from "../../components/Training/DigitalMarketingTraining/ProgramHighlights";
import WhyChooseUs from "../../components/Training/DigitalMarketingTraining/WhyChooseUs";
import CareerStartCard from "../../components/Training/DigitalMarketingTraining/CareerStartCard";
import { Helmet } from "react-helmet-async";

const DigitalMarketingTraining = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.shovig.in/training/digital-marketing"
        />
      </Helmet>
      <DigitalMarketingTrainingHero />
      <WhatYoullLearn />
      <WhoShouldEnroll />
      <ProgramHighlights />
      <CareerStartCard />
      <WhyChooseUs />
    </>
  );
};

export default DigitalMarketingTraining;
