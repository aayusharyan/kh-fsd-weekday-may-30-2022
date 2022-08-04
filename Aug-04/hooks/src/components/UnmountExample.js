import { useEffect } from "react";

const UnmountExample = () => {

  useEffect(_ => {
    console.log("Component mounted");
  }, [])

  useEffect(_ => {
    return _ => {
      console.log("Component will unmount");
      //Here, we write the cleanup logic
    }
  }, []);

  return <>
    <p>Unmount logic</p>
  </>
}

export default UnmountExample;