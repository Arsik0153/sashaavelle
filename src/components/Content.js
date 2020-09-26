import React from 'react'
import './../assets/css/index.scss'
import DividerText from './DividerText'
import FixedBar from './FixedBar'
import Hero from './Hero'
import HeroElements from './HeroElements'
import SmoothScroll from './SmoothScroll'

const Content = () => {
  return (
    <SmoothScroll>
      <FixedBar />
      <Hero />
      <HeroElements />
      <DividerText />
    </SmoothScroll>
  )
}

export default Content
