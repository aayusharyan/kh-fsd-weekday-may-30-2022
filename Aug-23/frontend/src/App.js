import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(_ => {
    (async _ => {
      const response = await fetch('http://localhost:3005/');
      const data = await response.json();
      console.log(data);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
