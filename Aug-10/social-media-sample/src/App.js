import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path='/single_post' element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
