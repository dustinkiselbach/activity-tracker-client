import React from 'react'

const ProfileUser = ({ profile }) => {
  return (
    <>
      {profile && (
        <>
          <h1 className='title-secondary'>{profile.email}</h1>
          <img src={profile.profile_image} alt='' />
        </>
      )}
    </>
  )
}

export default ProfileUser
