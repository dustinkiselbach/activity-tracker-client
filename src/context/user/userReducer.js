import { LOGIN_USER } from '../types'

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state
  }
}
