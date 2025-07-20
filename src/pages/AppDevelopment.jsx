import React from 'react'
import AppHeroSection from '../components/App/AppHeroSection'
import OurMobile from '../components/App/OurMobile.jsx'
import OurMobileExtras from '../components/App/OurMobileExtra.jsx'
import WhyCardApp from '../components/App/WhyCardApp.jsx'
import AppDevelopmentSection from '../components/App/AppDevelopmentSection.jsx'
import { Helmet } from "react-helmet-async";

const AppDevelopment = () => {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://www.shovig.in/app-development" />
      </Helmet>
    <AppHeroSection/>
    <AppDevelopmentSection/>
    <OurMobile/>
    <OurMobileExtras/>
    <WhyCardApp/>
    </>
  )
}

export default AppDevelopment