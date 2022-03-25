import './App.css';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Programming from './components/Programming';
import Project from './components/Project'
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
