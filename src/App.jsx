import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';

import MyNavbar from './components/MyNavbar'
import Home from './components/pages/Home'
import Process from './components/pages/Process'
import TPP from './components/pages/TPP'
import Form from './components/pages/Form'

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/process' element={<Process />} />
        <Route path='/tpp' element={<TPP />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;