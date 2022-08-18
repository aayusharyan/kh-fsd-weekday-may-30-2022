import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import ThemeSwitcher from './components/ThemeSwitcher';
import Theme from './components/Theme';

function App() {
  return (
    <>
      <Theme>
        <ThemeSwitcher />
        <Input />
        <Display />
      </Theme>
    </>
  );
}

export default App;
