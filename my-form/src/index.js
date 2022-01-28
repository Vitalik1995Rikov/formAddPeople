import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './index.css';

import Home from './components/screens/Home';
import Agents from './components/screens/Agents';
import Blog from './components/screens/Blog';
import OurProperty from './components/screens/OurProperty';
import NotFound from './components/screens/NotFound';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <header>
    <div className="flex ">
            <h1>Solary</h1>
            <Link to="/">Home</Link>
            <Link to="/property">Our property</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/notfound">Not found</Link>
            <button>Sign up</button>
        </div>
    </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/property" element={<OurProperty/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

