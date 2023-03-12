import React from 'react'
import card1 from '../img/card1.PNG'
import card2 from '../img/card2.PNG'
import card3 from '../img/card3.PNG'
import card4 from '../img/card4.PNG'
import card5 from '../img/card5.PNG'
import card6 from '../img/card6.PNG'
import card7 from '../img/card7.PNG'
import card8 from '../img/card8.PNG'
import card9 from '../img/card9.PNG'
import card10 from '../img/card10.PNG'
import card11 from '../img/card11.PNG'
import card12 from '../img/card12.PNG'
import card121 from '../img/card121.PNG'
import card122 from '../img/card122.PNG'
import card13 from '../img/card13.PNG'
import card14 from '../img/card14.PNG'
import card15 from '../img/card15.PNG'
import card16 from '../img/card16.PNG'
import card17 from '../img/card17.PNG'
import card181 from '../img/card181.PNG'
import card182 from '../img/card182.PNG'
import card183 from '../img/card183.PNG'
import card184 from '../img/card184.PNG'
import card19 from '../img/card19.PNG'
import card20 from '../img/card20.PNG'
import card21 from '../img/card21.PNG'
import card22 from '../img/card22.PNG'
import card23 from '../img/card23.PNG'
import card24 from '../img/card24.PNG'
import card25 from '../img/card25.PNG'
import card26 from '../img/card26.PNG'
import card27 from '../img/card27.PNG'
import card281 from '../img/card281.PNG'
import card282 from '../img/card282.PNG'


import { useState } from 'react'

export const Ocho = () => {

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
          <h1 className='TituloUno'>Detección de fraude con tarjetas de crédito</h1>
      :   <h1 className='TituloUno'>Credit Card Fraud Detection</h1>}

      {boton === 0 ?
          <p className='IntroUno'>El objetivo de este proyecto es construir un clasificador que pueda 
                detectar transacciones fraudulentas con tarjetas de crédito. Se Utilizará una variedad 
                de algoritmos de aprendizaje automático que serán capaces de discernir lo fraudulento de 
                lo no fraudulento. Al final de este proyecto de aprendizaje automático, aprenderá a 
                implementar algoritmos de aprendizaje automático para realizar la clasificación.
          </p>
      :   <p className='IntroUno'>The objective of this project is to build a classifier that can detect
                fraudulent credit card transactions. A variety of machine learning algorithms will be
                used that will be able to discern fraudulent from non-fraudulent transactions. At the end
                of this machine learning project, you will learn to implement machine learning
                algorithms to perform classification.
          </p>}

          {boton === 0 ?
          <h1 className='TituloUno'>Importación de los conjuntos de datos</h1>
      :   <h1 className='TituloUno'>Importing the datasets</h1>}

      {boton === 0 ?
          <p className='IntroUno'>Se importan los conjuntos de datos que contienen las transacciones 
                realizadas con tarjetas de crédito.
          </p>
      :   <p className='IntroUno'>The datasets that contain credit card transactions are imported.
          </p>}

    <img src={card1} alt='card1' className='imgUno' />

      {boton === 0 ?
          <h1 className='TituloUno'>Exploración de datos</h1>
      :   <h1 className='TituloUno'>Data Exploration</h1>}

      {boton === 0 ?
          <p className='IntroUno'>En esta sección del proyecto, se exploran los datos contenidos en el 
                dataframe creditcard_data. Se Procede a visualizar los datos de creditcard_data utilizando 
                la función head() así como la función tail(). A continuación se exploran los demás 
                componentes de este dataframe.
          </p>
      :   <p className='IntroUno'>In this section of the project, the data contained in the
                creditcard_data dataframe is explored. The data of creditcard_data is visualized using
                the head() function as well as the tail() function. Next, the other components of this
                dataframe are explored.
          </p>}

    <img src={card3} alt='card3' className='imgUno' />
    <img src={card4} alt='card4' className='imgUno' />

    <img src={card5} alt='card3' className='imgUno' />
    <img src={card6} alt='card4' className='imgUno' />

    <img src={card7} alt='card3' className='imgUno' />
    <img src={card8} alt='card4' className='imgUno' />

    <img src={card9} alt='card3' className='imgUno' />
    <img src={card10} alt='card4' className='imgUno' />




    {boton === 0 ?
          <h1 className='TituloUno'>Manipulación de datos</h1>
      :   <h1 className='TituloUno'>Data Manipulation</h1>}

      {boton === 0 ?
          <p className='IntroUno'>En esta sección del proyecto de ciencia de datos en R, se escalan los 
                datos utilizando la función scale(). Se Aplica esto al componente amount de 
                creditcard_data. El escalado también se conoce como estandarización de características. 
                Con la ayuda del escalado, los datos se estructuran según un rango especificado. Por lo 
                tanto, no hay valores extremos en el conjunto de datos que puedan interferir con el 
                funcionamiento del modelo:
          </p>
      :   <p className='IntroUno'>In this section of the R data science project, the data is scaled
                using the scale() function. This is applied to the amount component of
                creditcard_data. Scaling is also known as feature standardization. With the help of
                scaling, the data is structured according to a specified range. Therefore, there are no
                extreme values in the dataset that can interfere with the functioning of the model:
          </p>}

    <img src={card11} alt='card3' className='imgUno' />
    <img src={card12} alt='card4' className='imgUno' />

    <img src={card121} alt='card3' className='imgUno' />
    <img src={card122} alt='card4' className='imgUno' />

    {boton === 0 ?
          <h1 className='TituloUno'>Modelado de datos</h1>
      :   <h1 className='TituloUno'>Data Modeling</h1>}

      {boton === 0 ?
          <p className='IntroUno'>Una vez estandarizado el conjunto de datos, se divide en un conjunto de 
                entrenamiento y un conjunto de prueba con una proporción de división de 0,80. Esto significa 
                que el 80% de los datos se asignarán a los datos de entrenamiento y el 20% a los datos de 
                prueba. Esto significa que el 80% de los datos se asignarán a los datos de entrenamiento, 
                mientras que el 20% se asignarán a los datos de prueba. A continuación, se encuentran las 
                dimensiones utilizando la función dim():
          </p>
      :   <p className='IntroUno'>Once the dataset is standardized, it is divided into a training set and
                a test set with a split ratio of 0.80. This means that 80% of the data will be assigned
                to the training data and 20% to the test data. This means that 80% of the data will be
                assigned to the training data, while 20% will be assigned to the test data. Next, the
                dimensions are found using the dim() function:
          </p>}

    <img src={card13} alt='card3' className='imgUno' />
    <img src={card14} alt='card4' className='imgUno' />

      {boton === 0 ?
          <h1 className='TituloUno'>Ajuste del modelo de regresión logística</h1>
      :   <h1 className='TituloUno'>Fitting the logistic regression model</h1>}

      {boton === 0 ?
          <p className='Contenido'>En esta sección, se ajusta el primer modelo. Se inicia con la 
                regresión logística. Una regresión logística se utiliza para modelar la probabilidad de 
                resultado de una clase como apto/no apto, positivo/negativo y, en este caso, fraude/no 
                fraude. Se Procede a implementar este modelo en los datos de prueba de la siguiente 
                manera:
          </p>
      :   <p className='Contenido'>In this section, the first model is fitted. It starts with the
                logistic regression. A logistic regression is used to model the probability of
                outcome of a class as suitable/not suitable, positive/negative and, in this case,
                fraud/no fraud. This model is implemented in the test data as follows:
          </p>}

    <img src={card15} alt='card3' className='imgUno' />
    <img src={card16} alt='card4' className='imgUno' />  

    <img src={card17} alt='card4' className='imgUno' />
    <img src={card181} alt='card4' className='graficos' />
    <br/>
    <img src={card182} alt='card4' className='graficos' />
    <br/>
    <img src={card183} alt='card4' className='graficos' />
    <br/>
    <img src={card184} alt='card4' className='graficos' /> 


    {boton === 0 ?
          <h1 className='TituloUno'>Ajuste del modelo de regresión logística</h1>
      :   <h1 className='TituloUno'>Fitting the logistic regression model</h1>}

      {boton === 0 ?
          <p className='Contenido'>Para evaluar el rendimiento del modelo, se delinea la curva ROC. ROC 
                también se conoce como Receiver Optimistic Characteristics. Para ello, primero se 
                importa el paquete ROC y luego se traza la curva ROC para analizar su rendimiento.
          </p>
      :   <p className='Contenido'>To evaluate the performance of the model, the ROC curve is outlined. 
                ROC is also known as Receiver Optimistic Characteristics. For this, the ROC package
                is first imported and then the ROC curve is plotted to analyze its performance.
          </p>}

    <img src={card19} alt='card4' className='imgUno' />
    <img src={card20} alt='card4' className='graficos' />


    {boton === 0 ?
          <h1 className='TituloUno'>Ajuste de un modelo de árbol de decisión</h1>
      :   <h1 className='TituloUno'>Fitting a decision tree model</h1>}


      {boton === 0 ?
          <p className='Contenido'>Ahora, se implementa un algoritmo de árbol de decisión. Los Árboles de 
                Decisión grafican los resultados de una decisión. Estos resultados son básicamente una 
                consecuencia a través de la cual se puede concluir a qué clase pertenece el objeto. Ahora 
                se implementa el modelo de árbol de decisión y se traza utilizando la función rpart.plot(). Específicamente usaremos la partición recursiva para trazar el árbol de decisión.
          </p> 
      :   <p className='Contenido'>Now, a decision tree algorithm is implemented. Decision Trees plot
                the results of a decision. These results are basically a consequence through which it
                can be concluded to which class the object belongs. Now the decision tree model is
                implemented and plotted using the rpart.plot() function. Specifically, we will use the
                recursive partitioning to plot the decision tree.
          </p>}

    <img src={card21} alt='card4' className='imgUno' />
    <img src={card22} alt='card4' className='graficos' />


    {boton === 0 ?
          <h1 className='TituloUno'>Redes neuronales artificiales</h1>
      :   <h1 className='TituloUno'>Artificial neural networks</h1>}

      {boton === 0 ?
          <p className='Contenido'>Las redes neuronales artificiales son un tipo de algoritmo de 
                aprendizaje automático que sigue el modelo del sistema nervioso humano. Los modelos de 
                RNA son capaces de aprender los patrones utilizando los datos históricos y son capaces de 
                realizar la clasificación de los datos de entrada. Se Importa el paquete neuralnet que 
                permitiría implementar la RNA. Luego se procede a graficarla utilizando la función plot(). 
                Ahora bien, en el caso de las Redes Neuronales Artificiales, existe un rango de valores que 
                se encuentra entre 1 y 0. Se establece un umbral como 0.5, es decir, los valores por encima de 
                0.5 corresponderán a 1 y el resto serán 0. 

          </p>
      :  <p className='Contenido'>Artificial neural networks are a type of machine learning algorithm
                that follows the model of the human nervous system. ANN models are able to learn the
                patterns using historical data and are able to perform the classification of the input
                data. The neuralnet package is imported that would allow the ANN to be implemented. Then
                the plot is proceeded to be plotted using the plot() function. Now, in the case of
                Artificial Neural Networks, there is a range of values that is between 1 and 0. A
                threshold is set as 0.5, that is, the values above 0.5 will correspond to 1 and the rest
                will be 0.
          </p>}

    <img src={card23} alt='card4' className='imgUno' />
    <img src={card24} alt='card4' className='graficos' />

    {boton === 0 ?
          <h1 className='TituloUno'>Aumento gradual (GBM)</h1>
      :   <h1 className='TituloUno'>Gradient Boosting (GBM)</h1>}

      {boton === 0 ?
          <p className='Contenido'>Gradient Boosting es un popular algoritmo de aprendizaje automático 
                que se utiliza para realizar tareas de clasificación y regresión. Este modelo se compone 
                de varios modelos de conjunto subyacentes como árboles de decisión débiles. Estos árboles 
                de decisión se combinan para formar un modelo fuerte de gradient boosting. Se Implementará 
                el algoritmo de descenso de gradiente en el modelo de la siguiente manera:
          </p>
        :  <p className='Contenido'>Gradient Boosting is a popular machine learning algorithm that is
                used to perform classification and regression tasks. This model consists of several
                underlying ensemble models such as weak decision trees. These decision trees are
                combined to form a strong gradient boosting model. The gradient descent algorithm will
                be implemented in the model in the following way:
            </p>}

    <img src={card25} alt='card3' className='imgUno' />
    <img src={card26} alt='card4' className='imgUno' />  

    <img src={card27} alt='card4' className='imgUno' />
    <img src={card281} alt='card4' className='graficos' />
    <br/>
    <img src={card282} alt='card4' className='graficos' />

    </div>
  )
}
