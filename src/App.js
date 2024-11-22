import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/Home'
import Simulateur from './view/Simulateur'
import Signup from './view/Signup'
import Inscrire from './view/Inscription'


function App() {
  return (
    <BrowserRouter>
      <Routes> 
      <Route path="/" element={<Home></Home>} />
      <Route path="Simulateur" element={<Simulateur></Simulateur>} />
      <Route path="Signup" element={<Signup></Signup>} />
      <Route path="Inscription" element={<Inscrire></Inscrire>} />
      </Routes>
      </BrowserRouter>
    

  );
}

export default App;
