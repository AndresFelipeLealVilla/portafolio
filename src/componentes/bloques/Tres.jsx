import React from 'react'
import emotion1 from '../img/emotion1.PNG'
import emotion2 from '../img/emotion2.PNG'
import emotion3 from '../img/emotion3.PNG'
import emotion4 from '../img/emotion4.PNG'
import emotion5 from '../img/emotion5.PNG'
import emotion6 from '../img/emotion6.PNG'
import emotion7 from '../img/emotion7.PNG'
import emotion8 from '../img/emotion8.PNG'
import emotion9 from '../img/emotion9.PNG'
import emotion10 from '../img/emotion10.PNG'
import emotion11 from '../img/emotion11.PNG'
import emotion12 from '../img/emotion12.PNG'
import emotion13 from '../img/emotion13.PNG'

import { useState } from 'react'

export const Tres = () => {

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
          <p className='IntroTres'>En este proyecto se intenta reconocer emociones y estados afectivos 
              humanos a partir del habla. Para ello se aprovecha el hecho de que la voz suele reflejar la 
              emoción subyacente a través del tono y la entonación. También es el fenómeno que emplean 
              animales como perros y caballos para poder entender las emociones humanas.
          </p>
      :   <p className='IntroTres'>In this project it is tried to recognize human emotions and affective
              states from speech. For this, it is taken advantage of the fact that the voice usually
              reflects the underlying emotion through the tone and the intonation. It is also the
              phenomenon that animals such as dogs and horses use to be able to understand human
              emotions.
          </p>}

      {boton === 0 ?
          <h1 className='TituloTres'>¿Qué es librosa?</h1>
      :   <h1 className='TituloTres'>What is librosa?</h1>}

      {boton === 0 ?
          <p className='IntroTres'>Librosa es una biblioteca de Python para analizar audio y música. 
              Tiene un diseño de paquetes más plano, estandariza interfaces y nombres, compatibilidad 
              con versiones anteriores, funciones modulares y código legible. 
          </p>
      :   <p className='IntroTres'>Librosa is a Python library for analyzing audio and music. It has a
              flatter package design, standardizes interfaces and names, backwards compatibility,
              modular functions and readable code.
          </p>}
    
      {boton === 0 ?
          <h1 className='TituloTres'>Reconocimiento de emociones mediante la voz</h1>
      :   <h1 className='TituloTres'>Emotion recognition through voice</h1>}

      {boton === 0 ?  
        <p className='Contenido'>Se importan las bibliotecas necesarias para el proyecto:
        </p>
      :   <p className='Contenido'>The necessary libraries for the project are imported:
        </p>}

  <img src={emotion1} alt='insta1' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>Se define una función extract_feature para extraer las funciones mfcc, 
            chroma y mel de un archivo de sonido. Esta función toma 4 parámetros: el nombre del archivo y 
            tres parámetros booleanos para las tres funciones:
        </p>
    :   <p className='Contenido'>A function extract_feature is defined to extract the mfcc, chroma and
            mel features from a sound file. This function takes 4 parameters: the name of the file and
            three boolean parameters for the three functions:
        </p>}

  <img src={emotion2} alt='insta2' className='imgTres' />
  
    {boton === 0 ?
        <p className='Contenido'>Ahora, se define un diccionario para contener los números y las 
            emociones disponibles en el conjunto de datos, y una lista para contener las que se quieren: 
            calma, felicidad, miedo, asco.
        </p>
    :   <p className='Contenido'>Now, a dictionary is defined to contain the numbers and the emotions
            available in the dataset, and a list to contain the ones that are wanted: calm, happiness,
            fear, disgust.
        </p>}
  
  <img src={emotion3} alt='insta3' className='imgTres' />
  
    {boton === 0 ?
        <p className='Contenido'>Ahora, se cargan los datos con una función load_data(), esto toma el 
            tamaño relativo del conjunto de prueba como parámetro. x e y son listas vacías; se usa la 
            función glob() del módulo glob para obtener todas las rutas de los archivos de sonido en el 
            conjunto de datos. El patrón que se usa para esto es: "drive/MyDrive/emotion/Actor_*//*.wav", 
            pues, el conjunto de datos se encuentra almacenado en una carpeta de google drive. Esto se 
            debe a que el conjunto de datos se ve así:
        </p>
    :   <p className='Contenido'>Now, the data is loaded with a load_data() function, this takes the
            relative size of the test set as a parameter. x and y are empty lists; the glob() function
            from the glob module is used to get all the paths of the sound files in the dataset. The
            pattern used for this is: "drive/MyDrive/emotion/Actor_*//*.wav", since, the dataset is
            stored in a google drive folder. This is because the dataset looks like this:
        </p>}
  
  <img src={emotion4} alt='insta4' className='imgTres' />
  
    {boton === 0 ?
        <p className='Contenido'>Entonces, para cada una de esas rutas, se obtiene el nombre base del 
            archivo y la emoción dividiendo el nombre alrededor de "-" y extrayendo el tercer valor:
        </p>
    :   <p className='Contenido'>So, for each of those paths, the base name of the file and the emotion
            are obtained by splitting the name around "-" and extracting the third value:
        </p>}

  <img src={emotion5} alt='insta5' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>Usando el diccionario de emociones, este número se convierte en una 
            emoción, y la función verifica si esta emoción está en la lista de emociones_observadas; si 
            no, continúa con el siguiente archivo. Hace una llamada a extract_feature y almacena lo que 
            se devuelve en 'feature'. Luego, agrega la función a x y la emoción a y. Entonces, la lista 
            x contiene las características Y y contiene las emociones. Se llama a la función 
            train_test_split con estos, el tamaño de la prueba y un valor de estado aleatorio, y lo 
            devolvemos.
        </p>
    :   <p className='Contenido'>Using the emotions dictionary, this number is converted into an
            emotion, and the function checks if this emotion is in the list of observed emotions; if
            not, it continues with the next file. It makes a call to extract_feature and stores what is
            returned in 'feature'. Then, it adds the function to x and the emotion to y. Then, the x
            list contains the features and y contains the emotions. The train_test_split function is
            called with these, the size of the test and a random state value, and it is returned.
        </p>}
  
  <img src={emotion6} alt='insta5' className='imgTres' />


    {boton === 0 ?
        <p className='Contenido'>¡Es hora de dividir el conjunto de datos en conjuntos de entrenamiento 
            y prueba! Se mantiene el conjunto de prueba en un 25% de todo y se usa la función load_data 
            para esto.
        </p>
    :   <p className='Contenido'>It's time to split the dataset into training and test sets! The test
            set is kept at 25% of all and the load_data function is used for this.
        </p>}

  <img src={emotion7} alt='insta6' className='imgTres' />
  
    {boton === 0 ?
        <p className='Contenido'>Observe la forma de los conjuntos de datos de entrenamiento y prueba:
        </p>
    :   <p className='Contenido'>Notice the shape of the training and test datasets:
        </p>}
        
  <img src={emotion8} alt='insta7' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>Y se obtiene el número de características extraídas.
        </p>
    :   <p className='Contenido'>And the number of extracted features is obtained.
        </p>}

  <img src={emotion9} alt='insta7' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>Ahora, se inicializa un MLPClassifier. Este es un clasificador de 
            perceptrón multicapa; optimiza la función de pérdida de registro utilizando LBFGS o descenso 
            de gradiente estocástico. A diferencia de SVM o Naive Bayes, el MLPClassifier tiene una red 
            neuronal interna para fines de clasificación. Este es un modelo ANN feedforward.
        </p>
    :   <p className='Contenido'>Now, an MLPClassifier is initialized. This is a multi-layer perceptron
            classifier; it optimizes the loss function using LBFGS or stochastic gradient descent. Unlike
            SVM or Naive Bayes, the MLPClassifier has an internal neural network for classification
            purposes. This is a feedforward ANN model.
        </p>}

  <img src={emotion10} alt='insta7' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>Montar / entrenar a la modelo.
        </p>
    :   <p className='Contenido'>Mount / train the model.
        </p>}

  <img src={emotion11} alt='insta7' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>Se predicen los valores para el conjunto de prueba. Esto da y_pred (las 
            emociones previstas para las funciones en el conjunto de prueba).
        </p>
    :   <p className='Contenido'>The values are predicted for the test set. This gives y_pred (the
            predicted emotions for the features in the test set).
        </p>}

  <img src={emotion12} alt='insta7' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>Para calcular la precisión del modelo, se llama a la función 
            precision_score() que se importa desde sklearn. Finalmente, se redondea la precisión a 2 
            decimales y se imprime.
        </p>
    :   <p className='Contenido'>To calculate the model accuracy, the precision_score() function is
            called which is imported from sklearn. Finally, the accuracy is rounded to 2 decimal
            places and printed.
        </p>}

  <img src={emotion13} alt='insta7' className='imgTres' />

    {boton === 0 ?
        <p className='Contenido'>En este proyecto de Python, se aprende a reconocer las emociones a 
            partir del habla. Se usa un MLPClassifier, la biblioteca de archivos de sonido para leer el 
            archivo de sonido y la biblioteca de librosa para extraer características de él. Como verá, 
            el modelo entregó una precisión del 67,19%. Eso es un nivel aceptable para el caso.
        </p>
    :   <p className='Contenido'>In this Python project, you learn to recognize emotions from speech.
            An MLPClassifier is used, the sound file library to read the sound file and the librosa
            library to extract features from it. As you will see, the model delivered an accuracy of
            67.19%. That's an acceptable level for the case.
        </p>}
  
      </div>
    )
  }