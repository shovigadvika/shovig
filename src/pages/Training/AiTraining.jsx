import React from 'react'
import AiTrainingHero from '../../components/Training/AiTraining/AiTrainingHero'
import WhatYoullLearn from '../../components/Training/AiTraining/WhatYoullLearn'
import WhoShouldEnroll from '../../components/Training/AiTraining/WhoShouldEnroll'
import ProgramHighlights from '../../components/Training/AiTraining/ProgramHighlights'
import CareerStartCard from '../../components/Training/AiTraining/CareerStartCard'
import WhyChooseUs from '../../components/Training/AiTraining/WhyChooseUs'
import ToolsAndTechnologies from '../../components/Training/AiTraining/ToolsAndTechnologies'

const AiTraining = () => {
  return (
    <>
    <AiTrainingHero/>
    <WhatYoullLearn/>
    <WhoShouldEnroll/>
    <ProgramHighlights/>
    <ToolsAndTechnologies/>
    <CareerStartCard/>
    <WhyChooseUs/>
    </>
  )
}

export default AiTraining