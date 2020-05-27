import React from 'react'
import Table from '../common/Table'
import Graph from '../common/Graph'

const ActivityMetrics = ({ activity }) => {
  const { splits } = activity

  // going to get laps.average_time ,  average_speed, elevation_difference

  return (
    <div className='activity-page__metrics m-2'>
      <Table splits={splits} />
      <Graph splits={splits} />
    </div>
  )
}

export default ActivityMetrics
