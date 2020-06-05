import React from 'react'
import DashboardCard from './DashboardCard'

const DashboardActivities = ({ activities, imperialToggle }) => {
  return (
    <>
      {activities.map(activity => (
        <DashboardCard
          key={activity.id}
          activity={activity}
          imperialToggle={imperialToggle}
        />
      ))}
    </>
  )
}

export default DashboardActivities
