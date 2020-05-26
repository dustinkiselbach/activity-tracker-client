import React, { useEffect, useContext } from 'react'
import Login from '../user/Login'
import Register from '../user/Register'
import ConfirmEmail from '../user/ConfirmEmail'
import ResetPassword from '../user/ResetPassword'

import UserContext from '../../context/user/userContext'

import { motion, AnimatePresence } from 'framer-motion'

const transition = {
  duration: 0.2,
  ease: 'easeInOut'
}

const variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition
  },
  hidden: {
    x: -200,
    opacity: 0,
    transition
  },
  exit: {
    x: 200,
    opacity: 0,
    transition
  }
}

const FormPage = ({
  history,
  login,
  register,
  resetPassword,
  confirmEmail,
  match
}) => {
  const userContext = useContext(UserContext)
  const {
    loginUser,
    registerUser,
    sendResetEmail,
    resendConfirmation,
    isAuthenticated,
    finalResetPassword,
    errors,
    clearError
  } = userContext

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps,
  })

  return (
    <section className='login-page'>
      <AnimatePresence initial={false} exitBeforeEnter>
        {login && (
          <Login
            motion={motion}
            variants={variants}
            loginUser={loginUser}
            errors={errors}
            clearError={clearError}
            key='login'
          />
        )}
        {register && (
          <Register
            history={history}
            motion={motion}
            variants={variants}
            registerUser={registerUser}
            errors={errors}
            clearError={clearError}
            key='register'
          />
        )}
        {confirmEmail && (
          <ConfirmEmail
            motion={motion}
            variants={variants}
            match={match}
            resendConfirmation={resendConfirmation}
            key='confirm email'
          />
        )}
        {resetPassword && (
          <ResetPassword
            motion={motion}
            variants={variants}
            history={history}
            match={match}
            sendResetEmail={sendResetEmail}
            finalResetPassword={finalResetPassword}
            errors={errors}
            clearError={clearError}
            key='reset password'
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default FormPage
