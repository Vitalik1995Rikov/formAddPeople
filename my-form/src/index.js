import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import Home from './components/screens/Home';
import Agents from './components/screens/Agents';
import Blog from './components/screens/Blog';
import OurProperty from './components/screens/OurProperty';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home/>
        <Agents/>
        <Blog/>
        <OurProperty/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

