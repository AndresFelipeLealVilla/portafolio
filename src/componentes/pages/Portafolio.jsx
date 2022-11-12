import React from 'react';
import Bloques from '../bloques/Bloques';
import { NavLink as Link } from 'react-router-dom';
import './pages.css';
import '../bloques/Bloques.css';

export const Portafolio = () => {
  return (
    <div className='portafolioDiv' >
      <Link to='/uno'>
      <div className='uno'>
        <a href='/uno'>
        <span>
          hola
        </span>
        </a>
        <a href='/uno'>
        <span>
          adios
        </span>
        </a>
      </div>
      </Link>

      <div>

      </div>

      <div>

      </div>

      <div>

      </div>

      <div>

      </div>

      <div>

      </div>

      <div>

      </div>

      <div>

      </div>
      
    </div>
  );
};
