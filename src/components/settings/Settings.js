import React from 'react'
import SettingsNav from './SettingsNav'
import SettingsProfile from './SettingsProfile'

const Settings = () => {
  return (
    <section className='settings'>
      <SettingsNav />
      <div className='settings-main'>
        <SettingsProfile />
      </div>
    </section>
  )
}

export default Settings
