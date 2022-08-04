import { useEffect, useState } from "react";

const List = () => {
  const [users, setUsers] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  
  useEffect(_ => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      response.json().then(data => {
        setUsers(data);
        setOriginalList(data);
      })
    })
  }, []);

  const filter = e => {
    
    const search_value = e.target.value;
    
    //https://jsonplaceholder.typicode.com/users?q=${search_value}
    
    // const filtered_result = [];
    // for(let i = 0; i < originalList.length; i++) {
    //   if(originalList[i].name.startsWith(search_value)) {
    //     filtered_result.push(originalList[i]);
    //   }
    // }

    const filtered_result = originalList.filter(elem => {
      if(elem.name.startsWith(search_value)) {
        return true;
      }
      return false;
    });
    setUsers(filtered_result);
  }

  return <>
    <input type="text" placeholder="Search" onKeyUp={filter} />
    <ul>
      {users.map((single_user, idx) => {
        return <li key={idx}>{single_user.name} - {single_user.email}</li>
      })}
    </ul>
  </>
}

export default List;