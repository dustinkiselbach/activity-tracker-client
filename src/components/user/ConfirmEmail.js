import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmEmail = () => {
  return (
    <div className='confirm-email my-2'>
      <div className='confirm-email__top'>
        <h1 className='title'>Thank you for registering</h1>
        <p className='lead'>
          We have sent you an email for account verification
        </p>
      </div>

      <Link to='/login' className='btn'>
        Login
      </Link>
    </div>
  )
}

export default ConfirmEmail
