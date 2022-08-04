import './App.css';
import Container from './components/Container';
import Lifecycle from './components/Lifecycle';
import List from './components/List';
import TermsConditions from './components/TermsConditions';
import UnmountExample from './components/UnmountExample';
import {useState} from "react";


function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={e => setShow(e.target.checked)} />
      {show ? <UnmountExample /> : false}
      <br />
      <br />

      <List />
      <hr />
      {/* <Lifecycle /> */}

      <Container caption="ABCD" />
      <br />
      <br />
      <TermsConditions />
      
    </>
  );
}

export default App;
