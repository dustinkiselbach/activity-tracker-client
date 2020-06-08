import React from 'react'
import classnames from 'classnames'

const TextField = ({ name, title, type, onChange, error, value, info }) => {
  // added value on-6/08 may break something
  return (
    <div
      className='form__text'
      className={classnames('form__text', {
        // TODO change when errors are fixed
        'is-invalid': error
      })}
    >
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
      <label htmlFor={name}>{title}</label>
      {info && <small>{info}</small>}
      {error && <small>* {error}</small>}
    </div>
  )
}

export default TextField
