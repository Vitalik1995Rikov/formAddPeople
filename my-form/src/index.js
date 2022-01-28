import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from 'react-router-dom';

import './index.css';

import Home from './components/screens/Home';
import Agents from './components/screens/Agents';
import Blog from './components/screens/Blog';
import OurProperty from './components/screens/OurProperty';
import NotFound from './components/screens/NotFound';


ReactDOM.render(
  <React.StrictMode>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/property" element={<OurProperty/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);

