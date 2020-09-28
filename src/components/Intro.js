import React, { useState, useEffect, useRef } from 'react'
import introBg from './../assets/images/intro.mp4'
import { motion } from 'framer-motion'

const transition = { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }
const introText = ['Sasha Avelle', '5 years experience', 'portrait', 'scenery', 'wedding', 'commercial']

const Intro = ({ setStep }) => {
  const [currentText, setCurrentText] = useState(0)
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current.play()

    let interval = setInterval(() => {
      if (currentText > 4) {
        window.clearInterval(interval)
        setStep('main')
      }
      setCurrentText(currentText + 1)
    }, 1000)

    return () => {
      window.clearInterval(interval)
    }
  })

  return (
    <motion.div exit={{ y: '-100%' }} transition={{ ...transition, delay: 1 }} className="intro-container">
      <motion.div
        animate={{ opacity: 0.3 }}
        initial={{ opacity: 1 }}
        transition={{ ...transition }}
        exit={{ opacity: 1 }}
        className="black-overlay"
      ></motion.div>
      <video ref={videoRef} loop="loop" muted={true} className="bgVideo">
        <source src={introBg} type="video/mp4" />
        Your browser does not support video. Please update your browser.
      </video>
      <div className="content">
        <h3 className="intro-text">
          <motion.span key={3} initial={{ y: 40 }} animate={{ y: 0 }} exit={{ y: -40 }} transition={{ ...transition }}>
            {introText[currentText]}
          </motion.span>
        </h3>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="enter"
          onClick={() => setStep('main')}
        >
          <p>Skip intro</p>
          <div className="line"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Intro
