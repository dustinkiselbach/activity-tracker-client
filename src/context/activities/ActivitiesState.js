import React, { useReducer } from 'react'
import axios from 'axios'
import ActivitiesContext from './activitiesContext'
import activitiesReducer from './activitiesReducer'
import { GET_ACTIVITIES, GET_ACTIVITY, SET_LOADING } from '../types'

const ActivitiesState = props => {
  const initialState = {
    activities: [],
    activity: null,
    loading: false
  }

  const [state, dispatch] = useReducer(activitiesReducer, initialState)

  // Get all acitivities associated with logged in user
  const getActivities = async () => {
    setLoading()

    try {
      const res = await axios.get(
        'https://agile-retreat-42559.herokuapp.com//api/v1/activities'
      )
      dispatch({ type: GET_ACTIVITIES, payload: res.data.activities })
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  // get activity by id
  const getActivity = async id => {
    try {
      const res = await axios.get(
        `https://agile-retreat-42559.herokuapp.com//api/v1/activities/${id}`
      )
      dispatch({ type: GET_ACTIVITY, payload: res.data })
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  // Sync activities
  const syncActivities = async () => {
    try {
      const res = await axios.post(
        'https://agile-retreat-42559.herokuapp.com//api/v1/activities'
      )
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  // intergrate with strava
  const intergrateStrava = async token => {
    try {
      const res = await axios.post(
        `https://agile-retreat-42559.herokuapp.com//api/v1/auth?scope=read,activity:read&code=${token}`
      )
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  // Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  return (
    <ActivitiesContext.Provider
      value={{
        activities: state.activities,
        activity: state.activity,
        loading: state.loading,
        getActivities,
        getActivity,
        syncActivities,
        intergrateStrava
      }}
    >
      {props.children}
    </ActivitiesContext.Provider>
  )
}

export default ActivitiesState
