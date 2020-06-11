import React, { useContext, useEffect } from 'react'
import SettingsNav from './SettingsNav'
import SettingsProfile from './SettingsProfile'
import ProfileContext from '../../context/profile/profileContext'

const Settings = () => {
  const profileContext = useContext(ProfileContext)

  const { profile, getUserProfile, updateProfile } = profileContext
  // can only update name, email weight height
  const updatableProfile = {
    name: profile.name,
    email: profile.email,
    weight: profile.weight,
    height: profile.height
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <section className='settings'>
      <SettingsNav />
      <div className='settings-main'>
        <SettingsProfile
          profile={updatableProfile}
          updateProfile={updateProfile}
          id={profile.id}
        />
      </div>
    </section>
  )
}

export default Settings
