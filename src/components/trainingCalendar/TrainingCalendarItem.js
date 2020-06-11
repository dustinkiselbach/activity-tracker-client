import React from 'react'
import TrainingCalendarGraph from '../datavisualization/TrainingCalendarGraph'

const TrainingCalendarItem = ({ month, activities, selected }) => {
  console.log(activities)
  return (
    <div className='month'>
      <div className='month__label'>{month}</div>
      <TrainingCalendarGraph activities={activities} selcted={selected} />
    </div>
  )
}

export default TrainingCalendarItem
