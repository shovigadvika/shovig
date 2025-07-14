import React from "react";
import WebHeroSection from "../components/Web/WebHeroSection";
import WhyChooseUs from "../components/Web/WhyChooseUs.jsx";
import ComponentStack from "../components/Web/ComponentStack";
import WhyCard from "../components/Web/whyCard.jsx";
import WebDevelopmentSection from "../components/Web/WeDevelopmentSection.jsx";

const WebDevelopment = () => {
  return (
    <>
      <WebHeroSection />
      <WebDevelopmentSection/>
      <WhyChooseUs />
      <ComponentStack />
      <WhyCard />
    </>
  );
};

export default WebDevelopment;
