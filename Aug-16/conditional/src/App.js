import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [showOp1, setShowOp1] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showOp1 == true ? (
          <p>
            Output 1
          </p>
        ) : (
          <p>
            Output 2
          </p>
        )}

      </header>
    </div>
  );
}

export default App;
