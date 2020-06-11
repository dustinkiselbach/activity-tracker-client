import React from 'react'
import TrainingCalendarSummaryItem from './TrainingCalendarSummaryItem'

const TrainingCalendarSummaryText = ({
  yearFormatted,
  changeSelected,
  selected
}) => {
  const { distance, activity_time, activities } = yearFormatted

  return (
    <div className='summary-text'>
      <TrainingCalendarSummaryItem
        type='activity_time'
        stat={activity_time}
        unit='hours'
        changeSelected={changeSelected}
        selected={selected}
      />

      <TrainingCalendarSummaryItem
        type='distance'
        stat={distance}
        unit='miles'
        changeSelected={changeSelected}
        selected={selected}
      />

      <TrainingCalendarSummaryItem
        type='activities'
        stat={activities}
        unit='activities'
        changeSelected={changeSelected}
        selected={selected}
      />
    </div>
  )
}

export default TrainingCalendarSummaryText
