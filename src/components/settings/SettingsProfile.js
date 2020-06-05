import React from 'react'

const fakeProfile = {
  name: 'farter mcgavin',
  birthday: '69/69/6969',
  gender: 'non-binary',
  location: 'tartsdale',
  currentPhoto:
    'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2017/10/29/59f5fe60d01905560985e5f5_Screen%20Shot%202017-10-29%20at%2012.14.04%20PM.png.rend.hgtvcom.616.411.suffix/1573348732477.png'
}

const SettingsProfile = () => {
  return (
    <>
      <h1 className='title'>My Profile</h1>
      <div className='edit'>
        <div className='edit__photo'>
          <img src={fakeProfile.currentPhoto} alt='armondo!' />
        </div>
        <ul>
          <li>
            name: <span>{fakeProfile.name}</span>
            <span class='material-icons'>edit</span>
          </li>
          <li>
            birthday: <span>{fakeProfile.birthday}</span>
            <span class='material-icons'>edit</span>
          </li>
          <li>
            gender: <span>{fakeProfile.gender}</span>
            <span class='material-icons'>edit</span>
          </li>
          <li>
            location: <span>{fakeProfile.location}</span>
            <span class='material-icons'>edit</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SettingsProfile
