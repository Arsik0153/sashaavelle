import React, { useState, useEffect } from 'react'
import './../assets/css/index.scss'
import DividerText from './DividerText'
import FixedBar from './FixedBar'
import Hero from './Hero'
import HeroElements from './HeroElements'
import Intro from './Intro'
import SmoothScroll from './SmoothScroll'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './Preloader'

const transition = { duration: 1.5, ease: [0.6, 0.05, -0.01, 0.9] }
const Content = () => {
  const [step, setStep] = useState('loading')

  useEffect(() => {
    setStep('intro')
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {step === 'loading' ? (
        <Preloader key={5} />
      ) : step === 'intro' ? (
        <>
          <Intro setStep={setStep} key={1} />
          <motion.div
            key={3}
            exit={{ y: '-100%' }}
            transition={{ ...transition, delay: 1.3 }}
            className="intro-overlay"
          ></motion.div>
          <motion.div
            key={4}
            exit={{ y: '-100%' }}
            transition={{ ...transition, delay: 1.6 }}
            className="intro-overlay intro-overlay-2"
          ></motion.div>
        </>
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
