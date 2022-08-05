import React from 'react'

const HOC = (props) => {
  return (
    <div style={{border: "1px solid red"}}>{props.children}</div>
  )
}

export default HOC