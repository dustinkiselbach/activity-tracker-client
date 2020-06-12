import moment from 'moment'

const weeklySummaryCalculator = weeks => {
  let formatted = []

  for (let i = 0; i < weeks.length; i++) {
    let distance = 0
    let activity_time = 0
    let week_number = i + 1
    let activities = 0

    for (let y = 0; y < weeks[i].length; y++) {
      distance += weeks[i][y].distance
      activity_time += weeks[i][y].activity_time
      activities++
    }
    formatted.push({ distance, activity_time, activities, week_number })
  }

  return formatted
}

const yearlySummaryCalculator = weeksFormatted => {
  let distance = 0
  let activity_time = 0
  let activities = 0

  for (let i = 0; i < weeksFormatted.length; i++) {
    distance += weeksFormatted[i].distance
    activity_time += weeksFormatted[i].activity_time
    activities += weeksFormatted[i].activities
  }

  return { distance, activity_time, activities }
}

const getDaysInMonths = (year, months) => {
  let monthsDays = []
  for (let i = 0; i < months.length; i++) {
    let days = moment(`${year}-${months[i] + 1}`).daysInMonth()
    monthsDays.push(days)
  }

  return monthsDays
}

const dailySummaryCalculator = monthsDaysArr => {
  let formatted = []

  for (let i = 0; i < monthsDaysArr.length; i++) {
    let month = []
    // totals for the month
    let totals = {
      distance: 0,
      activity_time: 0,
      activities: 0
    }
    for (let y = 0; y < monthsDaysArr[i].length; y++) {
      // calculating totals for each day
      let distance = 0
      let activity_time = 0
      let day_number = y + 1
      let activities = 0
      for (let j = 0; j < monthsDaysArr[i][y].length; j++) {
        distance += monthsDaysArr[i][y][j].distance
        activity_time += monthsDaysArr[i][y][j].activity_time
        activities++
      }
      // adding to total of the month
      totals.distance += distance
      totals.activity_time += activity_time
      totals.activities += activities
      month.push({ distance, activity_time, activities, day_number })
    }
    formatted.push({ totals, month })
  }
  return formatted
}

export const weekParser = (data, year) => {
  const weeksInYear = Array.from(Array(52), (e, i) => i + 1)
  const monthsInYear = Array.from(Array(12).keys())

  // map through and filter to organize by week
  const weeks = weeksInYear.map(week =>
    data.filter(item => moment(item.start_date_local).weeks() === week)
  )

  // gets the days in the month
  const monthsWithDayCount = getDaysInMonths(year, monthsInYear)
  // get arrays of each day of month
  const monthsWithDayArrays = monthsWithDayCount.map(month =>
    Array.from(Array(month), (e, i) => i + 1)
  )
  // map through and filter to get each activity assigned to day
  const monthsDaysActArr = monthsWithDayArrays.map((month, index) =>
    month.map(day =>
      data.filter(
        item =>
          moment(item.start_date_local).date() === day &&
          moment(item.start_date_local).month() === index
      )
    )
  )

  const monthsFormatted = dailySummaryCalculator(monthsDaysActArr)
  const weeksFormatted = weeklySummaryCalculator(weeks)
  const yearFormatted = yearlySummaryCalculator(weeksFormatted)

  return { weeksFormatted, yearFormatted, monthsFormatted }
}
