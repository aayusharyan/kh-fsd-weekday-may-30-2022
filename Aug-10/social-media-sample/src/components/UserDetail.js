import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { user_id } = useParams();
  const [data, setData] = useState({});
  // console.log(user_id);

  useEffect(_ => {
    (async _ => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
      const data = await response.json();
      setData(data);
      console.log(data);
    })();
  }, [user_id]);

  return (
    <>
      {data.id == undefined ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div>UserDetail of {user_id}</div>
          <ul>
            <li>UserId: {data.id}</li>
            <li>Name: {data.name}</li>
            <li>Email: {data.email}</li>
            <li>Website: {data.website}</li>
          </ul>
        </>
      )}
      
    </>  
  )
}

export default UserDetail