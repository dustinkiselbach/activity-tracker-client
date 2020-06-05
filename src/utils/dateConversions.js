import moment from 'moment'

export const dateConversions = data => {
  let week1 = [],
    week2 = [],
    week3 = [],
    week4 = [],
    weeks = [],
    month = []

  // need to organize weeks starting on sunday
  const now = moment()
  const weekStart = now.clone().weekday(0)
  const difference = weekStart.diff(now, 'days')

  for (let i = 0; i < data.length; i++) {
    if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >=
      moment()
        .add(difference, 'd')
        .format('YYYY-MM-DD')
    ) {
      week1.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    } else if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >=
        moment()
          .subtract(7 - difference, 'd')
          .format('YYYY-MM-DD') &&
      moment(data[i].start_date_local).format('YYYY-MM-DD') <
        moment()
          .add(difference, 'd')
          .format('YYYY-MM-DD')
    ) {
      week2.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    } else if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >=
        moment()
          .subtract(14 - difference, 'd')
          .format('YYYY-MM-DD') &&
      moment(data[i].start_date_local).format('YYYY-MM-DD') <
        moment()
          .subtract(7 - difference, 'd')
          .format('YYYY-MM-DD')
    ) {
      week3.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    } else if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >=
        moment()
          .subtract(21 - difference, 'd')
          .format('YYYY-MM-DD') &&
      moment(data[i].start_date_local).format('YYYY-MM-DD') <
        moment()
          .subtract(14 - difference, 'd')
          .format('YYYY-MM-DD')
    ) {
      week4.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    }
  }
  weeks.push(week1, week2, week3, week4)

  month.push(...week1, ...week2, ...week3, ...week4)

  return {
    week1,
    week2,
    week3,
    week4,
    weeks,
    month
  }
}
