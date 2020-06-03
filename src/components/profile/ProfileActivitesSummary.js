import React from 'react'
import { dateConversions } from '../../utils/dateConversions'
import ProfileTotalActivities from './ProfileTotalActivities'
import ProfileSummaryVisualization from './ProfileSummaryVisualization'

const ProfileActivitesSummary = ({ activities }) => {
  const monthActivities = dateConversions(activities[0])

  return (
    <>
      <ProfileTotalActivities
        numberOfActivites={monthActivities.month.length}
      />
      <ProfileSummaryVisualization monthActivities={monthActivities} />
    </>
  )
}

export default ProfileActivitesSummary
