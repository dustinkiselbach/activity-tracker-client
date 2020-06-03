import React from 'react'
import ActivitiesSummaryTable from '../datavisualization/ActivitiesSummaryTable'
import ActivitiesSummaryGraph from '../datavisualization/ActivitiesSummaryGraph'

const ProfileSummaryVisualization = ({ monthActivities }) => {
  return (
    <div className='summary-visualization'>
      <ActivitiesSummaryTable monthActivities={monthActivities} />
      <ActivitiesSummaryGraph monthActivities={monthActivities} />
    </div>
  )
}

export default ProfileSummaryVisualization
