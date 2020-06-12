import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis, Bar } from 'victory'
import { graphStyle } from '../style/graphStyle'

const TrainingCalendarSummaryGraph = ({ weeksFormatted, selected }) => {
  const data = weeksFormatted.map(week => ({
    y: week[selected],
    x: week.week_number
  }))

  const style = graphStyle()

  return (
    <div className='summary-graph'>
      <VictoryChart height={127}>
        <VictoryAxis style={style.csMainAxis} label='52 weeks' />
        <VictoryBar
          style={style.csBar}
          data={data}
          barRatio={0.8}
          dataComponent={<Bar transform='translate(0, -2)' />}
        />
      </VictoryChart>
    </div>
  )
}

export default TrainingCalendarSummaryGraph
