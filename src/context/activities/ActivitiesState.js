import React, { useReducer } from 'react'
import axios from 'axios'
import ActivitiesContext from './activitiesContext'
import activitiesReducer from './activitiesReducer'
import {
  GET_ACTIVITIES,
  GET_ACTIVITIES_PAGINATION,
  GET_ACTIVITY,
  SET_LOADING
} from '../types'

const ActivitiesState = props => {
  const initialState = {
    activities: [],
    pagination: {},
    activity: null,
    loading: false
  }

  const [state, dispatch] = useReducer(activitiesReducer, initialState)

  // Get all acitivities associated with logged in user
  const getActivities = async page => {
    // if lazy loading don't want loading icon every time
    if (page === 1) {
      setLoading()
    }

    try {
      const res = await axios.get(
        `https://agile-retreat-42559.herokuapp.com//api/v1/activities?page=${page}`
      )
      dispatch({ type: GET_ACTIVITIES, payload: res.data.activities })
      dispatch({
        type: GET_ACTIVITIES_PAGINATION,
        payload: res.data.pagination
      })
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
  const intergrateStrava = async (token, history) => {
    try {
      const res = await axios.post(
        `https://agile-retreat-42559.herokuapp.com//api/v1/auth?scope=read,activity:read_all,read_all&code=${token}`
      )
      // delayed to appear like its doing something and pushing
      setTimeout(() => {
        history.push('/dashboard')
      }, 1000)
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
        pagination: state.pagination,
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
