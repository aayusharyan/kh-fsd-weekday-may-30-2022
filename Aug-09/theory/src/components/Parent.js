import { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [value, changeValue] = useState("");
  return (
    <div>
      <p>{value}</p>
      <Child value={value} handleChange={e => changeValue(e.target.value)} />
      <br />
      <button onClick={_ => changeValue("")}>Clear</button>
    </div>
  )
}

export default Parent