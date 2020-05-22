import { SET_CURRENT_USER, USER_ERROR, CLEAR_ERROR } from '../types'

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length > 0 ? true : false,
        user: action.payload,
        loading: false,
        errors: {}
      }
    case USER_ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case CLEAR_ERROR:
      // This is janky not sure of a solution
      let newErrors = { ...state.errors }
      newErrors[action.payload] = undefined
      return {
        ...state,
        errors: newErrors
      }

    default:
      return state
  }
}
