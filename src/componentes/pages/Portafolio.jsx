import React from 'react';
import Bloques from '../bloques/Bloques';
import { NavLink as Link } from 'react-router-dom';
import './pages.css';
import '../bloques/Bloques.css';
import insta from '../img/insta.png';
import fake from '../img/NoticiaFalsa.jpg';
import emocion from '../img/emociones2.jpg';

export const Portafolio = () => {
  return (
    <div className='portafolioDiv' >
      <Link to='/uno'>
      <div className='division'>
        <figure>
            <img src={insta} alt='insta' className='imagen-insta' />

            <div className='texto'>
            <h3>Instagram</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque eveniet ut impedit rem assumenda, in eius, nesciunt ad praesentium dicta, 
            quam earum dolorem sed. Soluta iusto sint sunt nam quidem!</p>
            </div>
        </figure>
      </div>
      </Link>


      <Link to='/dos'>
      <div className='division'>
        <figure>
            <img src={fake} alt='fake' className='fake' />

            <div className='texto'>
            <h3>Instagram</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque eveniet ut impedit rem assumenda, in eius, nesciunt ad praesentium dicta, 
            quam earum dolorem sed. Soluta iusto sint sunt nam quidem!</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/tres'>
      <div className='division'>
        <figure>
            <img src={emocion} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Instagram</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque eveniet ut impedit rem assumenda, in eius, nesciunt ad praesentium dicta, 
            quam earum dolorem sed. Soluta iusto sint sunt nam quidem!</p>
            </div>
        </figure>
      </div>
      </Link>

      <div className='division'>

      </div>

      <div className='division'>

      </div>

      <div className='division'>

      </div>

      <div className='division'>

      </div>

      <div className='division'>

      </div>
      
    </div>
  );
};
