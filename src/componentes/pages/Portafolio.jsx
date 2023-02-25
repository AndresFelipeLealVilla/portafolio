import React from 'react';
import Bloques from '../bloques/Bloques';
import { NavLink as Link } from 'react-router-dom';
import './pages.css';
import '../bloques/Bloques.css';
import insta from '../img/insta.png';
import fake from '../img/NoticiaFalsa.jpg';
import emocion from '../img/emociones2.jpg';
import autos from '../img/autos.jpg';

export const Portafolio = () => {
  return (
    <div className='portafolioDiv' >
      <Link to='/uno'>
      <div className='division'>
        <figure>
            <img src={insta} alt='insta' className='imagen-insta' />

            <div className='texto'>
            <h3>Instagram</h3>
            <p>La ciencia de datos se utiliza en Instagram para mejorar la experiencia del usuario y la 
              eficacia de la plataforma para las empresas. Esto incluye la personalización del contenido 
              que se muestra a cada usuario, la optimización de la publicidad en función de las 
              preferencias de los usuarios y la identificación de tendencias y patrones en el 
              comportamiento de los usuarios.</p>
            </div>
        </figure>
      </div>
      </Link>


      <Link to='/dos'>
      <div className='division'>
        <figure>
            <img src={fake} alt='fake' className='fake' />

            <div className='texto'>
            <h3>Noticias Falsas</h3>
            <p>La ciencia de datos se utiliza en la detección de noticias falsas para identificar 
              patrones y tendencias en el contenido que se considera falso. Esto incluye la 
              identificación de características comunes en el lenguaje, la estructura, la imagen y la 
              información de contexto que se utiliza en noticias falsas.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/tres'>
      <div className='division'>
        <figure>
            <img src={emocion} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Emociones</h3>
            <p>Su proposito es analizar y clasificar los patrones en el tono, la entonación, la velocidad y otros 
              factores acústicos que pueden indicar emociones o estados emocionales. Esto se logra 
              mediante el uso de técnicas de aprendizaje automático y la creación de modelos que pueden 
              analizar la información acústica y producir una clasificación de sentimientos.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/cuatro'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/cinco'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/seis'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/siete'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/ocho'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/nueve'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/diez'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/once'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/doce'>
      <div className='division'>
        <figure>
            <img src={autos} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis exploratorio de datos</h3>
            <p>El EDA (análisis exploratorio de datos) es una etapa importante en el análisis de datos 
              que implica la revisión y el entendimiento de los datos. Es un proceso de descubrimiento 
              para obtener una comprensión básica de los datos, identificar patrones y relaciones, 
              detectar outliers y problemas de calidad de los datos, y preparar los datos para futuros 
              análisis.</p>
            </div>
        </figure>
      </div>
      </Link>
      
    </div>
  );
};
