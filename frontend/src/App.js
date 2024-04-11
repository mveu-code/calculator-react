import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Admin from './views/Admin';
import InterfaceCalc from './views/InterfaceCalc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Main' element={<Main/>} />
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/InterfaceCalc' element={<InterfaceCalc/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
