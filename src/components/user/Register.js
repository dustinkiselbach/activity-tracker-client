import React, { useState } from 'react'
import TextField from '../common/TextField'
import { Link } from 'react-router-dom'

const Register = ({
  history,
  motion,
  variants,
  registerUser,
  errors,
  clearError
}) => {
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
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants}
      className='login-form my-2'
    >
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
        <small>
          If you have already registered <Link to='/login'>Sign in</Link>
        </small>
      </div>
    </motion.div>
  )
}

export default Register
