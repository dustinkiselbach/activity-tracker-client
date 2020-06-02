import moment from 'moment'

export const dateConversions = data => {
  let week1 = [],
    week2 = [],
    week3 = [],
    week4 = [],
    month = []

  for (let i = 0; i < data.length; i++) {
    if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >
      moment()
        .subtract(7, 'd')
        .format('YYYY-MM-DD')
    ) {
      week1.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    } else if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >
        moment()
          .subtract(14, 'd')
          .format('YYYY-MM-DD') &&
      moment(data[i].start_date_local).format('YYYY-MM-DD') <=
        moment()
          .subtract(7, 'd')
          .format('YYYY-MM-DD')
    ) {
      week2.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    } else if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >
        moment()
          .subtract(21, 'd')
          .format('YYYY-MM-DD') &&
      moment(data[i].start_date_local).format('YYYY-MM-DD') <=
        moment()
          .subtract(14, 'd')
          .format('YYYY-MM-DD')
    ) {
      week3.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    } else if (
      moment(data[i].start_date_local).format('YYYY-MM-DD') >
        moment()
          .subtract(28, 'd')
          .format('YYYY-MM-DD') &&
      moment(data[i].start_date_local).format('YYYY-MM-DD') <=
        moment()
          .subtract(21, 'd')
          .format('YYYY-MM-DD')
    ) {
      week4.push({
        data: data[i],
        weekDay: moment(data[i].start_date_local).day()
      })
    }
  }

  month.push(...week1, ...week2, ...week3, ...week4)

  return {
    week1,
    week2,
    week3,
    week4,
    month
  }
}
