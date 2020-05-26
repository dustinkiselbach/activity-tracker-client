import React from 'react'
import { motion } from 'framer-motion'

const Toggler = ({ onClick, toggle }) => {
  return (
    <motion.div
      initial={{ backgroundColor: '#fff' }}
      animate={{ backgroundColor: toggle ? '#7c8e51' : '#fff' }}
      transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
      className='toggler m-1'
    >
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: toggle ? '100%' : 0 }}
        transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
        onClick={onClick}
      ></motion.span>
    </motion.div>
  )
}

export default Toggler
