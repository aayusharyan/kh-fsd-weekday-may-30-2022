import React from 'react';
import Greeting from './components/Greeting';
import Button from './components/Button';
import Component1 from './components/Component1';

class App extends React.Component {
  render() {
    return <>
      <h1>Aug-03 session</h1>
      <Greeting title="Contact Me" />
      <Component1 msg="Hello" />
    </> 
  }
}

export default App;