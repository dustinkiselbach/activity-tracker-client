import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  hidden: { y: -200, x: '-50%', opacity: 0 },
  visible: { y: 0, x: '-50%', opacity: 1 }
}

const Alerts = () => {
  const alertContext = useContext(AlertContext)

  console.log(alertContext.alerts)

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
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  )
}

export default Alerts
