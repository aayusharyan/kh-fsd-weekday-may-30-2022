import React, { useEffect } from 'react'
import axios from 'axios';

const APICalls = () => {
  useEffect(_ => {
    // fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
    //   response.json().then(data => {
    //     console.log(data);
    //   })
    // });

    // axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
    //   console.log(data.data);
    // });

    const fn = async _ => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);


      const axios_data = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(axios_data.data);

      const axios_data_1 = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(axios_data_1.data);
    }

    fn();

    

  }, []);

  return (
    <div>APICalls</div>
  )
}

export default APICalls