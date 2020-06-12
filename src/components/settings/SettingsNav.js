import React from 'react'
import classnames from 'classnames'

const SettingsNav = ({ navItems, setSelected, selected }) => {
  console.log(selected)
  return (
    <nav className='settings-nav'>
      <h2>Settings</h2>
      <ul className='settings-nav__items'>
        {navItems.map(item => (
          <li
            className={classnames(null, {
              active: item.id === selected
            })}
            key={item.id}
            onClick={() => setSelected(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SettingsNav
