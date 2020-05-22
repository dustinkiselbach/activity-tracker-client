import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
}

const item = {
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: { opacity: 0, x: -200 }
}

const Spinner = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={variants}
        className='spinner'
      >
        Loading <motion.span variants={item}>.</motion.span>
        <motion.span variants={item}>.</motion.span>
        <motion.span variants={item}>.</motion.span>
      </motion.div>
    </AnimatePresence>
  )
}

export default Spinner
