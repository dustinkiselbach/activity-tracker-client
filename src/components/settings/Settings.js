import React, { useState, useContext, useEffect } from 'react'
import SettingsNav from './SettingsNav'
import SettingsProfile from './SettingsProfile'
import ProfileContext from '../../context/profile/profileContext'
import SettingsDisplay from './SettingsDisplay'
import SettingsAccount from './SettingsAccount'

const navItems = [
  {
    title: 'My Profile',
    id: 'profile'
  },
  {
    title: 'My Account',
    id: 'account'
  },
  {
    title: 'Display Preferences',
    id: 'display'
  }
]

const Settings = () => {
  const [selected, setSelected] = useState('profile')

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
      <SettingsNav
        navItems={navItems}
        setSelected={setSelected}
        selected={selected}
      />
      <div className='settings-main'>
        {selected === 'profile' && (
          <SettingsProfile
            profile={updatableProfile}
            updateProfile={updateProfile}
            id={profile.id}
          />
        )}
        {selected === 'account' && <SettingsAccount />}
        {selected === 'display' && <SettingsDisplay />}
      </div>
    </section>
  )
}

export default Settings
