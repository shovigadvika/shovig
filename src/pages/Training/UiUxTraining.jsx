import React from "react";
import UiUxTrainingHero from "../../components/Training/UiTraining/UiUxTrainingHero";
import WhatYoullLearn from "../../components/Training/UiTraining/WhatYoullLearn";
import WhoShouldEnroll from "../../components/Training/UiTraining/WhoShouldEnroll";
import ProgramHighlights from "../../components/Training/UiTraining/ProgramHighlights";
import ToolsAndTechnologies from "../../components/Training/UiTraining/ToolsAndTechnologies";
import WhyChooseUs from "../../components/Training/UiTraining/WhyChooseUs";
import CareerOpportunitiesSection from "../../components/Training/UiTraining/CareerOpportunitiesSection ";
import { Helmet } from "react-helmet-async";

const UiUxTraining = () => {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.shovig.in/training/ui-ux-training"
        />
      </Helmet>
      <UiUxTrainingHero />
      <WhatYoullLearn />
      <WhoShouldEnroll />
      <ProgramHighlights />
      <ToolsAndTechnologies />
      <WhyChooseUs />
      <CareerOpportunitiesSection />
    </>
  );
};

export default UiUxTraining;
