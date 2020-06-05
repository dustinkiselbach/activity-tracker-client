import React from 'react'
import { VictoryBar } from 'victory'

// function to get active time per week
const getWeeklyActivityTime = weeks => {
  let timePerWeek = []

  for (let i = 0; i < weeks.length; i++) {
    let time = 0
    for (let y = 0; y < weeks[i].length; y++) {
      time += weeks[i][y].data.activity_time
    }

    timePerWeek.push(time)
  }

  return timePerWeek
}

const ActivitiesSummaryGraph = ({ monthActivities: { weeks } }) => {
  const weeklyActivityTime = getWeeklyActivityTime(weeks)

  return (
    <div className='summary-graph'>
      <VictoryBar
        // padding={{ top: -10, bottom: -10 }}
        style={{ data: { fill: '#7c8e51', width: 15, stroke: '#414141' } }}
        data={weeklyActivityTime}
        reverse={true}
        invertAxis
      />
    </div>
  )
}

export default ActivitiesSummaryGraph
