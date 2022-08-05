import React, { useState, useEffect } from 'react'

const Child = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(_ => props.update_callback(counter), [counter]);
  
  const incremenet = _ => {
    setCounter(current => current + 1);
  }
  
  return (
    <>
      <div>Child - {counter}</div>
      <button onClick={incremenet}>Incremenet</button>
    </>
  )
}

export default Child