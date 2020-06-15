import React, { useState } from 'react'
import TextField from '../common/TextField'
import classnames from 'classnames'

const SettingsEditField = ({ item, profile, id, updateProfile }) => {
  const [clicked, setClicked] = useState(false)
  const [field, setField] = useState({ [item]: profile[item] })
  const [success, setSuccess] = useState(false)

  const onChange = e => {
    setField({ [item]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    updateProfile(field)
    setClicked(c => false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 2500)
  }

  return (
    <li
      className={classnames(null, {
        active: clicked,
        success
      })}
      onClick={() => !clicked && setClicked(c => true)}
    >
      <h4>{item}: </h4>
      {!clicked ? (
        <>
          <span>{profile[item]}</span>
          <span className='material-icons edit'>edit</span>
        </>
      ) : (
        <>
          <TextField name={item} onChange={onChange} value={field[item]} />
          <button onClick={onSubmit} className='btn'>
            save
          </button>

          <span
            onClick={() => {
              return setClicked(false)
            }}
            className='material-icons close'
          >
            close
          </span>
        </>
      )}
    </li>
  )
}

export default SettingsEditField
