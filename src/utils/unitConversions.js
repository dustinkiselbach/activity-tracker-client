export const metersToMiles = meters => {
  return Math.round((meters / 1609) * 100) / 100
}

export const toMilesPerHour = (meters, seconds) => {
  return Math.round((seconds / meters) * 2.237 * 100) / 100
}

export const toKmPerHour = (meters, seconds) => {
  return Math.round((seconds / meters) * 3.6 * 100) / 100
}

export const toMinutesPer = speed => {
  let x = 60 / speed
  // y = x.toString().split('.'),
  // z = parseFloat(`.${y[1]}`),
  // a = parseInt(y[0]) + z

  return x
}
