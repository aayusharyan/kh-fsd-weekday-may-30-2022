import React from 'react'
import { useSelector } from 'react-redux';

const Display = () => {
  const input_text = useSelector(state => state.input);
  return (
    <h4>{input_text}</h4>
  )
}

export default Display