import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import { AnimatePresence, motion } from 'framer-motion'

const transition = {
  duration: 0.4,
  ease: [0.6, 0.05, -0.01, 0.9]
}

const variants = {
  hidden: {
    y: -200,
    x: '-50%',
    opacity: 0,
    transition
  },
  visible: {
    y: 0,
    x: '-50%',
    opacity: 1,
    transition
  }
}

const Alerts = () => {
  const alertContext = useContext(AlertContext)

  return (
    <>
      <AnimatePresence>
        {alertContext.alerts.length > 0 &&
          alertContext.alerts.map(alert => (
            <motion.div
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={variants}
              key={alert.id}
              className='alerts'
            >
              <h2>{alert.msg}</h2>
              <span
                className='material-icons'
                onClick={() => alertContext.closeAlert(alert.id)}
              >
                highlight_off
              </span>
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  )
}

export default Alerts
