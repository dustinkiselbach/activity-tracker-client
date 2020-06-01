import React from 'react'
import { Link } from 'react-router-dom'
import SidebarGraph from '../common/SidebarGraph'

const DashboardSidebar = ({ user, activities, imperialToggle }) => {
  const latestActivity = activities[0]

  const last7Activities = activities.slice(0, 7)

  return (
    <div className='sidebar__main my-2'>
      <img src='http://203.153.40.19/bct/img/user.png' alt='' />
      <h3>
        <Link to='/profile'>{user.email}</Link>
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

      <div className='graph'>
        <SidebarGraph last7Activities={last7Activities} />
      </div>
    </div>
  )
}

export default DashboardSidebar
