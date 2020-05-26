import React from 'react'
import { motion } from 'framer-motion'

const ActivityCard = ({ activity, openCard, setOpen }) => {
  const {
    activity_time,
    activity_type,
    avg_hr,
    created_at,
    distance,
    name
  } = activity

  return (
    <div className='detail-card m-2'>
      <div className='detail-card__header'>
        <h3>NAMEPLACEHOLDER - {activity_type}</h3>

        <span onClick={() => setOpen(!openCard)}>close</span>
      </div>
      {openCard === true && (
        <motion.div
          animate={{ opacity: openCard ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
          className='detail-card__main'
        >
          <div className='detail-card__main--left'>
            <img
              src='http://203.153.40.19/bct/img/user.png'
              alt='profile image'
            />
            <div className='detail-card__main-left-text'>
              <small>{created_at}</small>
              <h3>{name}</h3>
            </div>
          </div>
          <div className='detail-card__main--right'>
            <div className='stats'>
              <div className='stats--item'>
                <small>distance</small>
                <div className='stat'>{distance} meters</div>
              </div>
              <div className='stats--item'>
                <small>moving time</small>
                <div className='stat'>{activity_time} seconds</div>
              </div>
              <div className='stats--item'>
                <small>pace </small>
                <div className='stat'>SPEED PLACEHOLDER mi/s</div>
              </div>
            </div>
            <div className='heartrate my-1'>
              average hr: <span>{avg_hr}</span>
            </div>
            <div className='time my-1'>
              time: <span>{activity_time}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ActivityCard
