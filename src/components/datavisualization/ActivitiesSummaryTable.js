import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import classnames from 'classnames'

const weekDays = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']

const ActivitiesSummaryTable = ({ monthActivities: { weeks } }) => {
  const now = moment()

  console.log(weeks)
  return (
    <table className='summary-visualization__table'>
      <thead>
        <tr>
          {weekDays.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, bigI) => (
          <tr key={bigI}>
            {weekDays.map((day, index) => (
              <td key={index}>
                {now
                  .clone()
                  .subtract(bigI, 'w')
                  .weekday(index) < now ? (
                  <>
                    <Moment format='DD'>
                      {now
                        .clone()
                        .subtract(bigI, 'w')
                        .weekday(index)}
                    </Moment>
                    {week.filter(item => item.weekDay === index).length > 0 ? (
                      <span className='material-icons filled'>check_box</span>
                    ) : (
                      <span className='material-icons'>
                        check_box_outline_blank
                      </span>
                    )}
                  </>
                ) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ActivitiesSummaryTable

{
  /* <table className='splits-table'>
      <caption>Splits</caption>
      <thead>
        <tr>
          <th>mile</th>
          <th>pace</th>
          <th>hr</th>
          <th>elev</th>
        </tr>
      </thead>
      <tbody>
        {splits.map(split => (
          <tr key={split.split}>
            <th>{split.split}</th>
            <th>{split.average_speed} m/s</th>
            <th>{Math.round(split.average_heartrate)} bpm</th>
            <th>{split.elevation_difference} m</th>
          </tr>
        ))}
      </tbody>
    </table> */
}
