import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

const Theme = ({ children }) => {
  const [style, setStyle] = useState({});
  const theme_style = useSelector(state => state.theme);

  useEffect(_ => {
    setStyle({
      color: "black",
      backgroundColor: "white"
    });
  }, []);

  useEffect(_ => {
    if(theme_style == "dark") {
      setStyle({
        color: "white",
        backgroundColor: "black"
      });
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white"
      });
    }
  }, [theme_style])

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Theme