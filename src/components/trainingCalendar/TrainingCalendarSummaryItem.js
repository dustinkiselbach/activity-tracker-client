import React from 'react'
import classnames from 'classnames'

const TrainingCalendarSummaryItem = ({
  type,
  stat,
  unit,
  changeSelected,
  selected
}) => {
  return (
    <div className='summary-text--item'>
      <div
        onClick={() => changeSelected(type)}
        className={classnames('stat', {
          selected: selected === type
        })}
      >
        {stat}
      </div>
      <small>{unit}</small>
    </div>
  )
}

export default TrainingCalendarSummaryItem
