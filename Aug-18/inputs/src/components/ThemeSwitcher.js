import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../slice';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const updateTheme = e => {
    if(e.target.checked) {
      //Checkbox is checked -> Dark theme
      dispatch(setTheme("dark"));
    } else {
      //Checkbox is not checked -> Light theme
      dispatch(setTheme("light"));
    }
  }
  return (
    <div>
      <input type="checkbox" onChange={updateTheme} />
    </div>
  )
}

export default ThemeSwitcher