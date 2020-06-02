import React from 'react'
import DashboardCard from './DashboardCard'

const DashboardActivities = ({ activities, user, imperialToggle }) => {
  return (
    <>
      {activities.map(activity => (
        <DashboardCard
          key={activity.id}
          activity={activity}
          user={user}
          imperialToggle={imperialToggle}
        />
      ))}
    </>
  )
}

export default DashboardActivities
