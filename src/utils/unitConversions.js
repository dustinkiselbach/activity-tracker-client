import moment from 'moment'

export const metersToMiles = meters => {
  return Math.round((meters / 1609) * 100) / 100
}

export const toMilesPerHour = (seconds, meters) => {
  return Math.round((meters / seconds) * 2.237 * 100) / 100
}

export const toKmPerHour = (seconds, meters) => {
  return Math.round((meters / seconds) * 3.6 * 100) / 100
}

// speed must be in miles or km per hour
export const toMinutesPer = speed => {
  let x = 60 / speed
  // y = x.toString().split('.'),
  // z = parseFloat(`.${y[1]}`),
  // a = parseInt(y[0]) + z

  return x
}

export const secondsToTime = seconds => {
  const duration = moment.duration(seconds, 'seconds')
  return duration.format('hh:mm:ss')
}

export const minutesToTime = minutes => {
  const duration = moment.duration(minutes, 'minutes')
  return duration.format('hh:mm:ss')
}

export const secondsToHours = seconds => {
  const duration = moment.duration(seconds, 'seconds')

  return duration.hours()
}
