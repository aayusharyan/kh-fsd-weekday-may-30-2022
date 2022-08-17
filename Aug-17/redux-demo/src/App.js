import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';
import Comp1 from './components/Comp1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompA />
        <Comp1 />
      </header>
    </div>
  );
}

export default App;
