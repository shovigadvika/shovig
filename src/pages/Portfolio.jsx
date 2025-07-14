import React from 'react'
import PortfolioHero from '../components/Portfolio/PortfolioHero'
import PortfolioList from '../components/Portfolio/PortfolioList'
import PortfolioShowCase from '../components/Portfolio/PortfolioShowCase'
import CreativeCTA from '../components/Portfolio/CreativeCTA'

const Portfolio = () => {
  return (
    <>
    <PortfolioHero/>
    {/* <PortfolioShowCase/> */}
    <PortfolioList/>
    <CreativeCTA/>
    </>
  )
}

export default Portfolio
