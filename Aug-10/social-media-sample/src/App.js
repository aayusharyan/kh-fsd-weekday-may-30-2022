import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import { Route, Routes } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path='/single_post' element={<PostDetail />} />
        <Route path='/single_user/:user_id' element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
