import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const counter = useSelector(state => state.value);
  
  return (
    <h4>Display {counter}</h4>
  )
}

export default Display