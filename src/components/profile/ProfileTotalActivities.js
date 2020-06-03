import React from 'react'

const ProfileTotalActivities = ({ numberOfActivites }) => {
  console.log(numberOfActivites)
  return (
    <div className='total-activities'>
      <h4>Last 4 weeks</h4>
      <span>{numberOfActivites}</span>
      <h5>Total Acitivities</h5>
    </div>
  )
}

export default ProfileTotalActivities
