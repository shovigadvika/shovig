import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutHeroSection from '../components/About/AboutHeroSection'
import WhatWeDo from '../components/About/WhatWeDo'
import OurStrategy from '../components/About/OurStratergy'
import ServiceWeOfferSection from '../components/About/ServiceWeOfferSection'
import CoreValues from '../components/About/CoreValues'
import MeetTeam from '../components/About/MeetTeam'
import WhoWeAreSection from '../components/About/WhoWeAreSection'

const About = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.shovig.in/about" />
      </Helmet>

      <AboutHeroSection />
      <WhatWeDo />
      <WhoWeAreSection />
      <OurStrategy />
      <ServiceWeOfferSection />
      <CoreValues />
      <MeetTeam />
    </>
  )
}

export default About
