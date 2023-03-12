import React from 'react';
import Bloques from '../bloques/Bloques';
import { NavLink as Link } from 'react-router-dom';
import './pages.css';
import '../bloques/Bloques.css';
import insta from '../img/insta.png';
import fake from '../img/NoticiaFalsa.jpg';
import emocion from '../img/emociones2.jpg';
import autos from '../img/autos.jpg';
import segmentacion from '../img/segmentacion.png'
import recomendacion from '../img/recomendacion.png'
import ubertema from '../img/ubertema.png'
import tarjeta from '../img/tarjeta.jpg'

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
            <img src={segmentacion} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Segmentación de cliente</h3>
            <p>La ciencia de datos juega un papel crucial en la segmentación de clientes, pues, permite a 
              las empresas analizar grandes cantidades de datos para identificar patrones y tendencias en el 
              comportamiento de los clientes. Con el uso de técnicas de análisis de datos avanzadas, como 
              el aprendizaje automático, las empresas pueden segmentar a los clientes 
              de manera más precisa.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/seis'>
      <div className='division'>
        <figure>
            <img src={recomendacion} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Recomendación de peliculas</h3>
            <p>La recomendación de películas es un proceso que se utiliza para sugerir películas a los 
              usuarios según sus preferencias y gustos. La ciencia de datos es fundamental en este 
              proceso ya que permite a las plataformas de streaming analizar grandes cantidades de datos 
              para identificar patrones y tendencias en el comportamiento de los usuarios y, en 
              consecuencia, sugerir películas relevantes.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/siete'>
      <div className='division'>
        <figure>
            <img src={ubertema} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Análisis de datos para Uber</h3>
            <p>EL uso del analisis de datos para uber ayuda a mejorar la toma de decisiones con respecto 
              a viajes, conductores, pasajeros y otras variables. También ayuda a detectar fraudes y
              mejorar la eficiencia operativa.</p>
            </div>
        </figure>
      </div>
      </Link>

      <Link to='/ocho'>
      <div className='division'>
        <figure>
            <img src={tarjeta} alt='fake' className='emocion' />

            <div className='texto'>
            <h3>Detección de fraude con tarjetas de crédito</h3>
            <p> Los métodos tradicionales de detección de fraudes son limitados en términos de velocidad, 
                precisión y escalabilidad, lo que ha llevado a la necesidad de métodos más avanzados y 
                automatizados. La ciencia de datos es útil porque permite la creación de modelos 
                predictivos que pueden analizar grandes cantidades de datos en tiempo real y detectar 
                patrones y anomalías.</p>
            </div>
        </figure>
      </div>
      </Link>
      
    </div>
  );
};
