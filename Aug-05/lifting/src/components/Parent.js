import Child from "./Child";
import { useState } from "react";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const child_state_changed = new_state => {
    setCounter(new_state);
  }

  return <>
    <p>Parent - {counter}</p>
    <Child update_callback={child_state_changed} />
  </>
}

export default Parent;