import React from "react";
import AiTrainingHero from "../../components/Training/AiTraining/AiTrainingHero";
import WhatYoullLearn from "../../components/Training/AiTraining/WhatYoullLearn";
import WhoShouldEnroll from "../../components/Training/AiTraining/WhoShouldEnroll";
import ProgramHighlights from "../../components/Training/AiTraining/ProgramHighlights";
import CareerStartCard from "../../components/Training/AiTraining/CareerStartCard";
import WhyChooseUs from "../../components/Training/AiTraining/WhyChooseUs";
import ToolsAndTechnologies from "../../components/Training/AiTraining/ToolsAndTechnologies";
import { Helmet } from "react-helmet-async";

const AiTraining = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.shovig.in/training/artificial-intelligence-training" />
      </Helmet>
      <AiTrainingHero />
      <WhatYoullLearn />
      <WhoShouldEnroll />
      <ProgramHighlights />
      <ToolsAndTechnologies />
      <CareerStartCard />
      <WhyChooseUs />
    </>
  );
};

export default AiTraining;
