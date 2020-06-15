import React from 'react'
import TrainingCalendarGraph from '../datavisualization/TrainingCalendarGraph'

const TrainingCalendarItem = ({ label, activities, selected }) => {
  const { totals, month } = activities
  let unitLabel

  if (selected === 'activities') {
    unitLabel = 'activities'
  } else if (selected === 'distance') {
    unitLabel = totals.distance_unit
  } else if (selected === 'activity_time') {
    unitLabel = 'hours'
  }

  return (
    <div className='month'>
      <div className='month--label'>{label}</div>
      {totals[selected] > 0 && (
        <div className='month--metric'>
          <div className='stat'>
            {selected === 'activity_time' ? totals.hours : totals[selected]}
          </div>
          <small>{unitLabel}</small>
        </div>
      )}
      <TrainingCalendarGraph month={month} selected={selected} />
    </div>
  )
}

export default TrainingCalendarItem
