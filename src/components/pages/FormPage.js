import React from 'react'
import Login from '../user/Login'
import Register from '../user/Register'
import ConfirmEmail from '../user/ConfirmEmail'

const FormPage = ({ history, login, register, confirmEmail }) => {
  return (
    <section className='login-page'>
      {login && <Login history={history} />}
      {register && <Register history={history} />}
      {confirmEmail && <ConfirmEmail />}
    </section>
  )
}

export default FormPage
