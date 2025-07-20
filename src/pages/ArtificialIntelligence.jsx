import React from "react";
import AiHeroSection from "../components/Ai/AiHeroSection";
import AiDevelopment from "../components/Ai/AiDevelopment";
import AiWhyShovig from "../components/Ai/AIWhyShovig";
import AiTimeline from "../components/Ai/AiTimeLine";
import DevelopmentProcess from "../components/Ai/DevelopmentProcess";
import WhyShovigSection from "../components/Ai/WhyShovigBussiness";
import { Helmet } from "react-helmet-async";

const ArtificialIntelligence = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.shovig.in/artificial-intelligence" />
      </Helmet>
      <AiHeroSection />
      <AiDevelopment />
      <AiWhyShovig />
      <AiTimeline />
      <DevelopmentProcess />
      <WhyShovigSection />
    </>
  );
};

export default ArtificialIntelligence;
