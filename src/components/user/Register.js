import React, { useState, useEffect, useContext } from 'react'
import TextField from '../common/TextField'
import UserContext from '../../context/user/userContext'

const Register = ({ history }) => {
  const userContext = useContext(UserContext)
  const { registerUser, errors, clearError } = userContext
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const onChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })

    if (errors[e.target.name]) {
      clearError(e.target.name)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    registerUser(fields, history)
  }

  return (
    <div className='login-form my-2'>
      <h2 className='title-secondary'>Register</h2>
      <form className='form' onSubmit={onSubmit}>
        <TextField
          name='name'
          title='name'
          type='name'
          onChange={onChange}
          error={errors.name}
        />
        <TextField
          name='email'
          type='email'
          title='email'
          onChange={onChange}
          error={errors.email}
        />
        <TextField
          name='password'
          type='password'
          title='password'
          onChange={onChange}
          error={errors.password}
        />
        <TextField
          name='password_confirmation'
          type='password'
          title='confirm password'
          onChange={onChange}
          error={errors.password_confirmation}
        />
        <button className='btn'>Register</button>
      </form>
      <div className='login-form__footer'>
        <small>Forgot your Password?</small>
      </div>
    </div>
  )
}

export default Register
