import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../common/TextField'

const Login = ({ motion, variants, loginUser, errors, clearError }) => {
  const [fields, setFields] = useState({ email: '', password: '' })

  const onChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })

    if (errors[e.target.name]) {
      clearError(e.target.name)
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    loginUser(fields)
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants}
      className='login-form my-2'
    >
      <h2 className='title-secondary'>Welcome Back</h2>

      <form className='form' onSubmit={onSubmit}>
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
        <button className='btn'>Login</button>
      </form>
      <div className='login-form__footer'>
        <small>
          Forgot your Password?{' '}
          <Link to='/reset-password'>Reset your password</Link>
        </small>
      </div>
    </motion.div>
  )
}

export default Login
