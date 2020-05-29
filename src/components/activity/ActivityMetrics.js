import React, { useState } from 'react'
import Table from '../common/Table'
import Toggler from '../common/Toggler'
import Graph from '../common/Graph'

const ActivityMetrics = ({ activity }) => {
  const { splits } = activity

  const [shown, setShown] = useState([{ id: 'avgHr' }])

  const togglers = [
    { id: 'avgHr', name: 'heartrate' },
    { id: 'avgSpeed', name: 'speed' },
    { id: 'avgElev', name: 'elevation' }
  ]

  const onClickShow = id => {
    if (shown.findIndex(item => item.id === id) === -1) {
      setShown([...shown, { id }])
    } else {
      setShown(shown.filter(item => item.id !== id))
    }
  }

  return (
    <div className='activity-page__metrics m-2'>
      <Table splits={splits} />
      <Graph splits={splits} shown={shown} />
      {/* <Graph splits={splits} /> */}
      <div className='togglers'>
        {togglers.map(toggler => (
          <React.Fragment key={toggler.id}>
            <Toggler
              toggle={shown.findIndex(item => item.id === toggler.id) !== -1}
              onClick={() => onClickShow(toggler.id)}
            />
            <span className='toggler-name'>{toggler.name}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ActivityMetrics
