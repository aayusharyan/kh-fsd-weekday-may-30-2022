import logo from './logo.svg';
import './App.css';
import useInternet from './hooks/useInternet';

function App() {
  const internetStatus = useInternet();

  return (
    <div className="App">
      <header className="App-header">
        {internetStatus == true ? (
          <h2>Inernet is connected ✔️</h2>
        ) : (
          <h2>Inernet is not connected ❌</h2>
        )}
      </header>
    </div>
  );
}

export default App;
