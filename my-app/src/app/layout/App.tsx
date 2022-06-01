import React from 'react';
import './App.css';
import Revista from './Revista';
import { Route, Routes } from 'react-router-dom';
import Librat from './Librat';
import Tekste from './Tekste';
import LibraPerFemije from './LibraPerFemije';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/revista' element={<Revista />}/>
        <Route path='/librat' element={<Librat />}/>
        <Route path='/tekste' element={<Tekste />}/>
        <Route path='/libraPerFemije' element={<LibraPerFemije />}/>
      </Routes>
    </div>
  );
}

export default App;
