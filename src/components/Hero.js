import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const transition = { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }

  return (
    <div className="container hero-container">
      <div className="line-container">
        <span className="h-hide">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: 70 }}
            transition={{ ...transition, delay: 0.2 }}
            className="first"
          >
            Creative
          </motion.h1>
        </span>
        <motion.span
          animate={{ width: '100%' }}
          initial={{ width: '0%' }}
          transition={{ ...transition, duration: 1.5, delay: 0.3 }}
          className="line"
        ></motion.span>
      </div>
      <div className="line-container">
        <span className="h-hide">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: 70 }}
            transition={{ ...transition, delay: 0.4 }}
            className="second"
          >
            photographer
          </motion.h1>
        </span>
        <motion.span
          animate={{ width: '100%' }}
          initial={{ width: '0%' }}
          transition={{ ...transition, duration: 1.5, delay: 0.5 }}
          className="line"
        ></motion.span>
      </div>
    </div>
  )
}

export default Hero
