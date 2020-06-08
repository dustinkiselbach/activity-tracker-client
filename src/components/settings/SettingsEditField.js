import React, { useState } from 'react'
import TextField from '../common/TextField'
import classnames from 'classnames'

const SettingsEditField = ({ item, fakeProfile }) => {
  const [clicked, setClicked] = useState(false)
  const [field, setField] = useState({ [item]: fakeProfile[item] })

  const onChange = e => {
    setField({ [item]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    console.log(field)
  }

  return (
    <li
      className={classnames(null, {
        active: clicked
      })}
      onClick={() => setClicked(c => true)}
    >
      {item}:{' '}
      {!clicked ? (
        <>
          <span>{fakeProfile[item]}</span>
          <span className='material-icons'>edit</span>
        </>
      ) : (
        <>
          <TextField name={item} onChange={onChange} value={field[item]} />
          <button onClick={onSubmit} className='btn'>
            save
          </button>
          <span>X</span>
        </>
      )}
    </li>
  )
}

export default SettingsEditField
