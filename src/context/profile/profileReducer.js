import { GET_PROFILE, CHANGE_UNIT_PREFERENCE, GET_BIOMETRICS } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case GET_BIOMETRICS:
      return {
        ...state,
        biometrics: action.payload
      }
    case CHANGE_UNIT_PREFERENCE:
      return {
        ...state,
        imperialToggle: !state.imperialToggle
      }
    default:
      return state
  }
}
