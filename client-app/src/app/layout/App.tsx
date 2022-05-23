import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import About from './About';
import Revista from './Revista';
import Profile from './Profile';
import LandingPage from './LandingPage';
import Home from './Home';

function App() {

  return (
    <>
    
      <Routes>
        <Route path='/landingpage' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/revista' element={<Revista />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </>
    
  );
}

export default App;
