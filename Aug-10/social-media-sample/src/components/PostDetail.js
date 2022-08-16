import {useEffect, useState} from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const PostDetail = () => {
  const [searchParams, _] = useSearchParams();
  const [postData, setPostData] = useState({});

  useEffect(_ => {
    const id = searchParams.get('id');
    if(id !== undefined) {
      (async _ => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        console.log(data);
        setPostData(data);
      })();
    }
  }, []);
  

  return (
    <>
    <Link to="/">Back to Home</Link>
    <h4>Single Post Detail</h4>
    <div>
      <h5>
        Posted by: &nbsp;
        <Link to={`/single_user/${postData.userId}`}>{postData.userId}</Link>
      
      </h5>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
      {/* <Comment /> */}
    </div>
    </>
  )
}

export default PostDetail