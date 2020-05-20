import React from 'react'

const TextField = ({ name, type, onChange }) => {
  return (
    <div className='form__text '>
      <input type={type} name={name} onChange={onChange} required />
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

export default TextField
