import React from 'react'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryContainer
} from 'victory'
import moment from 'moment'

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
  weeklyActivityTime.reverse()
  const data = weeklyActivityTime.map((item, index) => ({
    y: item,
    x: index
  }))

  return (
    <div className='summary-graph'>
      <VictoryChart
        height={250}
        width={200}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
            tickLabels: { fill: 'transparent' }
          }}
        />
        <VictoryBar
          horizontal
          barWidth={16}
          style={{
            data: {
              fill: '#7c8e51',
              stroke: '#414141',
              fillOpacity: 0.75,
              strokeWidth: 1
            },
            labels: {
              fontSize: 10,
              fontWeight: 400,
              fontFamily: "'Jost', sans-serif"
            }
          }}
          barRatio={0.8}
          data={data}
          labels={({ datum }) => {
            let duration = moment.duration(datum.y, 'seconds')
            let activityLength = duration.format('hh:mm:ss')

            return `${activityLength}`
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default ActivitiesSummaryGraph
