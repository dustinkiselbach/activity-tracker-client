import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { dateConversions } from '../../utils/dateConversions'
import { metersToMiles } from '../../utils/unitConversions'
import classnames from 'classnames'
import SidebarGraph from '../datavisualization/SidebarGraph'

const DashboardSidebar = ({ profile, activities, imperialToggle }) => {
  const [shownGraph, setShownGraph] = useState('distance')

  const latestActivity = activities[0]
  const { profile_image, email } = profile

  const monthActivities = dateConversions(activities)
  const { week1 } = monthActivities
  // get total distance
  const weeklyDistance = week1.reduce(
    (acc, index) => acc + index.data.distance,
    0
  )
  // parse weekly distance
  const weeklyMiles = metersToMiles(weeklyDistance)
  const weeklyKm = weeklyDistance / 1000

  return (
    <div className='sidebar__main my-2'>
      <div className='img-container'>
        <img src={profile_image} alt='' />
      </div>
      <h3>
        <Link to='/profile'>{email}</Link>
      </h3>

      <div className='latest-activity'>
        <h4>Latest Activity:</h4>
        <Link
          to={`/activity/${latestActivity.id},${
            !imperialToggle ? 'metric' : 'imperial'
          }`}
        >
          {latestActivity.name
            ? latestActivity.name
            : latestActivity.activity_type}
        </Link>
      </div>
      <div className='icons'>
        <span
          onClick={() => setShownGraph('distance')}
          className={classnames('material-icons', {
            active: shownGraph === 'distance'
          })}
        >
          poll
        </span>
        <span
          onClick={() => setShownGraph('effort')}
          className={classnames('material-icons', {
            active: shownGraph === 'effort'
          })}
        >
          assignment
        </span>
      </div>

      <div className='graph'>
        {shownGraph === 'distance' ? (
          <>
            <h4>{!imperialToggle ? `${weeklyKm} Km` : `${weeklyMiles} Mi`}</h4>
            <SidebarGraph week1={week1} />
          </>
        ) : (
          <h4>coming soon!</h4>
        )}
      </div>
    </div>
  )
}

export default DashboardSidebar
