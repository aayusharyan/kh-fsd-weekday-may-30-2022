import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      &emsp;
      <Link to="/about">About</Link>
      &emsp;
      <Link to="/contact">Contact</Link>
      {/* <br /> */}
      {/* <a href='/contact'>Contact</a> */}
    </div>
  )
}

export default Nav