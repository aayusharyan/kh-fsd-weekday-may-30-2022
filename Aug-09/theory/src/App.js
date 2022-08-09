import logo from './logo.svg';
import './App.css';
import Stateful from './components/Stateful';
import Stateless from './components/Stateless';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Stateful /> */}
        {/* <Stateless /> */}
        <Parent />
      </header>
    </div>
  );
}

export default App;
