import React from 'react'
import fake1 from '../img/fake1.PNG'
import fake2 from '../img/fake2.PNG'
import fake3 from '../img/fake3.PNG'
import fake4 from '../img/fake4.PNG'
import fake5 from '../img/fake5.PNG'
import fake6 from '../img/fake6.PNG'
import fake7 from '../img/fake7.PNG'

export const Dos = () => {
    return (
      <div className='Dos'>
        <h1 className='TituloDos'>
            Detección de noticias falsas con Python
        </h1>
        <p className='IntroDos'>Este proyecto en python de detección de noticias falsas Usa sklearn, 
            construimos un TfidfVectorizer en nuestro conjunto de datos. A continuación, inicializamos 
            un clasificador pasivo-agresivo y ajustamos el modelo. Al final, la puntuación de precisión 
            y la matriz de confusión nos indican la eficacia de nuestro modelo.
        </p>
  
        <p className='IntroDos'>El conjunto de datos que se utilizan para este proyecto python se llaman 
            news.csv. Este conjunto de datos tiene una forma de 7796×4. La primera columna identifica la 
            noticia, la segunda y la tercera son el título y el texto, y la cuarta columna tiene etiquetas 
            que indican si la noticia es REAL o FALSA. 
        </p>
  
        <h1 className='TituloDos'>Pasos para detectar noticias falsas con Python</h1>
  
        <p className='Contenido'>Se importan las bibliotecas necesarias para el proyecto:
        </p>
  
        <img src={fake1} alt='insta1' className='imgDos' />

        <p className='Contenido'>Ahora, se leen los datos en un DataFrame, y se obtiene la forma de los 
        datos y los 5 primeros registros.
        </p>

        <img src={fake2} alt='insta2' className='imgDos' />
  
        <p className='Contenido'>
        Y obtener las etiquetas del DataFrame.
        </p>
  
        <img src={fake3} alt='insta3' className='imgDos' />
  
        <p className='Contenido'>
        Divida el conjunto de datos en conjuntos de entrenamiento y de prueba.
        </p>
  
        <img src={fake4} alt='insta4' className='imgDos' />
  
        <p className='Contenido'>
        Se inicializa un TfidfVectorizer con palabras de parada del idioma inglés y una frecuencia de 
        documento máxima de 0,7 (se descartarán los términos con una frecuencia de documento mayor). 
        Las palabras de parada son las palabras más comunes de un idioma que deben filtrarse antes de 
        procesar los datos del lenguaje natural. Y un TfidfVectorizer convierte una colección de 
        documentos en bruto en una matriz de características TF-IDF.
        </p>

        <p className='Contenido'>
            Ahora, ajuste y transforme el vectorizador en el conjunto de entrenamiento, y transforme 
            el vectorizador en el conjunto de prueba.
        </p>
  
        <img src={fake5} alt='insta5' className='imgDos' />


        <p className='Contenido'>A continuación, se inicia un PassiveAggressiveClassifier.
        </p>

        <p className='Contenido'>Se va a predecir en el conjunto de prueba de la TfidfVectorizer y 
        calcular la precisión con accuracy_score() de sklearn.metrics.
        </p>

        <img src={fake6} alt='insta6' className='imgDos' />
  
        <p className='Contenido'>
            Se obtiene una precisión del 92,74% con este modelo. Por último, se imprime una matriz de 
            confusión para conocer el número de falsos y verdaderos negativos y positivos.
        </p>
        
        <img src={fake7} alt='insta7' className='imgDos' />

        <p className='Contenido'>Con este modelo tenemos 589 verdaderos positivos, 586 verdaderos 
        negativos, 43 falsos positivos y 49 falsos negativos.
        </p>
  
      </div>
    )
  }