import React from 'react';
import './App.css';
import Navbar from './componentes/navbar/Navbar';
import {Route, Routes} from 'react-router-dom';

import {About} from './componentes/pages/About';
import {Portafolio} from './componentes/pages/Portafolio';
import {Blog} from './componentes/pages/Blog';
import {Home} from './componentes/pages/Home';

import {Uno} from './componentes/bloques/Uno';
import {Dos} from './componentes/bloques/Dos';
import {Tres} from './componentes/bloques/Tres';
import {Cuatro} from './componentes/bloques/Cuatro';
import {Cinco} from './componentes/bloques/Cinco';


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
        <Route path='/dos' element={<Dos/>} />
        <Route path='/tres' element={<Tres/>} />
        <Route path='/cuatro' element={<Cuatro/>} />
        <Route path='/cinco' element={<Cinco/>} />
      </Routes>
    </>
  );
}

export default App;