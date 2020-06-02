import {
  GET_ACTIVITIES,
  GET_ACTIVITY,
  GET_ACTIVITIES_PAGINATION,
  SET_LOADING
} from '../types'

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
        loading: false
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
