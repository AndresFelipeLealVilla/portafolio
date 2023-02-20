import React from 'react'
import pelis1 from '../img/pelis1.PNG'
import pelis2 from '../img/pelis2.PNG'
import pelis3 from '../img/pelis3.PNG'
import pelis4 from '../img/pelis4.PNG'
import pelis5 from '../img/pelis5.PNG'
import pelis6 from '../img/pelis6.PNG'
import pelis7 from '../img/pelis7.PNG'
import pelis8 from '../img/pelis8.PNG'
import pelis9 from '../img/pelis9.PNG'
import pelis10 from '../img/pelis10.PNG'
import pelis11 from '../img/pelis11.PNG'
import pelis12 from '../img/pelis12.PNG'
import pelis13 from '../img/pelis13.PNG'
import pelis14 from '../img/pelis14.PNG'
import pelis15 from '../img/pelis15.PNG'
import pelis16 from '../img/pelis16.PNG'
import pelis17 from '../img/pelis17.PNG'
import pelis181 from '../img/pelis181.PNG'
import pelis182 from '../img/pelis182.PNG'
import pelis19 from '../img/pelis19.PNG'
import pelis201 from '../img/pelis201.PNG'
import pelis202 from '../img/pelis202.PNG'
import pelis21 from '../img/pelis21.PNG'
import pelis22 from '../img/pelis22.PNG'
import pelis23 from '../img/pelis23.PNG'
import pelis24 from '../img/pelis24.PNG'
import pelis25 from '../img/pelis25.PNG'
import pelis26 from '../img/pelis26.PNG'
import pelis27 from '../img/pelis27.PNG'
import pelis28 from '../img/pelis28.PNG'
import pelis29 from '../img/pelis29.PNG'
import pelis30 from '../img/pelis30.PNG'
import pelis31 from '../img/pelis31.PNG'
import pelis32 from '../img/pelis32.PNG'
import pelis33 from '../img/pelis33.PNG'
import pelis34 from '../img/pelis34.PNG'
import pelis35 from '../img/pelis35.PNG'
import pelis36 from '../img/pelis36.PNG'
import pelis37 from '../img/pelis37.PNG'
import pelis38 from '../img/pelis38.PNG'
import pelis39 from '../img/pelis39.PNG'
import pelis40 from '../img/pelis40.PNG'
import pelis41 from '../img/pelis41.PNG'
import pelis42 from '../img/pelis42.PNG'
import pelis43 from '../img/pelis43.PNG'
import pelis44 from '../img/pelis44.PNG'
import pelis45 from '../img/pelis45.PNG'
import pelis461 from '../img/pelis461.PNG'
import pelis462 from '../img/pelis462.PNG'
import pelis47 from '../img/pelis47.PNG'
import pelis481 from '../img/pelis481.PNG'
import pelis482 from '../img/pelis482.PNG'
import pelis49 from '../img/pelis49.PNG'
import pelis50 from '../img/pelis50.PNG'
import pelis51 from '../img/pelis51.PNG'
import pelis52 from '../img/pelis52.PNG'
import pelis53 from '../img/pelis53.PNG'
import pelis54 from '../img/pelis54.PNG'

import { useState } from 'react'

export const Seis = () => {

const [boton, setBoton] = useState(1)

const [click, setClick] = useState(0);

const handleClick = () => {
  if (boton === 0) {
    setBoton(1);

  } if (boton === 1) {
    setBoton(0);

  }
}

  return (
    <div className='Uno'>

      <button className='BotonIdioma' onClick={handleClick}>
        {boton === 0 ? 'English' : 'Español'}
      </button>


        {boton === 0 ? 
            <p className='IntroUno'>¿Alguna vez has estado en una plataforma de streaming online como 
                Netflix, Amazon Prime, Voot? Vi una película y después de algún tiempo, esa plataforma 
                comenzó a recomendarme diferentes películas y programas de televisión. Me preguntaba 
                cómo la plataforma de streaming de películas podía sugerirme contenidos que me atrajeran. 
                Entonces me encontré con algo conocido como Sistema de Recomendación. Este sistema es 
                capaz de aprender mis patrones de visionado y ofrecerme sugerencias relevantes. Habiendo 
                presenciado la cuarta revolución industrial, en la que la Inteligencia Artificial y 
                otras tecnologías están dominando el mercado, estoy seguro de que te habrás encontrado 
                con un sistema de recomendación en tu vida cotidiana. También estoy seguro de que en 
                este momento la curiosidad debe estar sacando lo mejor de ti.
            </p>
        :   <p className='IntroUno'>Have you ever been on an online streaming platform like Netflix, 
                Amazon Prime, Voot? I watched a movie and after some time, that platform started 
                recommending different movies and TV shows to me. I wondered how the movie streaming 
                platform could suggest content that appealed to me. Then I came across something known 
                as Recommendation System. This system is able to learn my viewing patterns and offer me 
                relevant suggestions. Having witnessed the fourth industrial revolution, where Artificial 
                Intelligence and other technologies are dominating the market, I am sure you have come 
                across a recommendation system in your daily life. I am also sure that right now curiosity 
                must be getting the best of you.
            </p>}


      
        {boton === 0 ?
            <h1 className='TituloUno'>Sistema de Recomendación de Películas</h1>
        :   <h1 className='TituloUno'>Movie Recommendation System</h1>}



        {boton === 0 ?
            <p className='IntroUno'>El objetivo principal de este proyecto de aprendizaje automático es 
                construir un motor de recomendación que recomiende películas a los usuarios. Este 
                proyecto en R está diseñado para ayudar a entender el funcionamiento de un sistema de 
                recomendación. Se Desarrollará un Filtro Colaborativo Basado en Items. Al final de este 
                tutorial, se adquiere experiencia en la aplicación de los conocimientos de R, Ciencia de 
                Datos y Aprendizaje Automático en un proyecto de la vida real.
            </p>
        :   <p className='IntroUno'>The main goal of this machine learning project is to build a 
                recommendation engine that recommends movies to users. This project in R is designed to 
                help understand how a recommendation system works. An Item-Based Collaborative Filter 
                will be developed. At the end of this tutorial, you will gain experience in applying the 
                knowledge of R, Data Science and Machine Learning in a real-life project.
            </p>}


        {boton === 0 ?
            <p className='IntroUno'>Un sistema de recomendación proporciona sugerencias a los usuarios a 
                través de un proceso de filtrado que se basa en las preferencias del usuario y el 
                historial de navegación. La información sobre el usuario se toma como entrada. La 
                información se extrae de la entrada en forma de datos de navegación. Esta información 
                refleja el uso previo del producto, así como las valoraciones asignadas. Un sistema de 
                recomendación es una plataforma que ofrece a sus usuarios diversos contenidos en función 
                de sus preferencias y gustos. Un sistema de recomendación toma la información sobre el 
                usuario como entrada. El sistema de recomendación es una implementación de los algoritmos 
                de aprendizaje automático.
            </p>
        :   <p className='IntroUno'>A recommender system provides suggestions to users through a filtering 
                process that is based on user preferences and browsing history. Information about the user 
                is taken as input. Information is extracted from the input in the form of browsing data. This 
                information reflects previous use of the product as well as ratings assigned. A recommender 
                system is a platform that offers its users various content based on their preferences and 
                tastes. A recommender system takes information about the user as input. The recommender system 
                is an implementation of machine learning algorithms. machine learning algorithms.
            </p>}

      
        {boton === 0 ?
            <p className='IntroUno'>Un sistema de recomendación también encuentra similitudes entre 
                diferentes productos. Por ejemplo, el sistema de recomendación de Netflix ofrece 
                recomendaciones de películas similares a las que se han visto en el pasado. Además, 
                existe un filtrado de contenidos colaborativo que proporciona recomendaciones en relación 
                con otros usuarios que puedan tener un historial de visionado o unas preferencias 
                similares. Existen dos tipos de sistemas de recomendación - Sistema de Recomendación 
                Basado en Contenido y Recomendación de Filtrado Colaborativo. En este proyecto de sistema 
                de recomendación en R, se trabajará en un sistema de recomendación por filtrado 
                colaborativo y más concretamente, en un sistema de recomendación colaborativo basado en 
                ITEM.
            </p>
        :   <p className='IntroUno'>A recommender system also finds similarities between different 
                products. For example, Netflix's recommendation system provides recommendations of movies 
                similar to those watched in the past. In addition, there is collaborative content filtering 
                that provides recommendations in relation to other users who may have similar viewing history 
                or references. preferences. There are two types of recommender systems - Content-based 
                Recommendation System Content-Based and Collaborative Filtering Recommendation. In this in R, 
                we will work on a collaborative filtering recommender system, and more specifically, on a 
                recommendation system and more specifically, a collaborative recommendation system based on 
                ITEM.
            </p>}

      
        {boton === 0 ?
            <p className='Contenido'>En el proyecto de Ciencia de Datos, se hace uso de estos cuatro 
                paquetes - 'recommenderlab', 'ggplot2', 'data.table' y 'reshape2'.
            </p>
        :   <p className='Contenido'>In the Data Science project, these four packages are used - 
                'recommenderlab', 'ggplot2', 'data.table' y 'reshape2'.
            </p>}


      <img src={pelis1} alt='carros1' className='imgUno' />
      <img src={pelis2} alt='carros2' className='imgUno' />  


        {boton === 0 ?
            <p className='Contenido'>Ahora se recuperan los datos de movies.csv en movie_data dataframe y 
                ratings.csv en rating_data. Se Utiliza la función str() para mostrar información sobre el 
                marco de datos movie_data.
            </p>
        :   <p className='Contenido'>Now the data is retrieved from movies.csv in movie_data dataframe 
                and ratings.csv in rating_data. The str() function is used to display information about 
                the movie_data frame. movie_data dataframe.
            </p>}

      <img src={pelis3} alt='carros2' className='imgUno' />
      <img src={pelis4} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>Ahora se muestran las seis primeras filas del conjunto de datos 
                utilizando la función head() y se utliza la función summary() para obtener un resumen del 
                mismo.
            </p>
        :   <p className='Contenido'>The first six rows of the dataset are now displayed using the head() 
                function using the head() function and use the summary() function to get a summary of the 
                data set. summary() function is used to get a summary of the data set.
            </p>}

      <img src={pelis5} alt='carros3' className='imgUno' />
      <img src={pelis6} alt='carros4' className='imgUno' />


        {boton === 0 ?
            <p className='Contenido'>En la tabla anterior, se observa que la columna userId y la columna 
                movieId están formadas por números enteros. Además, se tienen que convertir los géneros 
                presentes en el marco de datos movie_data a un formato más utilizable por los usuarios. 
                Para ello, crearemos primero una codificación de un solo paso para crear una matriz que 
                comprenda los géneros correspondientes a cada una de las películas. 
            </p>
        :   <p className='Contenido'>In the table above, you can see that the column userId and column 
                movieId column consist of integers. In addition, the genres present in the movie_data 
                present in the movie_data frame to a more usable format for the users. To do this, we 
                will first create a one-step encoding to create a matrix that the genres corresponding 
                to each of the movies.
            </p>}

      <img src={pelis7} alt='carros1' className='imgUno' />
      <img src={pelis8} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>En el siguiente paso del preprocesamiento de datos del proyecto R, 
                se crea una "matriz de búsqueda" que permitirá realizar una búsqueda sencilla de las 
                películas especificando el género presente en la lista.
            </p>
        :   <p className='Contenido'>In the next step of the data preprocessing of the R project, a 
                "search matrix" is created, a "search matrix" is created that will allow a simple search 
                of the movies by specifying the genre present in the list. films by specifying the genre 
                present in the list.
            </p>}

      <img src={pelis9} alt='carros1' className='imgUno' />
      <img src={pelis10} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>Hay películas que tienen varios géneros, por ejemplo, Toy Story, es 
                una película de animación, pero, también entra dentro de los géneros de Comedia, Fantasía e 
                Infantil. Esto se aplica a la mayoría de las películas. Para que el sistema de recomendación de 
                películas dé sentido a las valoraciones a través de recommenderlabs, se tiene que convertir la 
                matriz en una matriz dispersa. Esta nueva matriz es de la clase 'realRatingMatrix'. Esto se 
                realiza de la siguiente manera:
            </p>
        :   <p className='Contenido'>There are movies that have several genres, for example, Toy Story,
                is an animated movie, but it also falls within the genres of Comedy, Fantasy and Children.
                This applies to most movies. For the movie recommendation system to make sense of the
                ratings through recommenderlabs, the matrix must be converted to a sparse matrix. This new
                matrix is of the 'realRatingMatrix' class. This is done as follows:
            </p>}

      <img src={pelis11} alt='carros1' className='imgUno' />
      <img src={pelis12} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>Algunos de los parámetros importantes que proporcionan varias 
                opciones para la construcción de sistemas de recomendación de películas.
            </p>
        :   <p className='Contenido'>Some of the important parameters that provide several options for
                building movie recommendation systems.
            </p>}

      <img src={pelis13} alt='carros1' className='imgUno' />
      <img src={pelis14} alt='carros2' className='imgUno' />

      <img src={pelis15} alt='carros1' className='imgUno' />
      <img src={pelis16} alt='carros2' className='imgUno' />

      {boton === 0 ?
            <p className='Contenido'>El Filtrado Colaborativo consiste en sugerir películas a los usuarios 
                que se basan en la recopilación de preferencias de muchos otros usuarios. Por ejemplo, si 
                a un usuario A le gusta ver películas de acción y también al usuario B, entonces las 
                películas que el usuario B verá en el futuro serán recomendadas a A y viceversa. Por lo 
                tanto, la recomendación de películas depende de la creación de una relación de similitud 
                entre los dos usuarios. Con la ayuda de recommenderlab, podemos calcular similitudes 
                utilizando varios operadores como coseno, pearson y jaccard.
            </p>
        :   <p className='Contenido'>Collaborative Filtering consists of suggesting movies to users based
                on the collection of preferences of many other users. For example, if a user A likes to
                watch action movies and also user B, then the movies that user B will watch in the future
                will be recommended to A and vice versa. Therefore, movie recommendation depends on the
                creation of a similarity relationship between the two users. With the help of
                recommenderlab, we can calculate similarities using various operators such as cosine,
                pearson and jaccard.
            </p>}

      <img src={pelis17} alt='carros1' className='imgUno' />
      <img src={pelis181} alt='carros2' className='imgUno' />
      <img src={pelis182} alt='carros1' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>En la matriz anterior, cada fila y cada columna representan a un 
                usuario. Se ha tomado cuatro usuarios y cada celda de esta matriz representa la similitud 
                que comparten los dos usuarios.
            </p>
        :   <p className='Contenido'>In the above matrix, each row and each column represents a user. 
                Four users have been taken and each cell of this matrix represents the similarity that 
                the two users share.
            </p>}

      <img src={pelis19} alt='carros1' className='imgUno' />
      <img src={pelis201} alt='carros2' className='imgUno' />
      <img src={pelis202} alt='carros1' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>Ahora se van a extraer las calificaciones más singulares.
            </p>
        :   <p className='Contenido'>Now the most singular ratings are going to be extracted.
            </p>}

      <img src={pelis21} alt='carros1' className='imgUno' />
      <img src={pelis22} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>Del análisis descriptivo anterior, seconcluye que la renta anual 
                mínima de los clientes es de 15 y la máxima de 137. Las personas con una renta media de 
                70 tienen la mayor frecuencia en la distribución del histograma. El salario medio de todos 
                los clientes es de 60,56. En el Kernel Density Plot que se mostró anteriormente, se 
                observa que los ingresos anuales tienen una distribución normal.
            </p>
        :   <p className='Contenido'>From the previous descriptive analysis, it is concluded that the
                minimum annual income of the clients is 15 and the maximum of 137. People with an average
                income of 70 have the highest frequency in the histogram distribution. The average salary
                of all customers is 60.56. In the Kernel Density Plot shown above, it is observed that
                annual income has a normal distribution.
            </p>}

      <img src={pelis23} alt='carros2' className='imgUno' />
      <img src={pelis24} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>En esta sección del proyecto de aprendizaje automático, se exploran 
                las películas más vistas del conjunto de datos. Primero se cuenta el número de vistas de 
                una película y luego se organizan en una tabla que las agruparía en orden descendente.
            </p>
        :   <p className='Contenido'>In this section of the machine learning project, the most viewed
                movies of the dataset are explored. First, the number of views of a movie is counted and
                then it is organized in a table that would group them in descending order.
            </p>}


      <img src={pelis25} alt='carros1' className='imgUno' />
      <img src={pelis26} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>Ahora, se va a visualizar un gráfico de barras para el número total 
                de vistas de las películas más vistas. Para ello se utiliza ggplot2.
            </p>
        :   <p className='Contenido'>Now, a bar chart is going to be visualized for the total number of
                views of the most viewed movies. For this, ggplot2 is used.
            </p>}

      <img src={pelis27} alt='carros1' className='imgUno' />
      <img src={pelis28} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>En el gráfico de barras anterior, se observa que Pulp Fiction es la 
                película más vista, seguida de Forrest Gump.
            </p>
        :   <p className='Contenido'>In the above bar chart, it is observed that Pulp Fiction is the most
                viewed movie, followed by Forrest Gump.
            </p>}

        {boton === 0 ?
            <h1 className='TituloUno'>Mapa de calor de las puntuaciones de las películas</h1>
        :   <h1 className='TituloUno'>Heatmap of movie ratings</h1>}


        {boton === 0 ?
            <p className='Contenido'>Ahora, en este proyecto de ciencia de datos del sistema de 
                recomendación, se va a visualizar un mapa de calor de las calificaciones de películas. 
                Este mapa de calor contendrá primero 25 filas y 25 columnas de la siguiente manera:
            </p>
        :   <p className='Contenido'>Now, in this data science project of the recommendation system, a
                heatmap of movie ratings is going to be visualized. This heatmap will first contain 25
                rows and 25 columns in the following way:
            </p>}


      <img src={pelis29} alt='carros1' className='imgUno' />
      <img src={pelis30} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>Se lleva a cabo la preparación de datos en los siguientes tres 
                pasos:
                <ol>
                    <li>Selección de datos útiles.</li>
                    <li>Normalizar los datos.</li>
                    <li>Binarizar los datos.</li>
                </ol>
            </p>
        :   <p className='Contenido'>Data preparation is carried out in the following three steps:
                <ol>
                    <li>Selection of useful data.</li>
                    <li>Normalize the data.</li>
                    <li>Binarize the data.</li>
                </ol>
            </p>}

        {boton === 0 ?
            <h1 className='TituloUno'>Selección de datos útiles</h1>
        :   <h1 className='TituloUno'>Selection of useful data</h1>}

      
        {boton === 0 ?
            <p className='Contenido'>Para encontrar datos útiles en el conjunto de datos, se han fijado 
                en 50 el umbral para el número mínimo de usuarios que han valorado una película. Lo 
                mismo se aplica al número mínimo de visionados por película. De este modo, se ha filtrado 
                una lista de películas vistas a partir de las menos vistas.
            </p>
        :   <p className='Contenido'>To find useful data in the dataset, a threshold of 50 has been set
                for the minimum number of users who have rated a movie. The same is applied to the
                minimum number of views per movie. In this way, a list of movies viewed has been filtered
                from the least viewed.
            </p>}

      <img src={pelis31} alt='carros1' className='imgUno' />
      <img src={pelis32} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>Ahora se visualiza la distribución de las valoraciones medias por 
                usuario.
            </p>
        :   <p className='Contenido'>Now the distribution of the average ratings per user is visualized.
            </p>}

      <img src={pelis33} alt='carros1' className='imgUno' />
      <img src={pelis34} alt='carros2' className='graficos' />

        {boton === 0 ?
            <h1 className='TituloUno'>Normalización de datos</h1>
        :   <h1 className='TituloUno'>Data normalization</h1>}

        {boton === 0 ?
            <p className='Contenido'>En el caso de algunos usuarios, puede haber valoraciones altas o 
                bajas para todas las películas vistas. Esto actuará como un sesgo al implementar el 
                modelo. Para eliminarlo, se normalizan los datos. La normalización es un procedimiento de 
                preparación de datos para estandarizar los valores numéricos de una columna a un valor de 
                escala común. Esto se hace de forma que no haya distorsión en el rango de valores. La 
                normalización transforma el valor medio de la columna de valoraciones en 0. A 
                continuación, se traza un mapa de calor que delinea las valoraciones normalizadas.
            </p>
        :   <p className='Contenido'>In the case of some users, there may be high or low ratings for all
                the movies viewed. This will act as a bias when implementing the model. To eliminate it,
                the data is normalized. Normalization is a data preparation procedure to standardize the
                numeric values of a column to a common scale value. This is done so that there is no
                distortion in the range of values. Normalization transforms the mean value of the rating
                column to 0. Then a heatmap is plotted that outlines the normalized ratings.
            </p>}

      <img src={pelis35} alt='carros1' className='imgUno' />
      <img src={pelis36} alt='carros2' className='graficos' />

        {boton === 0 ?
            <h1 className='TituloUno'>Binarización de datos</h1>
        :   <h1 className='TituloUno'>Data binarization</h1>}


        {boton === 0 ?
              <p className='Contenido'>En el último paso de preparación de datos en este proyecto de 
                  ciencia de datos, se binarizan los datos. Binarizar los datos significa que se tiene 
                  dos valores discretos 1 y 0, lo que permitirá que los sistemas de recomendación 
                  funcionen de manera más eficiente. Se define una matriz que consistirá en 1 si la 
                  valoración es superior a 3 y en caso contrario será 0.
              </p>
        :   <p className='Contenido'>In the last step of data preparation in this data science project,
                the data is binarized. Binarizing the data means that it has two discrete values 1 and 0,
                which will allow the recommendation systems to work more efficiently. A matrix is
                defined that will consist of 1 if the rating is greater than 3 and otherwise it will be
                0.
            </p>}


    <img src={pelis37} alt='carros1' className='imgUno' />
    <img src={pelis38} alt='carros2' className='graficos' />

          {boton === 0 ?
              <h1 className='TituloUno'>Sistema de Filtrado Colaborativo</h1>
          :   <h1 className='TituloUno'>Collaborative Filtering System</h1>}

          {boton === 0 ?
              <p className='Contenido'>En esta sección del proyecto de ciencia de datos, se desarrolla 
                  un propio Sistema de Filtrado Colaborativo Basado en Items. Este tipo de filtrado 
                  colaborativo encuentra similitudes en los artículos basándose en las valoraciones que 
                  la gente hace de ellos. El algoritmo construye primero una tabla de artículos similares 
                  de los clientes que los han comprado en una combinación de artículos similares. A 
                  continuación, se introduce en el sistema de recomendación.
              </p>
          :   <p className='Contenido'>In this section of the data science project, a Collaborative
                  Filtering System Based on Items is developed. This type of collaborative filtering
                  finds similarities in the items based on the ratings people make of them. The algorithm
                  first builds a table of similar items from the customers who have bought them in a
                  combination of similar items. Then it is introduced into the recommendation system.
              </p>}

          {boton === 0 ?
              <p className='Contenido'>La similitud entre productos individuales y productos relacionados 
                  puede determinarse con el siguiente algoritmo.
              </p>
          :   <p className='Contenido'>The similarity between individual products and related products
                  can be determined with the following algorithm.
              </p>}

          {boton === 0 ?
              <p className='Contenido'>
                  <ol>
                      <li> Para cada artículo i1 presente en el catálogo de productos, comprado por el 
                            cliente C.</li>
                      <li> Y, para cada artículo i2 también comprado por el cliente C.</li> 
                      <li> Crear registro de que el cliente compró los artículos i1 e i2.</li>
                      <li> Calcular la similitud entre i1 e i2.</li>
                  </ol>  
              </p>
          :   <p className='Contenido'>
                  <ol>
                      <li> For each item i1 present in the product catalog, bought by the customer C.</li>
                      <li> And, for each item i2 also bought by the customer C.</li>
                      <li> Create a record that the customer bought the items i1 and i2.</li>
                      <li> Calculate the similarity between i1 and i2.</li>
                  </ol>
              </p>}

          {boton === 0 ?
              <p className='Contenido'>Se construye este sistema de filtrado dividiendo el conjunto de 
                    datos en 80% conjunto de entrenamiento y 20% conjunto de prueba.
              </p>
          :   <p className='Contenido'>This filtering system is built by dividing the dataset into 80%
                    training set and 20% test set.
              </p>}
    
    <img src={pelis39} alt='carros1' className='imgUno' />
    <img src={pelis40} alt='carros2' className='imgUno' />

          {boton === 0 ?
              <h1 className='TituloUno'>Creación del sistema de recomendación con R</h1>
          :   <h1 className='TituloUno'>Creation of the recommendation system with R</h1>}

          {boton === 0 ?
              <p className='Contenido'>Ahora se exploran los distintos parámetros del Filtro Colaborativo 
                  Basado en Items. Estos parámetros son de naturaleza predeterminada. En el primer paso, 
                  k denota el número de elementos para calcular sus similitudes. En este caso, k es igual 
                  a 30. Por lo tanto, el algoritmo identificará los k elementos más similares y almacenará 
                  su número. Se Utiliza el método del coseno que es el predeterminado, pero también puede 
                  utilizar el método de Pearson.
              </p>
          :   <p className='Contenido'>Now the different parameters of the Collaborative Filtering Based
                  on Items are explored. These parameters are of a predetermined nature. In the first
                  step, k denotes the number of elements to calculate their similarities. In this case,
                  k is equal to 30. Therefore, the algorithm will identify the k most similar elements
                  and store their number. The cosine method is used, which is the default, but you can
                  also use the Pearson method.
              </p>}

    <img src={pelis41} alt='carros1' className='imgUno' />
    <img src={pelis42} alt='carros2' className='imgUno' />

    <img src={pelis43} alt='carros1' className='imgUno' />
    <img src={pelis44} alt='carros2' className='imgUno' />


          {boton === 0 ?
              <p className='Contenido'>Se explica el modelo de sistema de recomendación de ciencia de 
                  datos de la siguiente manera:
              </p>
          :   <p className='Contenido'>The data science recommendation system model is explored as follows:
              </p>}

          {boton === 0 ?
              <p className='Contenido'>Utilizando la función getModel(), se recupera el recommen_model. 
                  A continuación, se encuentra la clase y las dimensiones de la matriz de similitud que 
                  se encuentra dentro de model_info. Por último, se genera un mapa de calor, que 
                  contendrá los 20 elementos principales y visualizará la similitud compartida entre ellos.
              </p>
          :   <p className='Contenido'>Using the getModel() function, the recommen_model is retrieved.
                  Next, the class and dimensions of the similarity matrix found within model_info are
                  found. Finally, a heat map is generated, which will contain the 20 main elements and
                  will visualize the shared similarity between them.
              </p>}

    <img src={pelis45} alt='carros1' className='imgUno' />
    <img src={pelis461} alt='carros2' className='imgUno' />
    <img src={pelis462} alt='carros2' className='graficos' />


          {boton === 0 ?
              <p className='Contenido'>En el siguiente paso del proyecto ML, se realiza la suma de filas 
                  y columnas con la similitud de los objetos por encima de 0. Se Visualizará la suma de 
                  columnas a través de una distribución como la siguiente:
              </p>
          :   <p className='Contenido'>In the next step of the ML project, the sum of rows and columns
                  with the similarity of the objects above 0 is performed. The sum of columns will be
                  visualized through a distribution as follows:
              </p>}

    <img src={pelis47} alt='carros1' className='imgUno' />
    <img src={pelis481} alt='carros2' className='imgUno' />
    <img src={pelis482} alt='carros1' className='graficos' />

          {boton === 0 ?
              <p className='Contenido'>Se Crea una variable top_recommendations que se inicializará a 10, 
                    especificando el número de películas para cada usuario. A continuación, se utiliza la 
                    función predict() que identificará elementos similares y los clasificará 
                    adecuadamente. Aquí, cada calificación se utiliza como un peso. Cada peso se 
                    multiplica por las similitudes relacionadas. Finalmente, todo se suma al final.
              </p>
          :   <p className='Contenido'>A top_recommendations variable is created that will be initialized
                    to 10, specifying the number of movies for each user. Next, the predict() function
                    is used that will identify similar elements and classify them appropriately. Here,
                    each rating is used as a weight. Each weight is multiplied by the related
                    similarities. Finally, everything is summed up at the end.
              </p>}

    <img src={pelis49} alt='carros1' className='imgUno' />
    <img src={pelis50} alt='carros2' className='imgUno' />

    <img src={pelis51} alt='carros1' className='imgUno' />
    <img src={pelis52} alt='carros2' className='imgUno' />

    <img src={pelis53} alt='carros1' className='imgUno' />
    <img src={pelis54} alt='carros2' className='imgUno' />

          {boton === 0 ?
              <p className='Contenido'>Los sistemas de recomendación son el tipo más popular de 
                  aplicaciones de aprendizaje automático que se utilizan en todos los sectores. Suponen 
                  una mejora respecto a los algoritmos de clasificación tradicionales, ya que pueden 
                  tomar muchas clases de entrada y proporcionar algoritmos basados en rankings de 
                  similitud para ofrecer al usuario resultados precisos. Estos sistemas de recomendación 
                  han evolucionado con el tiempo y han incorporado muchas técnicas avanzadas de 
                  aprendizaje automático para ofrecer a los usuarios el contenido que desean.
              </p>
          :   <p className='Contenido'>Recommendation systems are the most popular type of machine
                  learning applications used in all sectors. They represent an improvement over
                  traditional classification algorithms, as they can take many input classes and
                  provide ranking-based similarity algorithms to provide users with accurate results.
                  These recommendation systems have evolved over time and have incorporated many
                  advanced machine learning techniques to offer users the content they want.
              </p>}

    </div>
  )
}
