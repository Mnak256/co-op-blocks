import React from 'react'

const Loading = ({ fullscreen }) => {
  if (fullscreen) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 'calc(50% - 1rem)',
          left: 'calc(50% - 1rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <label>Loading...</label>
      </div>
    )
  }
  return <label>Loading...</label>
}

export default Loading
