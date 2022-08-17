import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../slice';

const Button = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={_ => dispatch(increment())}>Increment Counter</button>
  )
}

export default Button