import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Experience from '../pages/Experience';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';

const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about-me' element={<AboutMe />} />
    <Route path='/experience' element={<Experience />} />
    <Route path='/projects' element={<Projects />} />
  </Routes>
);

export default Router;
