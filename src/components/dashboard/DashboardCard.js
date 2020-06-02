import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import moment from 'moment'
import {
  metersToMiles,
  toMilesPerHour,
  toKmPerHour,
  toMinutesPer
} from '../../utils/unitConversions'

const DashboardCard = ({ activity, user, imperialToggle }) => {
  const {
    name,
    id,
    start_date_local,
    activity_type,
    activity_time,
    distance
  } = activity

  // metres/s to km/h
  const timeKm = toKmPerHour(activity_time, distance)

  // if imperialToggle the user wants imperialUnits
  const distanceMiles = metersToMiles(distance)
  const timeMiles = toMilesPerHour(activity_time, distance)
  // converting to km and minutes per mile or kilometer
  const minPerMile = toMinutesPer(timeMiles)
  const minPerKm = toMinutesPer(timeKm)
  // to format seconds into hours minutes and seconds
  const duration = moment.duration(activity_time, 'seconds')
  const activityLength = duration.format('hh:mm:ss')

  return (
    <div className='card m-1'>
      <span className='material-icons share'>share</span>
      <div className='card__main'>
        <div className='card__main--left'>
          <img src='http://203.153.40.19/bct/img/user.png' alt='profile' />
          <span className='material-icons'>
            {activity_type === 'Run' ? 'directions_run' : 'directions_bike'}
          </span>
        </div>
        <div className='card__main--right'>
          <h3>{user.name ? user.name : 'why no name??'}</h3>
          <small>
            <Moment format='MM-DD-YYYY hh:mm a'>{start_date_local}</Moment>
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
