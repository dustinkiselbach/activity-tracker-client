import React from 'react'
import TrainingCalendarSummaryGraph from '../datavisualization/TrainingCalendarSummaryGraph'
import TrainingCalendarSummaryText from './TrainingCalendarSummaryText'

const TrainingCalendarHeader = ({
  activitiesForCalendar: { yearFormatted, weeksFormatted },
  changeSelected,
  selected
}) => {
  return (
    <div className='calendar-page__header'>
      <TrainingCalendarSummaryText
        yearFormatted={yearFormatted}
        changeSelected={changeSelected}
        selected={selected}
      />
      <TrainingCalendarSummaryGraph
        weeksFormatted={weeksFormatted}
        selected={selected}
      />
    </div>
  )
}

export default TrainingCalendarHeader
