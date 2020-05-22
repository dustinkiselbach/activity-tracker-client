import { GET_ACTIVITIES, GET_ACTIVITY, SET_LOADING } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        loading: false
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
