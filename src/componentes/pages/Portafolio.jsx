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
import { useState } from 'react';

export const Portafolio = () => {

  const [boton, setBoton] = useState(1)


  const handleClick = () => {
    if (boton === 0) {
      setBoton(1);
  
    } if (boton === 1) {
      setBoton(0);
  
    }
  }

  return (
    <div className='portafolioDiv' >
        <button className='BotonIdioma2'onClick={handleClick}>{boton === 0 ? 'English' : 'Español'} </button>
            <Link to='/uno'>
                <div className='division'>
                    <figure>
                        <img src={insta} alt='insta' className='imagen-insta' />
                            <div className='texto'>
                                {boton === 0 ?
                                    <h3>Instagram</h3>
                                :   <h3>Instagram</h3>}            
                                
                                {boton === 0 ?
                                    <p>La ciencia de datos se utiliza en Instagram para mejorar la 
                                        experiencia del usuario y la eficacia de la plataforma para las 
                                        empresas. Esto incluye la personalización del contenido que se 
                                        muestra a cada usuario, la optimización de la publicidad en 
                                        función de las preferencias de los usuarios y la identificación 
                                        de tendencias y patrones en el comportamiento de los usuarios.
                                    </p>
                                :   <p>Data science is used at Instagram to improve the user experience 
                                        and the platform's user experience and platform efficiency for 
                                        businesses. businesses. This includes personalizing the content 
                                        that is content shown to each user, optimizing advertising based 
                                        on users' preferences based on user preferences and identifying 
                                        trends and patterns in user behavior. trends and patterns in user 
                                        behavior.
                                    </p> 
                                }                    
                            </div>
                    </figure>
                </div>
            </Link>

            <Link to='/dos'>
                <div className='division'>
                    <figure>
                        <img src={fake} alt='fake' className='fake' />
                            <div className='texto'>
                                {boton === 0 ?
                                    <h3>Noticias Falsas</h3>
                                :   <h3>Fake News</h3>}

                                {boton === 0 ?
                                    <p>La ciencia de datos se utiliza en la detección de noticias falsas 
                                        para identificar patrones y tendencias en el contenido que se 
                                        considera falso. Esto incluye la identificación de características 
                                        comunes en el lenguaje, la estructura, la imagen y la información 
                                        de contexto que se utiliza en noticias falsas.
                                    </p>
                                :   <p>Data science is used in fake news detection to identify patterns
                                        and trends in content that is considered false. This includes
                                        identifying common characteristics in language, structure, image
                                        and context information that is used in fake news.
                                    </p>}
                            </div>
                    </figure>
                </div>
            </Link>

            <Link to='/tres'>
                <div className='division'>
                    <figure>
                        <img src={emocion} alt='fake' className='emocion' />
                            <div className='texto'>
                                {boton === 0 ?
                                    <h3>Emociones</h3>
                                :   <h3>Emotions</h3>}

                                {boton === 0 ?
                                    <p>Su proposito es analizar y clasificar los patrones en el tono, la 
                                        entonación, la velocidad y otros factores acústicos que pueden 
                                        indicar emociones o estados emocionales. Esto se logra mediante el 
                                        uso de técnicas de aprendizaje automático y la creación de 
                                        modelos que pueden analizar la información acústica y producir 
                                        una clasificación de sentimientos.
                                    </p>
                                :   <p>Its purpose is to analyze and classify patterns in tone,
                                        intonation, speed and other acoustic factors that may indicate
                                        emotions or emotional states. This is achieved through the use
                                        of machine learning techniques and the creation of models that
                                        can analyze acoustic information and produce a sentiment
                                        classification.
                                    </p>}
                            </div>
                    </figure>
                </div>
            </Link>

            <Link to='/cuatro'>
                <div className='division'>
                    <figure>
                        <img src={autos} alt='fake' className='emocion' />
                            <div className='texto'>
                                {boton === 0 ?
                                    <h3>Análisis exploratorio de datos</h3>
                                :   <h3>Exploratory data analysis</h3>}

                                {boton === 0 ?
                                    <p>El EDA (análisis exploratorio de datos) es una etapa importante en 
                                        el análisis de datos que implica la revisión y el entendimiento 
                                        de los datos. Es un proceso de descubrimiento para obtener una 
                                        comprensión básica de los datos, identificar patrones y 
                                        relaciones, detectar outliers y problemas de calidad de los datos, 
                                        y preparar los datos para futuros análisis.
                                    </p>
                                :   <p>EDA (exploratory data analysis) is an important stage in data
                                        analysis that involves reviewing and understanding the data.
                                        It is a discovery process to obtain a basic understanding of
                                        the data, identify patterns and relationships, detect outliers
                                        and data quality issues, and prepare the data for future
                                        analysis.
                                    </p>}
                            </div>
                    </figure>
                </div>
            </Link>

            <Link to='/cinco'>
                <div className='division'>
                    <figure>
                        <img src={segmentacion} alt='fake' className='emocion' />
                            <div className='texto'>
                                  {boton === 0 ?
                                      <h3>Segmentación de cliente</h3>
                                  :   <h3>Customer segmentation</h3>}

                                  {boton === 0 ?
                                      <p>La ciencia de datos juega un papel crucial en la segmentación de 
                                          clientes, pues, permite a las empresas analizar grandes 
                                          cantidades de datos para identificar patrones y tendencias en 
                                          el comportamiento de los clientes. Con el uso de técnicas de 
                                          análisis de datos avanzadas, como el aprendizaje automático, las 
                                          empresas pueden segmentar a los clientes de manera más precisa.
                                      </p>
                                  :   <p>Data science plays a crucial role in customer segmentation, as it
                                          allows companies to analyze large amounts of data to identify
                                          patterns and trends in customer behavior. With the use of
                                          advanced data analysis techniques, such as machine learning,
                                          companies can more accurately segment customers.
                                      </p>}
                            </div>
                    </figure>
                </div>
            </Link>

            <Link to='/seis'>
                <div className='division'>
                    <figure>
                        <img src={recomendacion} alt='fake' className='emocion' />
                            <div className='texto'>
                                {boton === 0 ?
                                    <h3>Recomendación de peliculas</h3>
                                :   <h3>Movie recommendation</h3>}

                                {boton === 0 ?
                                    <p>La recomendación de películas es un proceso que se utiliza para 
                                        sugerir películas a los usuarios según sus preferencias y gustos. 
                                        La ciencia de datos es fundamental en este proceso ya que permite 
                                        a las plataformas de streaming analizar grandes cantidades de datos 
                                        para identificar patrones y tendencias en el comportamiento de los 
                                        usuarios y, en consecuencia, sugerir películas relevantes.
                                    </p>
                                :   <p>Movie recommendation is a process that is used to suggest movies
                                        to users based on their preferences and tastes. Data science is
                                        fundamental in this process as it allows streaming platforms to
                                        analyze large amounts of data to identify patterns and trends in
                                        user behavior and, as a result, suggest relevant movies.
                                    </p>}
                            </div>
                    </figure>
                </div>
            </Link>

            <Link to='/siete'>
                <div className='division'>
                    <figure>
                        <img src={ubertema} alt='fake' className='emocion' />
                            <div className='texto'>
                                {boton === 0 ?
                                    <h3>Análisis de datos para Uber</h3>
                                :   <h3>Data analysis for Uber</h3>}

                                {boton === 0 ?
                                    <p>EL uso del analisis de datos para uber ayuda a mejorar la toma de 
                                        decisiones con respecto a viajes, conductores, pasajeros y otras 
                                        variables. También ayuda a detectar fraudes y mejorar la eficiencia 
                                        operativa.
                                    </p>
                                :   <p>The use of data analysis for uber helps to improve decision making
                                        with respect to trips, drivers, passengers and other variables.
                                        It also helps to detect fraud and improve operational efficiency.
                                    </p>}
                            </div>
                    </figure>
                </div>
            </Link>

            <Link to='/ocho'>
                <div className='division'>
                    <figure>
                        <img src={tarjeta} alt='fake' className='emocion' />
                            <div className='texto'>
                                {boton === 0 ?
                                    <h3>Detección de fraude con tarjetas de crédito</h3>
                                :   <h3>Credit card fraud detection</h3>}

                                {boton === 0 ?
                                    <p> Los métodos tradicionales de detección de fraudes son limitados 
                                        en términos de velocidad, precisión y escalabilidad, lo que ha 
                                        llevado a la necesidad de métodos más avanzados y automatizados. 
                                        La ciencia de datos es útil porque permite la creación de modelos 
                                        predictivos que pueden analizar grandes cantidades de datos en 
                                        tiempo real y detectar patrones y anomalías.
                                    </p>
                                :   <p>Traditional fraud detection methods are limited in terms of speed,
                                        accuracy and scalability, which has led to the need for more
                                        advanced and automated methods. Data science is useful because it
                                        allows the creation of predictive models that can analyze large
                                        amounts of data in real time and detect patterns and anomalies.
                                    </p>}
                            </div>
                    </figure>
                </div>
            </Link>
      </div>
  );
};