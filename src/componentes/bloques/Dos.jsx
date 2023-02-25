import React from 'react'
import fake1 from '../img/fake1.PNG'
import fake2 from '../img/fake2.PNG'
import fake3 from '../img/fake3.PNG'
import fake4 from '../img/fake4.PNG'
import fake5 from '../img/fake5.PNG'
import fake6 from '../img/fake6.PNG'
import fake7 from '../img/fake7.PNG'

import { useState } from 'react'

export const Dos = () => {

    const [boton, setBoton] = useState(1)


    const handleClick = () => {
      if (boton === 0) {
        setBoton(1);
    
      } if (boton === 1) {
        setBoton(0);
    
      }
    }
    
      return (
        <div className='Dos'>
    
    <button className='BotonIdioma' onClick={handleClick}>{boton === 0 ? 'English' : 'Español'}
    </button>

        {boton === 0 ?
            <h1 className='TituloDos'>Detección de noticias falsas con Python</h1>
        :   <h1 className='TituloDos'>Fake News Detection with Python</h1>}

        {boton === 0 ?     
            <p className='IntroDos'>Este proyecto en python de detección de noticias falsas Usa sklearn, 
                construimos un TfidfVectorizer en nuestro conjunto de datos. A continuación, 
                inicializamos un clasificador pasivo-agresivo y ajustamos el modelo. Al final, la 
                puntuación de precisión y la matriz de confusión nos indican la eficacia de nuestro 
                modelo.
            </p>
        :   <p className='IntroDos'>This python project of fake news detection uses sklearn, we build a
                TfidfVectorizer on our dataset. Then, we initialize a passive-aggressive classifier and
                fit the model. In the end, the accuracy score and the confusion matrix tell us the 
                effectiveness of our model.
            </p>}
  
        {boton === 0 ?
            <p className='IntroDos'>El conjunto de datos que se utilizan para este proyecto python se 
                llaman news.csv. Este conjunto de datos tiene una forma de 7796×4. La primera columna 
                identifica la noticia, la segunda y la tercera son el título y el texto, y la cuarta 
                columna tiene etiquetas que indican si la noticia es REAL o FALSA. 
            </p>
        :   <p className='IntroDos'>The dataset used for this python project is called news.csv. This
                dataset has a shape of 7796×4. The first column identifies the news, the second and
                third are the title and the text, and the fourth column has labels that indicate if the
                news is REAL or FAKE.
            </p>}
  
        {boton === 0 ?
            <h1 className='TituloDos'>Pasos para detectar noticias falsas con Python</h1>
        :   <h1 className='TituloDos'>Steps to detect fake news with Python</h1>}

        {boton === 0 ?
            <p className='Contenido'>Se importan las bibliotecas necesarias para el proyecto:
            </p>
        :   <p className='Contenido'>The necessary libraries for the project are imported:
            </p>}
  
    <img src={fake1} alt='insta1' className='imgDos' />

        {boton === 0 ?
            <p className='Contenido'>Ahora, se leen los datos en un DataFrame, y se obtiene la forma de 
                los datos y los 5 primeros registros.
            </p>
        :   <p className='Contenido'>Now, the data is read into a DataFrame, and the shape of the data
                and the first 5 records are obtained.
            </p>}

    <img src={fake2} alt='insta2' className='imgDos' />
  
        {boton === 0 ?
            <p className='Contenido'>Y obtener las etiquetas del DataFrame.
            </p>
        :   <p className='Contenido'>And get the labels from the DataFrame.
            </p>}
  
    <img src={fake3} alt='insta3' className='imgDos' />
  
        {boton === 0 ?
            <p className='Contenido'>Divida el conjunto de datos en conjuntos de entrenamiento y de 
                prueba.
            </p>
        :   <p className='Contenido'>Split the dataset into training and test sets.
            </p>}
  
    <img src={fake4} alt='insta4' className='imgDos' />
  
        {boton === 0 ?
            <p className='Contenido'>Se inicializa un TfidfVectorizer con palabras de parada del idioma 
                inglés y una frecuencia de documento máxima de 0,7 (se descartarán los términos con una 
                frecuencia de documento mayor). Las palabras de parada son las palabras más comunes de un 
                idioma que deben filtrarse antes de procesar los datos del lenguaje natural. Y un 
                TfidfVectorizer convierte una colección de documentos en bruto en una matriz de 
                características TF-IDF.
            </p>
        :   <p className='Contenido'>A TfidfVectorizer is initialized with stop words from the English
                language and a maximum document frequency of 0.7 (terms with a higher document
                frequency will be discarded). Stop words are the most common words in a language that
                should be filtered out before processing natural language data. And a TfidfVectorizer
                converts a collection of raw documents into a TF-IDF feature matrix.
            </p>}

        {boton === 0 ?
            <p className='Contenido'>Ahora, ajuste y transforme el vectorizador en el conjunto de 
                entrenamiento, y transforme el vectorizador en el conjunto de prueba.
            </p>
        :   <p className='Contenido'>Now, fit and transform the vectorizer on the training set, and
                transform the vectorizer on the test set.
            </p>}
  
    <img src={fake5} alt='insta5' className='imgDos' />

        {boton === 0 ?
            <p className='Contenido'>A continuación, se inicia un PassiveAggressiveClassifier.
            </p>
        :   <p className='Contenido'>Next, a PassiveAggressiveClassifier is initialized.
            </p>}

        {boton === 0 ?
            <p className='Contenido'>Se va a predecir en el conjunto de prueba de la TfidfVectorizer y 
                calcular la precisión con accuracy_score() de sklearn.metrics.
            </p>
        :   <p className='Contenido'>We are going to predict on the test set from the TfidfVectorizer
                and calculate the accuracy with accuracy_score() from sklearn.metrics.
            </p>}

    <img src={fake6} alt='insta6' className='imgDos' />
  
        {boton === 0 ?
            <p className='Contenido'>Se obtiene una precisión del 92,74% con este modelo. Por último, se 
                imprime una matriz de confusión para conocer el número de falsos y verdaderos negativos y 
                positivos.
            </p>
        :   <p className='Contenido'>We get an accuracy of 92.74% with this model. Finally, a confusion
                matrix is printed to know the number of false and true negatives and positives.
            </p>}

    <img src={fake7} alt='insta7' className='imgDos' />

        {boton === 0 ?
            <p className='Contenido'>Con este modelo tenemos 589 verdaderos positivos, 586 verdaderos 
                negativos, 43 falsos positivos y 49 falsos negativos.
            </p>
        :   <p className='Contenido'>With this model we have 589 true positives, 586 true negatives, 43
                false positives and 49 false negatives.
            </p>}
  
      </div>
    )
  }