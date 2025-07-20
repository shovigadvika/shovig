import React from "react";
import WebHeroSection from "../components/Web/WebHeroSection";
import WhyChooseUs from "../components/Web/WhyChooseUs.jsx";
import ComponentStack from "../components/Web/ComponentStack";
import WhyCard from "../components/Web/whyCard.jsx";
import WebDevelopmentSection from "../components/Web/WeDevelopmentSection.jsx";
import { Helmet } from "react-helmet-async";

const WebDevelopment = () => {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://www.shovig.in/website-development" />
      </Helmet>
      <WebHeroSection />
      <WebDevelopmentSection/>
      <WhyChooseUs />
      <ComponentStack />
      <WhyCard />
    </>
  );
};

export default WebDevelopment;
