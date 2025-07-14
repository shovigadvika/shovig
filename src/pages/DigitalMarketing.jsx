import React from "react";
import DigitalMarketingHero from "../components/DigitalMarketing/DigitalMarketingHero";
import DigitalMarketingSection from "../components/DigitalMarketing/DigitalMarketingSection";
import WeCraftSection from "../components/DigitalMarketing/WeCraftSection";
import ServingSection from "../components/DigitalMarketing/ServingSection";
import ProgramHighlights from "../components/DigitalMarketing/ProgramHighlights";
import ExploreSection from "../components/DigitalMarketing/ExploreSection";

const DigitalMarketing = () => {
  return (
    <>
      <DigitalMarketingHero />
      <DigitalMarketingSection/>
      <WeCraftSection/>
      <ServingSection/>
      <ProgramHighlights/>
      <ExploreSection/>
    </>
  );
};

export default DigitalMarketing;
