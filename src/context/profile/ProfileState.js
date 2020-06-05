import React, { useReducer } from 'react'
import ProfileContext from './profileContext'
import axios from 'axios'
import profileReducer from './profileReducer'
import { GET_PROFILE } from '../types'

const ProfileState = props => {
  const initialState = {
    profile: null
  }

  const [state, dispatch] = useReducer(profileReducer, initialState)

  // get profile
  const getUserProfile = async () => {
    try {
      const res = await axios.get(
        'https://agile-retreat-42559.herokuapp.com//api/v1/users'
      )
      dispatch({ type: GET_PROFILE, payload: res.data })
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }
  // get profile
  const getProfile = async id => {
    try {
      const res = await axios.get(
        `https://agile-retreat-42559.herokuapp.com//api/v1/users/${id}`
      )
      dispatch({ type: GET_PROFILE, payload: res.data })
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        getUserProfile,
        getProfile
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileState
