import { useState } from 'react'

const Stateful = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={_ => setCounter(c => c + 1)}>Increment</button>
      <p>{counter}</p>
      <button onClick={_ => setCounter(0)}>Reset</button>
      {/* <button onClick={setCounter(0)}>Reset</button> */}
    </div>
  )
}

export default Stateful