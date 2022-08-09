import React from 'react'

const Child = ({value, handleChange}) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default Child