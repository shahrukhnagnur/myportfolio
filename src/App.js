import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; 
import Home from './home'; 
import About from './about';
import Project from './project';
import CustomCursor from './customcursor';

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
      <CustomCursor/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
