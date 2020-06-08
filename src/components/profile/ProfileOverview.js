import React from 'react'
import DashboardCard from '../dashboard/DashboardCard'

const ProfileOverview = ({
  profile: { longest_run, longest_ride },
  imperialToggle
}) => {
  console.log(longest_run)
  return (
    <div className='longest'>
      <h2 className='title-secondary'>Longest Run</h2>
      <DashboardCard activity={longest_run} imperialToggle={imperialToggle} />
      <h2 className='title-secondary'>Longest Ride</h2>
      <DashboardCard activity={longest_ride} imperialToggle={imperialToggle} />
    </div>
  )
}

export default ProfileOverview
