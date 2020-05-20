import {
  REGISTER_USER,
  SET_CURRENT_USER,
  USER_ERROR,
  CLEAR_ERROR
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errors: {}
      }
    case USER_ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case CLEAR_ERROR:
      // THERE MUST BE A WAY TO DO THIS HAHAHAHAHAH
      return {
        ...state,
        errors: {}
      }
    default:
      return state
  }
}
