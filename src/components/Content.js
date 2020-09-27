import React, { useState } from 'react'
import './../assets/css/index.scss'
import DividerText from './DividerText'
import FixedBar from './FixedBar'
import Hero from './Hero'
import HeroElements from './HeroElements'
import Intro from './Intro'
import SmoothScroll from './SmoothScroll'
import { AnimatePresence } from 'framer-motion'

const Content = () => {
  const [step, setStep] = useState('intro')

  return (
    <AnimatePresence exitBeforeEnter>
      {step === 'intro' ? (
        <Intro setStep={setStep} key={1} />
      ) : (
        <SmoothScroll key={2}>
          <FixedBar />
          <Hero />
          <HeroElements setStep={setStep} />
          <DividerText />
        </SmoothScroll>
      )}
    </AnimatePresence>
  )
}

export default Content
