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

export const weekParser = data => {
  const weeksInYear = Array.from(Array(52), (e, i) => i + 1)
  const monthsInYear = Array.from(Array(12).keys())

  // map through and filter to organize by week
  const weeks = weeksInYear.map(week =>
    data.filter(item => moment(item.start_date_local).weeks() === week)
  )
  // map through and filter to organize by month
  const months = monthsInYear.map(month =>
    data.filter(item => moment(item.start_date_local).month() === month)
  )

  const monthsFormatted = months.map(month => month.reverse())

  const weeksFormatted = weeklySummaryCalculator(weeks)
  const yearFormatted = yearlySummaryCalculator(weeksFormatted)

  return { weeksFormatted, yearFormatted, monthsFormatted }
}
