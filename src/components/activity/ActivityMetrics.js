import React, { useState } from 'react'
import Table from '../common/Table'
import AreaGraph from '../common/AreaGraph'

const ActivityMetrics = ({ activity }) => {
  const { splits } = activity

  const [hidden, setHidden] = useState([])

  // going to get laps.average_time ,  average_speed, elevation_difference

  const onClickHide = id => {
    if (hidden.findIndex(item => item.id === id) === -1) {
      setHidden([...hidden, { id }])
    }
  }

  return (
    <div className='activity-page__metrics m-2'>
      <Table splits={splits} />
      <AreaGraph splits={splits} hidden={hidden} />
      {/* <Graph splits={splits} /> */}
      <button onClick={() => onClickHide('avgHr')}>click hr</button>
      <button onClick={() => onClickHide('avgSpeed')}>click speed</button>
      <button onClick={() => onClickHide('avgElev')}>click elev</button>
    </div>
  )
}

export default ActivityMetrics
