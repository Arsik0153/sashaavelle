import React from 'react'
import { motion } from 'framer-motion'

const transition = { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] }
const Preloader = () => {
  return (
    <motion.div exit={{ background: '#000' }} transition={{ ...transition }} className="loader-container">
      <motion.h5 exit={{ opacity: 0 }} transition={{ ...transition }}>
        Loading experience
      </motion.h5>
    </motion.div>
  )
}

export default Preloader
