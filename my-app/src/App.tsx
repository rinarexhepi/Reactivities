import React from 'react';
import logo from './logo.svg';
import './App.css';
import Revista from './app/layout/Revista';
import { Route, Routes } from 'react-router-dom';
import Librat from './app/layout/Librat';
import Tekste from './app/layout/Tekste';
import LibraPerFemije from './app/layout/LibraPerFemije';
import Header from './app/layout/Header';


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       {/*  <Route path='/home' element={<Home />}/> */}
        <Route path='/revista' element={<Revista />}/>
        <Route path='/librat' element={<Librat />}/>
        <Route path='/tekste' element={<Tekste />}/>
        <Route path='/libraPerFemije' element={<LibraPerFemije />}/>
      </Routes>
    </div>
  );
}

export default App;
