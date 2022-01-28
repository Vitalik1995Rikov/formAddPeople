import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../../screens/Home';
import Agents from '../../screens/Agents';
import Blog from '../../screens/Blog';
import OurProperty from '../../screens/OurProperty';
import NotFound from '../../screens/NotFound';

const Header = () => {
    return (
        <div className="bg-slate-200 m-5">
            <div className="flex mb-5 p-10 justify-around">
            <div className='text-2xl font-bold'>Solari.</div>
                <div className="flex gap-12">
                    <Link to="/">Home</Link>
                    <Link to="/property">Our property</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/notfound">Not found</Link>
                </div>
            <button className="bg-slate-100 w-20 rounded-lg">Sign up</button>
        </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/property" element={<OurProperty/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
        </div>
    )
}
export default Header