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
import {Seis} from './componentes/bloques/Seis';
import {Siete} from './componentes/bloques/Siete';
import {Ocho} from './componentes/bloques/Ocho';
import {Nueve} from './componentes/bloques/Nueve';
import {Diez} from './componentes/bloques/Diez';
import {Once} from './componentes/bloques/Once';
import {Doce} from './componentes/bloques/Doce';


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
        <Route path='/seis' element={<Seis/>} />
        <Route path='/siete' element={<Siete/>} />
        <Route path='/ocho' element={<Ocho/>} />
        <Route path='/nueve' element={<Nueve/>} />
        <Route path='/diez' element={<Diez/>} />
        <Route path='/once' element={<Once/>} />
        <Route path='/doce' element={<Doce/>} />
      </Routes>
    </>
  );
}

export default App;