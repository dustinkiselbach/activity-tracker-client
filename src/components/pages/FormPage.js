import React, { useEffect, useContext } from 'react'
import Login from '../user/Login'
import Register from '../user/Register'
import ConfirmEmail from '../user/ConfirmEmail'
import ResetPassword from '../user/ResetPassword'

import UserContext from '../../context/user/userContext'

import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -300, opacity: 0 },
  exit: { y: 300, opacity: 0 }
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
      history.push('/')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps,
  })

  return (
    <section className='login-page'>
      <AnimatePresence>
        {login && (
          <Login
            motion={motion}
            variants={variants}
            loginUser={loginUser}
            errors={errors}
            clearError={clearError}
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
          />
        )}
        {confirmEmail && (
          <ConfirmEmail
            motion={motion}
            variants={variants}
            match={match}
            resendConfirmation={resendConfirmation}
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
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default FormPage
