import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment'
import moment from 'moment'
import {
  metersToMiles,
  toMilesPerHour,
  toKmPerHour,
  toMinutesPer
} from '../../utils/unitConversions'

const DashboardCard = ({ activity, imperialToggle }) => {
  const {
    name,
    id,
    user_id,
    start_date_local,
    activity_type,
    activity_time,
    distance
  } = activity

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
  }, [])

  // metres/s to km/h
  const timeKm = toKmPerHour(activity_time, distance)

  // if imperialToggle the user wants imperialUnits
  const distanceMiles = metersToMiles(distance)
  const timeMiles = toMilesPerHour(activity_time, distance)
  // converting to km and minutes per mile or kilometer
  // min/mile
  const minPerMileFloat = toMinutesPer(timeMiles)
  const formattingMinMile = moment.duration(minPerMileFloat, 'm')
  const minPerMile = formattingMinMile.format('hh:mm:ss')
  // min/km
  const minPerKmFloat = toMinutesPer(timeKm)
  const formattingMinKm = moment.duration(minPerKmFloat, 'm')
  const minPerKm = formattingMinKm.format('hh:mm:ss')
  // min/km

  // to format seconds into hours minutes and seconds
  const duration = moment.duration(activity_time, 'seconds')
  const activityLength = duration.format('hh:mm:ss')

  return (
    <div className='card m-1'>
      <span className='material-icons share'>share</span>
      <div className='card__main'>
        <div className='card__main--left'>
          <img src={user.profile_image} alt='profile' />
          <span className='material-icons'>
            {activity_type === 'Run' ? 'directions_run' : 'directions_bike'}
          </span>
        </div>
        <div className='card__main--right'>
          <h3>
            <Link to={`/profile/${user_id}`}>{user.name}</Link>
          </h3>
          <small>
            <Moment format='MM-DD-YYYY hh:mm a' utc locale>
              {start_date_local}
            </Moment>
          </small>
          <h2>
            <Link
              to={`/activity/${id},${!imperialToggle ? 'metric' : 'imperial'}`}
            >
              {name ? name : activity_type}
            </Link>
          </h2>
          <div className='stats'>
            <div className='stats--item'>
              <small>Distance</small>
              <div className='stat'>
                {imperialToggle
                  ? distanceMiles + ' mi'
                  : distance / 1000 + ' km'}
              </div>
            </div>
            <div className='stats--item'>
              <small>Time</small>
              <div className='stat'>{activityLength}</div>
            </div>
            <div className='stats--item'>
              <small>Pace</small>
              <div className='stat'>
                {activity_type === 'Run'
                  ? imperialToggle
                    ? minPerMile + ' min/m'
                    : minPerKm + ' min/km'
                  : imperialToggle
                  ? timeMiles + ' mph'
                  : timeKm + ' km/h'}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card__footer'>
        <div className='card__footer--btns'>
          <button className='btn-small'>
            <span className='material-icons'>thumb_up</span>
          </button>
          <button className='btn-small'>
            <span className='material-icons'>comment</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
