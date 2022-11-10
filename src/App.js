import React from 'react';
import './App.css';
import Navbar from './componentes/navbar/Navbar';
import {Route, Routes} from 'react-router-dom';

import {About} from './componentes/pages/About';
import {Portafolio} from './componentes/pages/Portafolio';
import {Blog} from './componentes/pages/Blog';
import {Home} from './componentes/pages/Home';

import {Uno} from './componentes/bloques/Uno';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portafolio" element={<Portafolio/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path='/uno' element={<Uno/>} />

      </Routes>
    </>
  );
}

export default App;