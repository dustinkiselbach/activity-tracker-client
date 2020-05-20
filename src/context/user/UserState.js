import React, { useReducer } from 'react'
import UserContext from './userContext'
import userReducer from './userReducer'
import axios from 'axios'
import { LOGIN_USER } from '../types'

const UserState = props => {
  const initialState = {
    user: null
  }

  const [state, dispatch] = useReducer(userReducer, initialState)

  // Login User
  const loginUser = async userData => {
    const user = { user: userData }
    console.log(user)
    try {
      const res = await axios({
        method: 'post',
        url: 'https://agile-retreat-42559.herokuapp.com//users/sign_in',
        data: user
      })

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loginUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
