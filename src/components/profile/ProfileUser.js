import React from 'react'

const ProfileUser = ({ user }) => {
  console.log(user)
  return (
    <>
      {user && (
        <>
          <h1 className='title-secondary'>{user.email}</h1>
          <img src='http://203.153.40.19/bct/img/user.png' alt='' />
        </>
      )}
    </>
  )
}

export default ProfileUser
