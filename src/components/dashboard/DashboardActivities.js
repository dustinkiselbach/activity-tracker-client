import React from 'react'
import DashboardCard from './DashboardCard'

const DashboardActivities = ({ activities, user }) => {
  return (
    <div className='activities'>
      {activities.map(activity => (
        <DashboardCard key={activity.id} activity={activity} user={user} />
      ))}
    </div>
  )
}

export default DashboardActivities
