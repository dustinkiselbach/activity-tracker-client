import React from 'react'
import { motion } from 'framer-motion'
import Moment from 'react-moment'
import moment from 'moment'

const ActivityCard = ({ activity, openCard, setOpen }) => {
  const {
    activity_time,
    activity_type,
    avg_hr,
    created_at,
    distance,
    calories,
    name
  } = activity.activity

  // to format seconds into hours minutes and seconds
  const duration = moment.duration(activity_time, 'seconds')
  const activityLength = duration.format('hh:mm:ss')

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
            <img src='http://203.153.40.19/bct/img/user.png' alt='profile' />
            <div className='detail-card__main-left-text'>
              <small>
                <Moment format='MM-DD-YYYY hh:mm a'>{created_at}</Moment>
              </small>
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
                <div className='stat'>{activityLength}</div>
              </div>
              <div className='stats--item'>
                <small>pace </small>
                <div className='stat'>
                  {Math.round((distance / activity_time) * 100) / 100} m/s
                </div>
              </div>
            </div>
            <div className='heartrate my-1'>
              average hr: <span>{avg_hr} bpm</span>
            </div>
            <div className='calories my-1'>
              calories: <span>{calories}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ActivityCard
