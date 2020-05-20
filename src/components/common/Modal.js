import React from 'react'

const Modal = ({ isToggled, setToggle, children }) => {
  return (
    <>
      {isToggled && (
        <div className='modal'>
          <button onClick={() => setToggle(false)}>Close</button>
          {children}
        </div>
      )}
    </>
  )
}

export default Modal
