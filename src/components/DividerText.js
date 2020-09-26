import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const DividerText = () => {
  const { scrollYProgress } = useViewportScroll()
  const x1 = useTransform(scrollYProgress, [0, 1], [100, -600])
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 300])

  return (
    <div className="divider-text-container">
      <motion.h3 style={{ x: x1 }}>
        portrait <span>x</span> wedding
      </motion.h3>
      <motion.h3 style={{ x: x2 }}>
        scenery <span>x</span> commercial{' '}
      </motion.h3>
    </div>
  )
}

export default DividerText
