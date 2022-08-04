import { useEffect, useState } from "react"

const Lifecycle = () => {
  const [seconds, setSeconds] = useState(0);

  //Being used as componentDidMount
  useEffect(_ => {
    setInterval(_ => setSeconds(c => c + 1), 1000);
  }, []);

  //Being used as componentDidUpdate
  useEffect(_ => {
    console.log(`The value has changed ${seconds}`);
  }, [seconds]);


  return <>
    <h2>Lifecycle</h2>
    <p>{seconds}</p>
  </>
}

export default Lifecycle;