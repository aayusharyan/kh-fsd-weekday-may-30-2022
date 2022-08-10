import logo from './logo.svg';
import './App.css';
import Container from './components/conditional_approach/Container';
import Nav from './components/router_approach/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/router_approach/Home';
import About from './components/router_approach/About';
import Contact from './components/router_approach/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Container /> */}
        {/* <p>ABCD</p> */}
        <Nav />
        {/* <audio src='https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3' controls /> */}
        
        <Routes> {/* Routes is an HOC, Route is not an HOC*/}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
