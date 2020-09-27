import React from 'react'
import { motion } from 'framer-motion'

const FixedBar = () => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 40, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="container fixedBar-container"
    >
      <div className="top">
        <a href="#!">Sasha Avelle</a>
        <a href="#!">Contact me</a>
      </div>
    </motion.div>
  )
}

export default FixedBar
