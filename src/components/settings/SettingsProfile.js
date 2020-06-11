import React from 'react'
import SettingsEditField from './SettingsEditField'

const SettingsProfile = ({ profile, updateProfile, id }) => {
  return (
    <>
      <h1 className='title'>My Profile</h1>
      <div className='edit'>
        <ul>
          {Object.keys(profile).map(item => (
            <SettingsEditField
              profile={profile}
              key={item}
              item={item}
              updateProfile={updateProfile}
              id={id}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default SettingsProfile
