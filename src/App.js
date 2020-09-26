import React from 'react'
import './assets/css/index.scss'
import FixedBar from './components/FixedBar'
import Hero from './components/Hero'
import HeroElements from './components/HeroElements'
import SmoothScroll from './components/SmoothScroll'

const App = () => {
  return (
    <SmoothScroll>
      <FixedBar />
      <Hero />
      <HeroElements />
    </SmoothScroll>
  )
}

export default App
