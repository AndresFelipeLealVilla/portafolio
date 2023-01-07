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

export const Tres = () => {
    return (
      <div className='Tres'>

        <p className='IntroTres'>En este proyecto se intenta reconocer emociones y estados afectivos 
        humanos a partir del habla. Para ello se aprovecha el hecho de que la voz suele reflejar la 
        emoción subyacente a través del tono y la entonación. También es el fenómeno que emplean 
        animales como perros y caballos para poder entender las emociones humanas.
        </p>

        <h1 className='TituloTres'>¿Qué es librosa?</h1>
  
        <p className='IntroTres'>Librosa es una biblioteca de Python para analizar audio y música. 
        Tiene un diseño de paquetes más plano, estandariza interfaces y nombres, compatibilidad con 
        versiones anteriores, funciones modulares y código legible. 
        </p>
  
        <h1 className='TituloTres'>Reconocimiento de emociones mediante la voz</h1>
        
        <p className='Contenido'>Se importan las bibliotecas necesarias para el proyecto:
        </p>
  
        <img src={emotion1} alt='insta1' className='imgTres' />

        <p className='Contenido'>Se define una función extract_feature para extraer las funciones mfcc, 
        chroma y mel de un archivo de sonido. Esta función toma 4 parámetros: el nombre del archivo y 
        tres parámetros booleanos para las tres funciones:
        </p>

        <img src={emotion2} alt='insta2' className='imgTres' />
  
        <p className='Contenido'>
        Ahora, se define un diccionario para contener los números y las emociones disponibles en el 
        conjunto de datos, y una lista para contener las que se quieren: calma, felicidad, miedo, asco.
        </p>
  
        <img src={emotion3} alt='insta3' className='imgTres' />
  
        <p className='Contenido'>
        Ahora, se cargan los datos con una función load_data(), esto toma el tamaño relativo del 
        conjunto de prueba como parámetro. x e y son listas vacías; se usa la función glob() del módulo 
        glob para obtener todas las rutas de los archivos de sonido en el conjunto de datos. El patrón 
        que se usa para esto es: "drive/MyDrive/emotion/Actor_*//*.wav", pues, el conjunto de datos se 
        encuentra almacenado en una carpeta de google drive. Esto se debe a que el conjunto 
        de datos se ve así:
        </p>
  
        <img src={emotion4} alt='insta4' className='imgTres' />
  
        <p className='Contenido'>
        Entonces, para cada una de esas rutas, se obtiene el nombre base del archivo y la emoción 
        dividiendo el nombre alrededor de "-" y extrayendo el tercer valor:
        </p>

        <img src={emotion5} alt='insta5' className='imgTres' />

        <p className='Contenido'>
        Usando el diccionario de emociones, este número se convierte en una emoción, y la función 
        verifica si esta emoción está en la lista de emociones_observadas; si no, continúa con el 
        siguiente archivo. Hace una llamada a extract_feature y almacena lo que se devuelve en 'feature'.
        Luego, agrega la función a x y la emoción a y. Entonces, la lista x contiene las características 
        y y contiene las emociones. Se llama a la función train_test_split con estos, el tamaño de la 
        prueba y un valor de estado aleatorio, y lo devolvemos.
        </p>
  
        <img src={emotion6} alt='insta5' className='imgTres' />


        <p className='Contenido'>¡Es hora de dividir el conjunto de datos en conjuntos de entrenamiento 
        y prueba! Se mantiene el conjunto de prueba en un 25% de todo y se usa la función load_data para 
        esto.
        </p>

        <img src={emotion7} alt='insta6' className='imgTres' />
  
        <p className='Contenido'>
            Observe la forma de los conjuntos de datos de entrenamiento y prueba:
        </p>
        
        <img src={emotion8} alt='insta7' className='imgTres' />

        <p className='Contenido'>Y se obtiene el número de características extraídas.
        </p>

        <img src={emotion9} alt='insta7' className='imgTres' />

        <p className='Contenido'>Ahora, se inicializa un MLPClassifier. Este es un clasificador de 
        perceptrón multicapa; optimiza la función de pérdida de registro utilizando LBFGS o descenso de 
        gradiente estocástico. A diferencia de SVM o Naive Bayes, el MLPClassifier tiene una red neuronal 
        interna para fines de clasificación. Este es un modelo ANN feedforward.
        </p>


        <img src={emotion10} alt='insta7' className='imgTres' />

        <p className='Contenido'>Montar / entrenar a la modelo.
        </p>

        <img src={emotion11} alt='insta7' className='imgTres' />

        <p className='Contenido'>Se predicen los valores para el conjunto de prueba. Esto da y_pred 
        (las emociones previstas para las funciones en el conjunto de prueba).
        </p>

        <img src={emotion12} alt='insta7' className='imgTres' />

        <p className='Contenido'>Para calcular la precisión del modelo, se llama a la función 
        precision_score() que se importa desde sklearn. Finalmente, se redondea la precisión a 2 
        decimales y se imprime.
        </p>

        <img src={emotion13} alt='insta7' className='imgTres' />

        <p className='Contenido'>En este proyecto de Python, se aprende a reconocer las emociones a 
        partir del habla. Se usa un MLPClassifier, la biblioteca de archivos de sonido para leer el 
        archivo de sonido y la biblioteca de librosa para extraer características de él. Como verá, el 
        modelo entregó una precisión del 67,19%. Eso es un nivel aceptable para el caso.
        </p>
  
      </div>
    )
  }