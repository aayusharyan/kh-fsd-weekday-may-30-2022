import React from 'react'
import { useDispatch } from 'react-redux';
import { setInput } from '../slice';

const Input = () => {
  const dispatch = useDispatch();

  const updateValue = e => {
    dispatch(setInput(e.target.value));
  }
  return (
    <div>
      <input type="text" onKeyUp={updateValue} />
    </div>
  )
}

export default Input