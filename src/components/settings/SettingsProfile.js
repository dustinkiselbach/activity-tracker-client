import React from 'react'
import SettingsEditField from './SettingsEditField'

const fakeProfile = {
  name: 'farter mcgavin',
  birthday: '69/69/6969',
  gender: 'non-binary',
  location: 'tartsdale'
}

const SettingsProfile = () => {
  return (
    <>
      <h1 className='title'>My Profile</h1>
      <div className='edit'>
        <ul>
          {Object.keys(fakeProfile).map(item => (
            <SettingsEditField
              fakeProfile={fakeProfile}
              key={item}
              item={item}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default SettingsProfile
