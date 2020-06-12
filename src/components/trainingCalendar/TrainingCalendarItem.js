import React from 'react'
import TrainingCalendarGraph from '../datavisualization/TrainingCalendarGraph'

const TrainingCalendarItem = ({ label, activities, selected }) => {
  const { totals, month } = activities

  return (
    <div className='month'>
      <div className='month--label'>{label}</div>
      {totals[selected] > 0 && (
        <div className='month--metric'>
          <div className='stat'>{totals[selected]}</div>
          <small>{selected}</small>
        </div>
      )}
      <TrainingCalendarGraph month={month} selected={selected} />
    </div>
  )
}

export default TrainingCalendarItem
