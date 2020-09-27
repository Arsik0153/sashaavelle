import React from 'react'
import introBg from './../assets/images/intro.mp4'
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }

const Intro = ({ setStep }) => {
  return (
    <motion.div exit={{ y: '-100%' }} transition={{ ...transition, delay: 1 }} className="intro-container">
      <motion.div
        animate={{ opacity: 0.3 }}
        initial={{ opacity: 1 }}
        transition={{ ...transition }}
        exit={{ opacity: 1 }}
        className="black-overlay"
      ></motion.div>
      <video autoPlay={true} loop="loop" muted={true} className="bgVideo">
        <source src={introBg} type="video/mp4" />
        Your browser does not support video. Please update your browser.
      </video>
      <div className="content">
        <h3 className="intro-text">
          <motion.span exit={{ y: -40 }} transition={{ ...transition }}>
            Sasha Avelle
          </motion.span>
        </h3>
        <div className="enter" onClick={() => setStep('main')}>
          <p>Skip intro</p>
          <div className="line"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Intro
