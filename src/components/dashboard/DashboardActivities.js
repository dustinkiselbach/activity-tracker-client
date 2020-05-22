import React from 'react'
import DashboardCard from './DashboardCard'

const DashboardActivities = ({ activities, user, imperialToggle }) => {
  return (
    <div className='activities'>
      {activities.map(activity => (
        <DashboardCard
          key={activity.id}
          activity={activity}
          user={user}
          imperialToggle={imperialToggle}
        />
      ))}
    </div>
  )
}

export default DashboardActivities
