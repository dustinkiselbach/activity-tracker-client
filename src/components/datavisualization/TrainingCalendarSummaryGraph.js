import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'

const TrainingCalendarSummaryGraph = ({ weeksFormatted, selected }) => {
  const data = weeksFormatted.map(week => ({
    y: week[selected],
    x: week.week_number
  }))

  console.log(data)
  return (
    <div className='summary-graph'>
      <VictoryChart>
        <VictoryAxis
          style={{
            tickLabels: {
              fill: 'red',
              fontSize: 0
            }
          }}
        />
        <VictoryBar data={data} />
      </VictoryChart>
    </div>
  )
}

export default TrainingCalendarSummaryGraph
