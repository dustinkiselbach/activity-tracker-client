import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmEmail = ({ motion, variants, resendConfirmation, match }) => {
  const onResendClick = e => {
    e.preventDefault()
    resendConfirmation(match.params.email)
  }
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants}
      className='confirm-email my-2'
    >
      <div className='confirm-email__top'>
        <h1 className='title'>Thank you for registering</h1>
        <p className='lead'>
          We have sent you an email for account verification
        </p>
      </div>
      <div className='confirm-email__bottom'>
        <small>
          If you have not yet recieved an email{' '}
          <a href='/#' onClick={onResendClick}>
            click here to resend
          </a>{' '}
        </small>
        <Link to='/login' className='btn'>
          Login
        </Link>
      </div>
    </motion.div>
  )
}

export default ConfirmEmail
