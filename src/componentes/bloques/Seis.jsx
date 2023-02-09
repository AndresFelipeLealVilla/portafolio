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
import cliente57 from '../img/cliente57.PNG'
import cliente58 from '../img/cliente58.PNG'
import cliente59 from '../img/cliente59.PNG'
import cliente60 from '../img/cliente60.PNG'
import cliente61 from '../img/cliente61.PNG'
import cliente62 from '../img/cliente62.PNG'

export const Seis = () => {
  return (
    <div className='Uno'>
      <p className='IntroUno'>¿Alguna vez has estado en una plataforma de streaming online como Netflix, 
      Amazon Prime, Voot? Vi una película y después de algún tiempo, esa plataforma comenzó a recomendarme 
      diferentes películas y programas de televisión. Me preguntaba cómo la plataforma de streaming de 
      películas podía sugerirme contenidos que me atrajeran. Entonces me encontré con algo conocido como 
      Sistema de Recomendación. Este sistema es capaz de aprender mis patrones de visionado y ofrecerme 
      sugerencias relevantes. Habiendo presenciado la cuarta revolución industrial, en la que la 
      Inteligencia Artificial y otras tecnologías están dominando el mercado, estoy seguro de que te 
      habrás encontrado con un sistema de recomendación en tu vida cotidiana. También estoy seguro de que 
      en este momento la curiosidad debe estar sacando lo mejor de ti.
      </p>

      <h1 className='TituloUno'>Sistema de Recomendación de Películas</h1>
      <p className='IntroUno'>El objetivo principal de este proyecto de aprendizaje automático es 
      construir un motor de recomendación que recomiende películas a los usuarios. Este proyecto en R 
      está diseñado para ayudarte a entender el funcionamiento de un sistema de recomendación. 
      Desarrollaremos un Filtro Colaborativo Basado en Items. Al final de este tutorial, adquirirás 
      experiencia en la aplicación de tus conocimientos de R, Ciencia de Datos y Aprendizaje Automático 
      en un proyecto de la vida real.</p>


      <p className='IntroUno'>Un sistema de recomendación proporciona sugerencias a los usuarios a través 
      de un proceso de filtrado que se basa en las preferencias del usuario y el historial de navegación. 
      La información sobre el usuario se toma como entrada. La información se extrae de la entrada en forma 
      de datos de navegación. Esta información refleja el uso previo del producto, así como las valoraciones 
      asignadas. Un sistema de recomendación es una plataforma que ofrece a sus usuarios diversos contenidos 
      en función de sus preferencias y gustos. Un sistema de recomendación toma la información sobre el 
      usuario como entrada. El sistema de recomendación es una implementación de los algoritmos de 
      aprendizaje automático.
      </p>

      <p className='IntroUno'>Un sistema de recomendación también encuentra similitudes entre diferentes 
      productos. Por ejemplo, el sistema de recomendación de Netflix ofrece recomendaciones de películas 
      similares a las que se han visto en el pasado. Además, existe un filtrado de contenidos colaborativo 
      que proporciona recomendaciones en relación con otros usuarios que puedan tener un historial de 
      visionado o unas preferencias similares. Existen dos tipos de sistemas de recomendación - Sistema de 
      Recomendación Basado en Contenido y Recomendación de Filtrado Colaborativo. En este proyecto de 
      sistema de recomendación en R, trabajaremos en un sistema de recomendación por filtrado colaborativo 
      y más concretamente, en un sistema de recomendación colaborativo basado en ITEM.
      </p>

      <p className='Contenido'>En el proyecto de Ciencia de Datos, se hace uso de estos cuatro paquetes - 
      'recommenderlab', 'ggplot2', 'data.table' y 'reshape2'.
      </p>

      <img src={pelis1} alt='carros1' className='imgUno' />
      <img src={pelis2} alt='carros2' className='imgUno' />  


      <p className='Contenido'>Ahora se recuperan los datos de movies.csv en movie_data dataframe y 
      ratings.csv en rating_data. Se Utiliza la función str() para mostrar información sobre el marco de 
      datos movie_data.
      </p>

      <img src={pelis3} alt='carros2' className='imgUno' />
      <img src={pelis4} alt='carros2' className='imgUno' />

      <p className='Contenido'>Ahora se muestran las seis primeras filas del conjunto de datos 
      utilizando la función head() y se utliza la función summary() para obtener un resumen del mismo.
      </p>

      <img src={pelis5} alt='carros3' className='imgUno' />
      <img src={pelis6} alt='carros4' className='imgUno' />

      <p className='Contenido'>En la tabla anterior, se observa que la columna userId y la columna 
      movieId están formadas por números enteros. Además, se tienen que convertir los géneros presentes 
      en el marco de datos movie_data a un formato más utilizable por los usuarios. Para ello, crearemos 
      primero una codificación de un solo paso para crear una matriz que comprenda los géneros 
      correspondientes a cada una de las películas. 
      </p>

      <img src={pelis7} alt='carros1' className='imgUno' />
      <img src={pelis8} alt='carros2' className='imgUno' />

      <p className='Contenido'>En el siguiente paso del preprocesamiento de datos del proyecto R, 
      se crea una "matriz de búsqueda" que permitirá realizar una búsqueda sencilla de las películas 
      especificando el género presente en la lista.
      </p>

      <img src={pelis9} alt='carros1' className='imgUno' />
      <img src={pelis10} alt='carros2' className='imgUno' />


      <p className='Contenido'>Hay películas que tienen varios géneros, por ejemplo, Toy Story, es una 
      película de animación, pero, también entra dentro de los géneros de Comedia, Fantasía e Infantil. 
      Esto se aplica a la mayoría de las películas. Para que el sistema de recomendación de películas dé 
      sentido a las valoraciones a través de recommenderlabs, se tiene que convertir la matriz en una 
      matriz dispersa. Esta nueva matriz es de la clase 'realRatingMatrix'. Esto se realiza de la 
      siguiente manera:
      </p>

      <img src={pelis11} alt='carros1' className='imgUno' />
      <img src={pelis12} alt='carros2' className='imgUno' />

      <p className='Contenido'>Algunos de los parámetros importantes que proporcionan varias opciones 
      para la construcción de sistemas de recomendación de películas.
      </p>

      <img src={pelis13} alt='carros1' className='imgUno' />
      <img src={pelis14} alt='carros2' className='imgUno' />

      <img src={pelis15} alt='carros1' className='imgUno' />
      <img src={pelis16} alt='carros2' className='imgUno' />

      <p className='Contenido'>El Filtrado Colaborativo consiste en sugerir películas a los usuarios que 
      se basan en la recopilación de preferencias de muchos otros usuarios. Por ejemplo, si a un usuario A 
      le gusta ver películas de acción y también al usuario B, entonces las películas que el usuario B 
      verá en el futuro serán recomendadas a A y viceversa. Por lo tanto, la recomendación de películas 
      depende de la creación de una relación de similitud entre los dos usuarios. Con la ayuda de 
      recommenderlab, podemos calcular similitudes utilizando varios operadores como coseno, pearson y 
      jaccard.
      </p>

      <img src={pelis17} alt='carros1' className='imgUno' />
      <img src={pelis181} alt='carros2' className='imgUno' />
      <img src={pelis182} alt='carros1' className='graficos' />

      <p className='Contenido'>En la matriz anterior, cada fila y cada columna representan a un usuario. 
      Se ha tomado cuatro usuarios y cada celda de esta matriz representa la similitud que comparten los 
      dos usuarios.
      </p>

      <img src={pelis19} alt='carros1' className='imgUno' />
      <img src={pelis201} alt='carros2' className='imgUno' />
      <img src={pelis202} alt='carros1' className='graficos' />

      <p className='Contenido'>Ahora se van a extraer las calificaciones más singulares.
      </p>

      <img src={pelis21} alt='carros1' className='imgUno' />
      <img src={pelis22} alt='carros2' className='imgUno' />

      <p className='Contenido'>Del análisis descriptivo anterior, seconcluye que la renta anual mínima 
      de los clientes es de 15 y la máxima de 137. Las personas con una renta media de 70 tienen la mayor 
      frecuencia en la distribución del histograma. El salario medio de todos los clientes es de 60,56. En 
      el Kernel Density Plot que se mostró anteriormente, se observa que los ingresos anuales tienen una 
      distribución normal.
      </p>

      <img src={pelis23} alt='carros2' className='imgUno' />
      <img src={pelis24} alt='carros2' className='imgUno' />

      <p className='Contenido'>En esta sección del proyecto de aprendizaje automático, se exploran las 
      películas más vistas del conjunto de datos. Primero se cuenta el número de vistas de una película 
      y luego se organizan en una tabla que las agruparía en orden descendente.
      </p>


      <img src={pelis25} alt='carros1' className='imgUno' />
      <img src={pelis26} alt='carros2' className='imgUno' />


    <p className='Contenido'>Ahora, se va a visualizar un gráfico de barras para el número total de 
    vistas de las películas más vistas. Para ello se utiliza ggplot2.
    </p>

      <img src={pelis27} alt='carros1' className='imgUno' />
      <img src={pelis28} alt='carros2' className='graficos' />

    <p className='Contenido'>En el gráfico de barras anterior, se observa que Pulp Fiction es la 
    película más vista, seguida de Forrest Gump.
    </p>

    <h1 className='TituloUno'>Mapa de calor de las puntuaciones de las películas</h1>

    
    <p className='Contenido'>Ahora, en este proyecto de ciencia de datos del sistema de recomendación, 
    se va a visualizar un mapa de calor de las calificaciones de películas. Este mapa de calor contendrá 
    primero 25 filas y 25 columnas de la siguiente manera -
    </p>

    <img src={pelis29} alt='carros1' className='imgUno' />
      <img src={pelis30} alt='carros2' className='graficos' />

      <p className='Contenido'>Se lleva a cabo la preparación de datos en los siguientes tres pasos:
        <ol>
          <li>Selección de datos útiles.</li>
          <li>Normalizar los datos.</li>
          <li>Binarizar los datos.</li>
        </ol>
      </p>

      <h1 className='TituloUno'>Selección de datos útiles</h1>

      <p className='Contenido'>Para encontrar datos útiles en el conjunto de datos, se han fijado en 50 
      el umbral para el número mínimo de usuarios que han valorado una película. Lo mismo se aplica al 
      número mínimo de visionados por película. De este modo, se ha filtrado una lista de películas 
      vistas a partir de las menos vistas.
      </p>

      <img src={pelis31} alt='carros1' className='imgUno' />
      <img src={pelis32} alt='carros2' className='graficos' />

      <p className='Contenido'>Ahora se visualiza la distribución de las valoraciones medias por usuario.
      </p>

      <img src={pelis33} alt='carros1' className='imgUno' />
      <img src={pelis34} alt='carros2' className='graficos' />

      <h1 className='TituloUno'>Normalización de datos</h1>

      <p className='Contenido'>En el caso de algunos usuarios, puede haber valoraciones altas o bajas 
      para todas las películas vistas. Esto actuará como un sesgo al implementar el modelo. Para 
      eliminarlo, se normalizan los datos. La normalización es un procedimiento de preparación de datos 
      para estandarizar los valores numéricos de una columna a un valor de escala común. Esto se hace de 
      forma que no haya distorsión en el rango de valores. La normalización transforma el valor medio de 
      la columna de valoraciones en 0. A continuación, se traza un mapa de calor que delinea las 
      valoraciones normalizadas.
      </p>

      <img src={pelis35} alt='carros1' className='imgUno' />
      <img src={pelis36} alt='carros2' className='graficos' />



      <h1 className='TituloUno'>Binarización de datos</h1>


      <p className='Contenido'>En el último paso de preparación de datos en este proyecto de ciencia de 
      datos, se binarizan los datos. Binarizar los datos significa que se tiene dos valores discretos 1 y 
      0, lo que permitirá que los sistemas de recomendación funcionen de manera más eficiente. Se define 
      una matriz que consistirá en 1 si la valoración es superior a 3 y en caso contrario será 0.
      </p>


    <img src={pelis37} alt='carros1' className='imgUno' />
    <img src={pelis38} alt='carros2' className='graficos' />

    
    <h1 className='TituloUno'>Sistema de Filtrado Colaborativo</h1>

    
    <p className='Contenido'>En esta sección del proyecto de ciencia de datos, se desarrolla un propio Sistema 
    de Filtrado Colaborativo Basado en Items. Este tipo de filtrado colaborativo encuentra similitudes en 
    los artículos basándose en las valoraciones que la gente hace de ellos. El algoritmo construye primero 
    una tabla de artículos similares de los clientes que los han comprado en una combinación de artículos 
    similares. A continuación, se introduce en el sistema de recomendación.
    </p>

    <p className='Contenido'>
    La similitud entre productos individuales y productos relacionados puede determinarse con el 
    siguiente algoritmo.
    </p>

    <p className='Contenido'>
      <ol>
        <li> Para cada artículo i1 presente en el catálogo de productos, comprado por el cliente C.</li>
        <li> Y, para cada artículo i2 también comprado por el cliente C.</li> 
        <li> Crear registro de que el cliente compró los artículos i1 e i2.</li>
        <li>  Calcular la similitud entre i1 e i2.</li>
      </ol>  
    </p>

    <p className='Contenido'>Se construye este sistema de filtrado dividiendo el conjunto de datos en 
    80% conjunto de entrenamiento y 20% conjunto de prueba.
    </p>   
    
    <img src={pelis39} alt='carros1' className='imgUno' />
    <img src={pelis40} alt='carros2' className='imgUno' />


    <h1 className='TituloUno'>Creación del sistema de recomendación con R</h1>

    <p className='Contenido'>Ahora se exploran los distintos parámetros del Filtro Colaborativo Basado 
      en Items. Estos parámetros son de naturaleza predeterminada. En el primer paso, k denota el número de 
      elementos para calcular sus similitudes. En este caso, k es igual a 30. Por lo tanto, el algoritmo 
      identificará los k elementos más similares y almacenará su número. Se Utiliza el método del coseno 
      que es el predeterminado, pero también puede utilizar el método de Pearson.
      </p>

    <img src={pelis41} alt='carros1' className='imgUno' />
    <img src={pelis42} alt='carros2' className='imgUno' />

    <img src={pelis43} alt='carros1' className='imgUno' />
    <img src={pelis44} alt='carros2' className='imgUno' />


    <p className='Contenido'>Se explira el modelo de sistema de recomendación de ciencia de datos de la 
    siguiente manera:
    </p>

    <p className='Contenido'>Utilizando la función getModel(), se recupera el recommen_model. A 
    continuación, se encuentra la clase y las dimensiones de la matriz de similitud que se encuentra 
    dentro de model_info. Por último, se genera un mapa de calor, que contendrá los 20 elementos 
    principales y visualizará la similitud compartida entre ellos.
    </p>

    <img src={pelis45} alt='carros1' className='imgUno' />
    <img src={pelis461} alt='carros2' className='imgUno' />
    <img src={pelis462} alt='carros2' className='graficos' />


    <p className='Contenido'>En el siguiente paso del proyecto ML, se realiza la suma de filas y columnas 
    con la similitud de los objetos por encima de 0. Se Visualizará la suma de columnas a través de una 
    distribución como la siguiente:
    </p>

    <img src={pelis47} alt='carros1' className='imgUno' />
    <img src={pelis481} alt='carros2' className='imgUno' />
    <img src={pelis482} alt='carros1' className='graficos' />

      <p className='Contenido'>Se Crea una variable top_recommendations que se inicializará a 10, 
      especificando el número de películas para cada usuario. A continuación, se utiliza la función 
      predict() que identificará elementos similares y los clasificará adecuadamente. Aquí, cada 
      calificación se utiliza como un peso. Cada peso se multiplica por las similitudes relacionadas. 
      Finalmente, todo se suma al final.
      </p>

    <img src={pelis49} alt='carros1' className='imgUno' />
    <img src={pelis50} alt='carros2' className='imgUno' />

    <img src={pelis51} alt='carros1' className='imgUno' />
    <img src={pelis52} alt='carros2' className='imgUno' />

    <img src={pelis53} alt='carros1' className='imgUno' />
    <img src={pelis54} alt='carros2' className='imgUno' />

    <p className='Contenido'>Los sistemas de recomendación son el tipo más popular de aplicaciones de 
    aprendizaje automático que se utilizan en todos los sectores. Suponen una mejora respecto a los 
    algoritmos de clasificación tradicionales, ya que pueden tomar muchas clases de entrada y 
    proporcionar algoritmos basados en rankings de similitud para ofrecer al usuario resultados precisos. 
    Estos sistemas de recomendación han evolucionado con el tiempo y han incorporado muchas técnicas 
    avanzadas de aprendizaje automático para ofrecer a los usuarios el contenido que desean.
    </p>

    </div>
  )
}
