import { useState } from 'react'
import Home from './Home';
import Contact from './Contact';
import About from './About';

const Container = () => {
  const [item, setItem] = useState(0);
  // 0 -> Home
  // 1 -> About
  // 2 -> Contact
  return (
    <div>
      <p>
        <span onClick={_ => setItem(0)}>Home</span> 
        | 
        <span onClick={_ => setItem(1)}>About</span> 
        | 
        <span onClick={_ => setItem(2)}>Contact</span>
      </p>
      {item == 0 ?
        <Home />
      : (item == 1 ?
          <About />
          : <Contact />
        )
      }
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <About /> */}
    </div>
  )
}

export default Container