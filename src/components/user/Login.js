import React, { useState, useContext } from 'react'
import TextField from '../common/TextField'
import UserContext from '../../context/user/userContext'

const Login = () => {
  const userContext = useContext(UserContext)
  const { loginUser } = userContext
  const [fields, setFields] = useState({ email: '', password: '' })

  const onChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(fields)
  }

  return (
    <div className='login-form my-2'>
      <h2 className='title-secondary'>Welcome Back</h2>
      <form className='form' onSubmit={onSubmit}>
        <TextField name='email' type='email' onChange={onChange} />
        <TextField name='password' type='password' onChange={onChange} />
        <button className='btn'>Login</button>
      </form>
      <div className='login-form__footer'>
        <small>Forgot your Password?</small>
      </div>
    </div>
  )
}

export default Login
