import React from "react";
import ContactHeroSection from "../components/Contact/ContactHeroSection";
import ContactFormSection from "../components/Contact/ContactFormSection";
import ContactIFrameSection from "../components/Contact/ContactIFrameSection";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.shovig.in/contact" />
      </Helmet>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactIFrameSection />
    </>
  );
};

export default Contact;
