import React from 'react'
import ActivitiesSummaryTable from '../datavisualization/ActivitiesSummaryTable'
import ActivitiesSummaryGraph from '../datavisualization/ActivitiesSummaryGraph'

const ProfileSummaryVisualization = ({ monthActivities }) => {
  return (
    <>
      <ActivitiesSummaryTable monthActivities={monthActivities} />
      <ActivitiesSummaryGraph monthActivities={monthActivities} />
    </>
  )
}

export default ProfileSummaryVisualization
