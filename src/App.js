import React from 'react'
import './assets/css/index.scss'
import FixedBar from './components/FixedBar'
import Hero from './components/Hero'
import HeroElements from './components/HeroElements'

const App = () => {
  return (
    <div>
      <FixedBar />
      <Hero />
      <HeroElements />
    </div>
  )
}

export default App
