import {
  GET_ACTIVITIES,
  GET_ACTIVITY,
  GET_ACTIVITIES_PAGINATION,
  SET_LOADING,
  PARSE_ACTIVITY_RUN_METRIC,
  PARSE_ACTIVITY_RUN_IMPERIAL,
  PARSE_ACTIVITY_RIDE_METRIC,
  PARSE_ACTIVITY_RIDE_IMPERIAL
} from '../types'
import {
  metersToMiles,
  toMilesPerHour,
  toMinutesPer,
  secondsToTime,
  minutesToTime,
  toKmPerHour
} from '../../utils/unitConversions'

export default (state, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: [...state.activities, action.payload],
        loading: false
      }
    case GET_ACTIVITIES_PAGINATION:
      return {
        ...state,
        pagination: action.payload
      }
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        loading: false,
        activityParsed: false
      }
    // parsing activites
    // IMPERIAL RUN
    case PARSE_ACTIVITY_RUN_IMPERIAL:
      return {
        ...state,
        activityParsed: true,
        activity: {
          activity: {
            ...state.activity.activity,
            activity_time: secondsToTime(state.activity.activity.activity_time),
            distance: metersToMiles(state.activity.activity.distance),
            pace: minutesToTime(
              toMinutesPer(
                toMilesPerHour(
                  state.activity.activity.activity_time,
                  state.activity.activity.distance
                )
              )
            ),
            paceUnit: 'min/m',
            distanceUnit: 'miles'
          },
          splits: state.activity.splits.map(split => ({
            ...split,
            distance: metersToMiles(split.distance),
            average_speed: toMinutesPer(
              toMilesPerHour(split.elapsed_time, split.distance)
            ),
            pace: minutesToTime(
              toMinutesPer(toMilesPerHour(split.elapsed_time, split.distance))
            )
          }))
        }
      }
    // METRIC RUN
    case PARSE_ACTIVITY_RUN_METRIC:
      return {
        ...state,
        activityParsed: true,
        activity: {
          activity: {
            ...state.activity.activity,
            activity_time: secondsToTime(state.activity.activity.activity_time),
            distance: state.activity.activity.distance / 1000,
            pace: minutesToTime(
              toMinutesPer(
                toKmPerHour(
                  state.activity.activity.activity_time,
                  state.activity.activity.distance
                )
              )
            ),
            paceUnit: 'min/km',
            distanceUnit: 'km'
          },
          splits: state.activity.splits.map(split => ({
            ...split,
            distance: split.distance / 1000,
            average_speed: toMinutesPer(
              toKmPerHour(split.elapsed_time, split.distance)
            ),
            pace: minutesToTime(
              toMinutesPer(toKmPerHour(split.elapsed_time, split.distance))
            )
          }))
        }
      }
    // IMPERIAL RIDE
    case PARSE_ACTIVITY_RIDE_IMPERIAL:
      return {
        ...state,
        activityParsed: true,
        activity: {
          activity: {
            ...state.activity.activity,
            activity_time: secondsToTime(state.activity.activity.activity_time),
            distance: metersToMiles(state.activity.activity.distance),
            pace: toMilesPerHour(
              state.activity.activity.activity_time,
              state.activity.activity.distance
            ),

            paceUnit: 'mph',
            distanceUnit: 'mi'
          },
          splits: state.activity.splits.map(split => ({
            ...split,
            distance: metersToMiles(split.distance),
            average_speed: toMilesPerHour(split.elapsed_time, split.distance),
            pace: toMilesPerHour(split.elapsed_time, split.distance)
          }))
        }
      }
    // METRIC RIDE
    case PARSE_ACTIVITY_RIDE_METRIC:
      return {
        ...state,
        activityParsed: true,
        activity: {
          activity: {
            ...state.activity.activity,
            activity_time: secondsToTime(state.activity.activity.activity_time),
            distance: state.activity.activity.distance / 1000,
            pace: toKmPerHour(
              state.activity.activity.activity_time,
              state.activity.activity.distance
            ),

            paceUnit: 'km/h',
            distanceUnit: 'km'
          },
          splits: state.activity.splits.map(split => ({
            ...split,
            distance: split.distance / 1000,
            average_speed: toKmPerHour(split.elapsed_time, split.distance),
            pace: toKmPerHour(split.elapsed_time, split.distance)
          }))
        }
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
