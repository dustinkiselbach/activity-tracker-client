import React, { useReducer } from 'react'
import UserContext from './userContext'
import userReducer from './userReducer'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {
  REGISTER_USER,
  SET_CURRENT_USER,
  USER_ERROR,
  CLEAR_ERROR
} from '../types'

const UserState = props => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    errors: {}
  }

  const [state, dispatch] = useReducer(userReducer, initialState)

  // Register User
  const registerUser = async (user, history) => {
    try {
      const res = await axios.post(
        'https://agile-retreat-42559.herokuapp.com//users',
        user
      )
      history.push('/confirm-email')
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.data.error
      })
    }
  }

  // Login User
  const loginUser = async userData => {
    try {
      const res = await axios.post(
        'https://agile-retreat-42559.herokuapp.com//users/sign_in',
        userData
      )
      // Get token out of headers
      const { authorization } = res.headers

      // Set token to ls
      localStorage.setItem('jwtToken', authorization)
      // Set token to Autu header
      setAuthToken(authorization)
      // Decode token to get user data
      const decoded = jwt_decode(authorization)

      console.log(res.data)
      // Set Current user
      setCurrentUser(decoded)
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.data.error
      })
    }
  }

  // Set logged in user
  const setCurrentUser = decoded => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    })
  }

  // clear error
  const clearError = errorType => {
    dispatch({
      type: CLEAR_ERROR,
      payload: errorType
    })
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        errors: state.errors,
        loginUser,
        clearError,
        registerUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
