import React from 'react'
import TrainingCalendarSummaryGraph from '../datavisualization/TrainingCalendarSummaryGraph'
import TrainingCalendarSummaryText from './TrainingCalendarSummaryText'

const TrainingCalendarHeader = () => {
  return (
    <div>
      <TrainingCalendarSummaryGraph />
      <TrainingCalendarSummaryText />
    </div>
  )
}

export default TrainingCalendarHeader
