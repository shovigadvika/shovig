import React from "react";
import DigitalMarketingHero from "../components/DigitalMarketing/DigitalMarketingHero";
import DigitalMarketingSection from "../components/DigitalMarketing/DigitalMarketingSection";
import WeCraftSection from "../components/DigitalMarketing/WeCraftSection";
import ServingSection from "../components/DigitalMarketing/ServingSection";
import ProgramHighlights from "../components/DigitalMarketing/ProgramHighlights";
import ExploreSection from "../components/DigitalMarketing/ExploreSection";
import { Helmet } from "react-helmet-async";

const DigitalMarketing = () => {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://www.shovig.in/digital-marketing" />
      </Helmet>
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
