import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';
import {CompContext} from './contexts';

function App() {
  return (
    <CompContext.Provider value={{fname: "Aayush", lname: "Sinha"}}>
      <div className="App">
        <header className="App-header">
          App - Provider
          <CompA />
        </header>
      </div>
    </CompContext.Provider>
  );
}

export default App;
