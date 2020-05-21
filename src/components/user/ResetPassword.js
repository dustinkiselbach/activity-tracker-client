import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '../common/TextField'

const ResetPassword = ({
  motion,
  variants,
  sendResetEmail,
  finalResetPassword,
  match,
  clearError,
  errors
}) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    reset_password_token: match.params.token
  })

  const onChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })

    if (errors[e.target.name]) {
      clearError(e.target.name)
    }
  }

  const onSubmit = e => {
    e.preventDefault()

    if (match.params.token) {
      finalResetPassword(fields)
    } else {
      sendResetEmail(fields.email)
    }
  }

  if (match.params.token) {
    return (
      <motion.div
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variants}
        className='login-form my-2'
      >
        <h2 className='title-secondary'>Reset Your Password</h2>

        <form className='form' onSubmit={onSubmit}>
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

          <button className='btn'>Reset Password</button>
        </form>
        <div className='login-form__footer'>
          <small>
            If you haven't yet registered <Link to='/register'>click here</Link>
          </small>
        </div>
      </motion.div>
    )
  } else {
    return (
      <motion.div
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variants}
        className='login-form my-2'
      >
        <h2 className='title-secondary'>Reset Your Password</h2>

        <form className='form' onSubmit={onSubmit}>
          <TextField
            name='email'
            type='email'
            title='email'
            error={errors.email}
            onChange={onChange}
          />

          <button className='btn'>Send Email</button>
        </form>
        <div className='login-form__footer'>
          <small>
            If you haven't yet registered <Link to='/register'>click here</Link>
          </small>
        </div>
      </motion.div>
    )
  }
}

export default ResetPassword
