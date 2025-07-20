import React from 'react'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import PortfolioList from '../components/Portfolio/PortfolioList'
import PortfolioShowCase from '../components/Portfolio/PortfolioShowCase'
import CreativeCTA from '../components/Portfolio/CreativeCTA'
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://www.shovig.in/portfolio" />
      </Helmet>
    <PortfolioHero/>
    {/* <PortfolioShowCase/> */}
    <PortfolioList/>
    <CreativeCTA/>
    </>
  )
}

export default Portfolio
