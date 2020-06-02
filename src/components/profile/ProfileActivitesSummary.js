import React from 'react'
import moment from 'moment'
import { dateConversions } from '../../utils/dateConversions'

const ProfileActivitesSummary = ({ activities }) => {
  const monthAgo = moment()
    .subtract(28, 'd')
    .format('YYYY-MM-DD')

  const monthsActivities = activities[0].filter(
    activity =>
      moment(activity.start_date_local).format('YYYY-MM-DD') > monthAgo
  )

  const week1 = monthsActivities.filter(
    activity =>
      moment(activity.start_date_local).format('YYYY-MM-DD') >
      moment()
        .subtract(7, 'd')
        .format('YYYY-MM-DD')
  )

  const week2 = monthsActivities.filter(
    activity =>
      moment(activity.start_date_local).format('YYYY-MM-DD') >
        moment()
          .subtract(14, 'd')
          .format('YYYY-MM-DD') &&
      moment(activity.start_date_local).format('YYYY-MM-DD') <=
        moment()
          .subtract(7, 'd')
          .format('YYYY-MM-DD')
  )

  const week3 = monthsActivities.filter(
    activity =>
      moment(activity.start_date_local).format('YYYY-MM-DD') >
        moment()
          .subtract(21, 'd')
          .format('YYYY-MM-DD') &&
      moment(activity.start_date_local).format('YYYY-MM-DD') <=
        moment()
          .subtract(14, 'd')
          .format('YYYY-MM-DD')
  )

  const week4 = monthsActivities.filter(
    activity =>
      moment(activity.start_date_local).format('YYYY-MM-DD') >
        moment()
          .subtract(28, 'd')
          .format('YYYY-MM-DD') &&
      moment(activity.start_date_local).format('YYYY-MM-DD') <=
        moment()
          .subtract(21, 'd')
          .format('YYYY-MM-DD')
  )

  const x = dateConversions(activities[0])
  console.log(x.week1)
  console.log(x.week2)
  console.log(x.week3)
  console.log(x.week4)
  console.log(x.month)

  console.log(week1)
  console.log(week2)
  console.log(week3)
  console.log(week4)
  console.log(activities)
  console.log(monthsActivities)

  return <div>{monthsActivities.length}</div>
}

export default ProfileActivitesSummary
