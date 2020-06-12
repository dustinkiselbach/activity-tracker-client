import React from 'react'
import TrainingCalendarGraph from '../datavisualization/TrainingCalendarGraph'

const TrainingCalendarItem = ({ month, activities, selected }) => {
  return (
    <div className='month'>
      <div className='month__label'>{month}</div>
      <TrainingCalendarGraph activities={activities} selected={selected} />
    </div>
  )
}

export default TrainingCalendarItem
