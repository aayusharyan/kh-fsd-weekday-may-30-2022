import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const PostList = () => {
  const [list, setList] = useState([]);
  
  useEffect(_ => {
    (async _ => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setList(data);
    })();
  }, []);
  
  return (
    <>
      <h5>All Posts</h5>
      {list.map((element, idx) => {
        return <Link key={idx} to={`/single_post?id=${element.id}`}>
          <div className="singlePost">
            <h4>{element.title}</h4>
          </div>
        </Link>
      })}
    </>
  )
}

export default PostList