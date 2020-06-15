import React from 'react'
import TrainingCalendarSummaryItem from './TrainingCalendarSummaryItem'

const TrainingCalendarSummaryText = ({
  yearFormatted,
  changeSelected,
  selected
}) => {
  const { distance, distance_unit, activities, hours } = yearFormatted

  return (
    <div className='summary-text'>
      <TrainingCalendarSummaryItem
        type='activity_time'
        stat={hours}
        unit='hours'
        changeSelected={changeSelected}
        selected={selected}
      />

      <TrainingCalendarSummaryItem
        type='distance'
        stat={distance}
        unit={distance_unit}
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
