import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import classnames from 'classnames'

const weekDays = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']

const ActivitiesSummaryTable = ({ monthActivities: { weeks } }) => {
  const now = moment()

  console.log(weeks)

  return (
    <table className='summary-table'>
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
              <td
                key={index}
                className={classnames(null, {
                  active: now.isSame(
                    now
                      .clone()
                      .subtract(bigI, 'w')
                      .weekday(index)
                  )
                })}
              >
                {now
                  .clone()
                  .subtract(bigI, 'w')
                  .weekday(index) <= now ? (
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
