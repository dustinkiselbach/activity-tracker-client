import {
  SET_CURRENT_USER,
  USER_ERROR,
  REGISTER_USER,
  CLEAR_ERROR,
  SET_AUTHENTICATING
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length > 0 ? true : false,
        user: action.payload,
        loading: false,
        authenticating: false,
        errors: {}
      }
    case USER_ERROR:
      return {
        ...state,
        errors: action.payload,
        authenticating: false
      }
    case CLEAR_ERROR:
      // This is janky not sure of a solution
      let newErrors = { ...state.errors }
      newErrors[action.payload] = undefined
      return {
        ...state,
        errors: newErrors
      }
    case SET_AUTHENTICATING:
      return {
        ...state,
        authenticating: true
      }
    case REGISTER_USER:
      return {
        ...state,
        authenticating: false
      }
    default:
      return state
  }
}
