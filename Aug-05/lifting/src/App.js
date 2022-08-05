import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import APICalls from './components/APICalls';
import HOC from './components/HOC';

function App() {
  return (
    <>
      <Parent />
      <APICalls />
      <br />
      <br />
      <HOC>
        <button>Click me</button>
        <p>ABCD</p>
      </HOC>
    </>
  );
}

export default App;
