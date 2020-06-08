import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import Moment from 'react-moment'

const ActivityCard = ({ activity, openCard, setOpen }) => {
  const {
    activity_time,
    activity_type,
    avg_hr,
    start_date_local,
    distance,
    calories,
    name,
    pace,
    user_id,
    paceUnit,
    distanceUnit
  } = activity.activity

  const [user, setUser] = useState({})

  // TODO memory leak when the state does not fully load and profile is loaded

  useEffect(() => {
    const fetchUser = async id => {
      try {
        const res = await axios.get(
          `https://agile-retreat-42559.herokuapp.com//api/v1/users/${id}`
        )

        setUser(res.data)
      } catch (err) {
        throw err
      }
    }
    fetchUser(user_id)
  }, [user_id])

  // // to format seconds into hours minutes and seconds
  // const duration = moment.duration(activity_time, 'seconds')
  // const activityLength = duration.format('hh:mm:ss')

  return (
    <div className='detail-card m-2'>
      <div className='detail-card__header'>
        <h3>
          {user.name} - {activity_type}
        </h3>

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
            <img src={user.profile_image} alt='profile' />
            <div className='detail-card__main-left-text'>
              <small>
                <Moment format='MM-DD-YYYY hh:mm a' utc locale>
                  {start_date_local}
                </Moment>
              </small>
              <h3>{name}</h3>
            </div>
          </div>
          <div className='detail-card__main--right'>
            <div className='stats'>
              <div className='stats--item'>
                <small>distance</small>
                <div className='stat'>
                  {distance} {distanceUnit}
                </div>
              </div>
              <div className='stats--item'>
                <small>moving time</small>
                <div className='stat'>{activity_time}</div>
              </div>
              <div className='stats--item'>
                <small>pace </small>
                <div className='stat'>
                  {pace} {paceUnit}
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
