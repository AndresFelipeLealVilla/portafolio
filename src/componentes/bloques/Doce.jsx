import React from 'react'
import cliente1 from '../img/cliente1.PNG'
import cliente2 from '../img/cliente2.PNG'
import cliente3 from '../img/cliente3.PNG'
import cliente4 from '../img/cliente4.PNG'
import cliente5 from '../img/cliente5.PNG'
import cliente6 from '../img/cliente6.PNG'
import cliente7 from '../img/cliente7.PNG'
import cliente8 from '../img/cliente8.PNG'
import cliente9 from '../img/cliente9.PNG'
import cliente10 from '../img/cliente10.PNG'
import cliente11 from '../img/cliente11.PNG'
import cliente12 from '../img/cliente12.PNG'
import cliente13 from '../img/cliente13.PNG'
import cliente14 from '../img/cliente14.PNG'
import cliente15 from '../img/cliente15.PNG'
import cliente16 from '../img/cliente16.PNG'
import cliente17 from '../img/cliente17.PNG'
import cliente18 from '../img/cliente18.PNG'
import cliente19 from '../img/cliente19.PNG'
import cliente20 from '../img/cliente20.PNG'
import cliente21 from '../img/cliente21.PNG'
import cliente22 from '../img/cliente22.PNG'
import cliente23 from '../img/cliente23.PNG'
import cliente24 from '../img/cliente24.PNG'
import cliente25 from '../img/cliente25.PNG'
import cliente26 from '../img/cliente26.PNG'
import cliente27 from '../img/cliente27.PNG'
import cliente28 from '../img/cliente28.PNG'
import cliente29 from '../img/cliente29.PNG'
import cliente30 from '../img/cliente30.PNG'
import cliente31 from '../img/cliente31.PNG'
import cliente32 from '../img/cliente32.PNG'
import cliente33 from '../img/cliente33.PNG'
import cliente34 from '../img/cliente34.PNG'
import cliente35 from '../img/cliente35.PNG'
import cliente36 from '../img/cliente36.PNG'
import cliente37 from '../img/cliente37.PNG'
import cliente38 from '../img/cliente38.PNG'
import cliente39 from '../img/cliente39.PNG'
import cliente40 from '../img/cliente40.PNG'
import cliente41 from '../img/cliente41.PNG'
import cliente42 from '../img/cliente42.PNG'
import cliente43 from '../img/cliente43.PNG'
import cliente44 from '../img/cliente44.PNG'
import cliente45 from '../img/cliente45.PNG'
import cliente46 from '../img/cliente46.PNG'
import cliente47 from '../img/cliente47.PNG'
import cliente48 from '../img/cliente48.PNG'
import cliente49 from '../img/cliente49.PNG'
import cliente50 from '../img/cliente50.PNG'
import cliente51 from '../img/cliente51.PNG'
import cliente52 from '../img/cliente52.PNG'
import cliente53 from '../img/cliente53.PNG'
import cliente54 from '../img/cliente54.PNG'
import cliente55 from '../img/cliente55.PNG'
import cliente56 from '../img/cliente56.PNG'
import cliente57 from '../img/cliente57.PNG'
import cliente58 from '../img/cliente58.PNG'
import cliente59 from '../img/cliente59.PNG'
import cliente60 from '../img/cliente60.PNG'
import cliente61 from '../img/cliente61.PNG'
import cliente62 from '../img/cliente62.PNG'

import { useState } from 'react'

export const Doce = () => {

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
          <h1 className='TituloUno'>Segmentación de cliente</h1>
      :   <h1 className='TituloUno'>Customer Segmentation</h1>}

      {boton === 0 ?
          <p className='IntroUno'>En este proyecto de aprendizaje automático, DataFlair le proporcionará 
              los antecedentes de la segmentación de clientes. Luego se explorarán los datos sobre los 
              que se construye el modelo de segmentación. Además, en este proyecto de ciencia de datos, 
              se verá el análisis descriptivo de los datos y luego se implementan varias versiones del 
              algoritmo K-means.
          </p>
      :   <p className='IntroUno'>In this machine learning project, DataFlair will provide you with the
              background of customer segmentation. Then, we will explore the data on which the
              segmentation model is built. Also, in this data science project, we will see the
              descriptive analysis of the data and then implement several versions of the K-means
              algorithm.
          </p>}

      {boton === 0 ?
          <p className='IntroUno'>La segmentación de clientes es una de las aplicaciones más importantes 
              del aprendizaje no supervisado. Utilizando técnicas de clustering, las empresas pueden 
              identificar los distintos segmentos de clientes permitiéndoles dirigirse a la base de 
              usuarios potenciales. En este proyecto de aprendizaje automático, se usará K-means 
              clustering que es el algoritmo esencial para la agrupación de conjuntos de datos no 
              etiquetados.
          </p>
      :   <p className='IntroUno'>Customer segmentation is one of the most important applications of
              unsupervised learning. Using clustering techniques, companies can identify the different
              customer segments allowing them to address the potential user base. In this machine
              learning project, K-means clustering will be used which is the essential algorithm for
              grouping datasets without labels.
          </p>}

      {boton === 0 ?
          <h1 className='TituloUno'>¿Qué es la segmentación de clientes?</h1>
      :   <h1 className='TituloUno'>What is customer segmentation?</h1>}

      {boton === 0 ?
          <p className='IntroUno'>La segmentación de clientes es el proceso de división de la base de 
              clientes en varios grupos de individuos que comparten una similitud en diferentes aspectos 
              que son relevantes para el marketing, como el género, la edad, los intereses y diversos 
              hábitos de gasto.
          </p>
      :   <p className='IntroUno'>Customer segmentation is the process of dividing the customer base 
              into various groups of individuals who share a similarity in different aspects relevant to 
              marketing, such as gender, age, interests and various spending habits. spending habits.
          </p>}

      {boton === 0 ?
          <p className='IntroUno'>Las empresas que aplican la segmentación de clientes parten de la idea 
              de que cada cliente tiene necesidades diferentes y requiere un esfuerzo de marketing 
              específico para abordarlas adecuadamente. El objetivo de las empresas es obtener un enfoque 
              más profundo del cliente al que se dirigen. Por lo tanto, su objetivo debe ser específico y 
              adaptarse a las necesidades de cada cliente. Además, gracias a los datos recopilados, las 
              empresas pueden conocer mejor las preferencias de los clientes y los requisitos para 
              descubrir segmentos valiosos que les reporten el máximo beneficio. De este modo, pueden 
              elaborar estrategias de marketing más eficaces y minimizar la posibilidad de que su 
              inversión corra riesgos.
          </p>
      :   <p className='IntroUno'>Companies that apply customer segmentation start from the idea that
              each customer has different needs and requires a specific marketing effort to address them
              appropriately. The goal of companies is to get a deeper understanding of the customer they
              are addressing. Therefore, their goal should be specific and tailored to the needs of each
              customer. In addition, thanks to the data collected, companies can better understand the
              preferences of customers and the requirements to discover valuable segments that will
              bring them the maximum benefit. In this way, they can develop more effective marketing
              strategies and minimize the possibility that their investment runs risks.
          </p>}

      {boton === 0 ?
          <p className='IntroUno'>La técnica de segmentación de clientes depende de varios 
              diferenciadores clave que dividen a los clientes en grupos a los que dirigirse. Los datos 
              relacionados con la demografía, la geografía, la situación económica y los patrones de 
              comportamiento desempeñan un papel crucial a la hora de determinar la dirección de la 
              empresa para dirigirse a los distintos segmentos.
          </p>
      :   <p className='IntroUno'>The customer segmentation technique depends on several key
              differentiators that divide customers into groups to which to address. Data related to
              demographics, geography, economic situation and behavior patterns play a crucial role in
              determining the direction of the company to address the different segments.
          </p>}

      {boton === 0 ?
          <h1 className='TituloUno'>¿Implementar la segmentación de clientes?</h1>
      :   <h1 className='TituloUno'>Implementing customer segmentation?</h1>}

      {boton === 0 ?
          <p className='Contenido'>En el primer paso de este proyecto de ciencia de datos, se realiza la
              exploración de datos. Se importan los paquetes esenciales necesarios para esta función y, a
              continuación, se leen los datos. Por último, se recorren los datos de entrada para obtener
              información necesaria al respecto.
          </p>
      :   <p className='Contenido'>In the first step of this data science project, data exploration is
              performed. The essential packages required for this function are imported and then the
              data is read. Finally, the input data is traversed to obtain the necessary information
              about it.
          </p>}

    <img src={cliente1} alt='carros1' className='imgUno' />
    <img src={cliente2} alt='carros2' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Ahora se muestran las seis primeras filas del conjunto de datos 
              utilizando la función head() y se utliza la función summary() para obtener un resumen del mismo.
          </p>
      :   <p className='Contenido'>Now the first six rows of the dataset are shown using the head()
              function and the summary() function is used to obtain a summary of it.
          </p>}

    <img src={cliente3} alt='carros2' className='imgUno' />
    <img src={cliente4} alt='carros2' className='imgUno' />

    <img src={cliente5} alt='carros3' className='imgUno' />
    <img src={cliente6} alt='carros4' className='imgUno' />

    <img src={cliente7} alt='carros3' className='imgUno' />
    <img src={cliente8} alt='carros4' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>En este caso, vamos a crear un gráfico de barras y un gráfico de 
              sectores para mostrar la distribución de género en el conjunto de datos. 
          </p>
      :   <p className='Contenido'>In this case, we will create a bar chart and a pie chart to show the 
              gender distribution in the data set. to show the gender distribution in the data set.
          </p>}

    <img src={cliente9} alt='carros1' className='imgUno' />
    <img src={cliente10} alt='carros2' className='graficos' />

      {boton === 0 ?
          <p className='Contenido'>En el gráfico de barras anterior, se observa que el número de mujeres 
              es mayor que el de hombres. Ahora, se visualiza un gráfico circular para observar la 
              proporción de la distribución de hombres y mujeres.
          </p>
      :  <p className='Contenido'>The bar chart above shows that the number of women is higher than that 
            of men. is higher than that of men. Now, a pie chart is displayed to observe the ratio of the 
            distribution of men and women. ratio of the distribution of men and women.
          </p>}

    <img src={cliente11} alt='carros1' className='imgUno' />
    <img src={cliente12} alt='carros2' className='graficos' />

      {boton === 0 ?
          <p className='Contenido'>Del gráfico anterior se deduce que el porcentaje de mujeres es del 56%, 
              mientras que el porcentaje de hombres en el conjunto de datos de clientes es del 44%.
          </p>
        :  <p className='Contenido'>From the above graph it can be seen that the percentage of women is 
                56%, while the percentage of men in the customer data set is 44%.
            </p>}

        {boton === 0 ?
            <p className='Contenido'>Se crea un histograma para visualizar la distribución de la 
                frecuencia de las edades de los clientes. En primer lugar, se hace un resumen de la 
                variable Edad.
            </p>
        :   <p className='Contenido'>A histogram is created to visualize the distribution of the frequency
                of the ages of the customers. First, a summary of the Age variable is made.
            </p>}

      <img src={cliente13} alt='carros1' className='imgUno' />
      <img src={cliente14} alt='carros2' className='imgUno' />

      <img src={cliente15} alt='carros1' className='imgUno' />
      <img src={cliente16} alt='carros2' className='graficos' />

      <img src={cliente17} alt='carros1' className='imgUno' />
      <img src={cliente18} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>De las dos visualizaciones anteriores, se concluye que las edades 
                más frecuentes de los clientes se sitúan entre 30 y 35 años. La edad mínima de los 
                clientes es de 18 años, mientras que la edad máxima es de 70 años.
            </p>
        :   <p className='Contenido'>From the two previous visualizations, it is concluded that the most
                frequent ages of the customers are between 30 and 35 years old. The minimum age of the
                customers is 18 years old, while the maximum age is 70 years old.
            </p>}

        {boton === 0 ?  
            <p className='Contenido'>En esta sección del proyecto R, se crean visualizaciones para 
                analizar los ingresos anuales de los clientes. Se traza un histograma y luego se procede 
                a examinar estos datos utilizando un gráfico de densidad.
            </p>
        :   <p className='Contenido'>In this section of the R project, visualizations are created to
                analyze the annual income of the customers. A histogram is plotted and then the data
                is examined using a density plot.
            </p>}

      <img src={cliente19} alt='carros1' className='imgUno' />
      <img src={cliente20} alt='carros2' className='graficos' />

      <img src={cliente21} alt='carros1' className='imgUno' />
      <img src={cliente22} alt='carros2' className='graficos' />

      <img src={cliente23} alt='carros1' className='imgUno' />
      <img src={cliente24} alt='carros2' className='imgUno' />

        {boton === 0 ?
            <p className='Contenido'>Del análisis descriptivo anterior, seconcluye que la renta anual 
                mínima de los clientes es de 15 y la máxima de 137. Las personas con una renta media de 
                70 tienen la mayor frecuencia en la distribución del histograma. El salario medio de 
                todos los clientes es de 60,56. En el Kernel Density Plot que se mostró anteriormente, se 
                observa que los ingresos anuales tienen una distribución normal.
            </p>
        :   <p className='Contenido'>From the previous descriptive analysis, it is concluded that the
                minimum annual income of the customers is 15 and the maximum is 137. People with an
                average income of 70 have the highest frequency in the distribution of the histogram.
                The average salary of all customers is 60.56. In the Kernel Density Plot shown above,
                it can be seen that the annual income has a normal distribution.
            </p>}

      <img src={cliente25} alt='carros1' className='imgUno' />
      <img src={cliente26} alt='carros2' className='graficos' />

      <img src={cliente27} alt='carros1' className='imgUno' />
      <img src={cliente28} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>Se Puede ver que el Análisis Descriptivo de la Puntuación de Gasto 
                mínima es 1, la máxima es 99 y la media es 50,20. A partir del histograma, se concluye 
                que los clientes entre la clase 40 y 50 tienen la puntuación de gasto más alta entre todas 
                las clases.
            </p>
        :   <p className='Contenido'>It can be seen that the minimum Spending Score is 1, the maximum is 99
                and the mean is 50.20. From the histogram, it is concluded that customers between class
                40 and 50 have the highest spending score among all classes.
            </p>}

    <h1 className='TituloUno'>Algoritmo K-means</h1>

        {boton === 0 ?
            <p className='Contenido'>Al utilizar el algoritmo de agrupación k-means, el primer paso 
                consiste en indicar el número de clusters (k) que se desea producir en el resultado final. 
                El algoritmo comienza seleccionando k objetos del conjunto de datos de forma aleatoria 
                que servirán como centros iniciales para nuestros clusters. Estos objetos seleccionados 
                son los medios de los clusters, también conocidos como centroides. A continuación, a los 
                objetos restantes se les asigna el centroide más cercano. Este centroide se define por la 
                distancia euclídea presente entre el objeto y la media del cluster. Este paso se denomina 
                "asignación de clusters". Una vez completada la asignación, el algoritmo procede a 
                calcular el nuevo valor medio de cada cluster presente en los datos. Tras el recálculo de 
                los centros, se comprueba si las observaciones están más cerca de un cluster diferente. A 
                partir de la media actualizada de los conglomerados, los objetos se reasignan. Esto se 
                repite a lo largo de varias iteraciones hasta que las asignaciones de los clusters dejan 
                de alterarse. Los clusters presentes en la iteración actual son los mismos que los 
                obtenidos en la iteración anterior.
            </p>
        :   <p className='Contenido'>When using the k-means clustering algorithm, the first step is to
                indicate the number of clusters (k) that you want to produce in the final result. The
                algorithm begins by randomly selecting k objects from the data set that will serve as
                initial centers for our clusters. These selected objects are the means of the clusters,
                also known as centroids. Next, the remaining objects are assigned the nearest centroid.
                This centroid is defined by the euclidean distance present between the object and the
                mean of the cluster. This step is called "cluster assignment". Once the assignment is
                completed, the algorithm proceeds to calculate the new mean value of each cluster
                present in the data. After the recalculation of the centers, it is checked whether the
                observations are closer to a different cluster. From the updated mean of the clusters,
                the objects are reassigned. This is repeated over several iterations until the
                assignments of the clusters stop changing. The clusters present in the current
                iteration are the same as those obtained in the previous iteration.
            </p>}
    
        {boton === 0 ?
            <h1 className='TituloUno'>Método del codo</h1>
        :   <h1 className='TituloUno'>Elbow Method</h1>}

        {boton === 0 ?
            <p className='Contenido'>El objetivo principal de los métodos de partición de conglomerados 
                como k-means es definir los conglomerados de forma que la variación intraconglomerado sea 
                mínima.
            </p>
        :   <p className='Contenido'>The main objective of clustering partitioning methods such as k-means
                is to define the clusters so that the intracluster variation is minimal.
            </p>}

        {boton === 0 ?
            <p className='Contenido'> minimize(suma W(Ck)), k=1...k </p>
        :   <p className='Contenido'> minimize(sum W(Ck)), k=1...k </p>}

        {boton === 0 ?
            <p className='Contenido'>Donde Ck representa el k-ésimo cluster y W(Ck) denota la variación 
                intra-cluster. Con la medición de la variación intraclúster total, se puede evaluar la 
                compacidad de la frontera de agrupación. A continuación, podemos proceder a definir los 
                conglomerados óptimos del siguiente modo. En primer lugar, calculamos el algoritmo de 
                agrupación para varios valores de k. Esto puede hacerse creando una variación dentro de 
                k de 1 a 10 conglomerados. A continuación, se cálcula la suma cuadrática total 
                intracluster (iss). Después, seprocede a trazar la iss en función del número de k 
                conglomerados. Este gráfico indica el número adecuado de conglomerados que requiere el 
                modelo. En el gráfico, la ubicación de una curva indica el número óptimo de conglomerados. 
                Se Implementa esto en R de la siguiente manera.
            </p>
        :   <p className='Contenido'>Where Ck represents the k-th cluster and W(Ck) denotes the 
                intra-cluster variation. With the measurement of the total intracluster variation, it is
                possible to evaluate the compactness of the clustering boundary. Next, we can proceed to
                define the optimal clusters as follows. First, we calculate the clustering algorithm for
                several values of k. This can be done by creating a variation within k of 1 to 10
                clusters. Next, the total intracluster sum of squares (iss) is calculated. Then, the
                algorithm is proceeded to plot the iss as a function of the number of k clusters. This
                graph indicates the number of clusters required by the model. In the graph, the location
                of a curve indicates the optimal number of clusters. This is implemented in R as follows.
            </p>}

    <img src={cliente29} alt='carros1' className='imgUno' />
    <img src={cliente30} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>A partir del gráfico anterior, se llega a la conclusión de que 4 es 
                el número adecuado de conglomerados, ya que parece aparecer en la curva del gráfico del 
                codo.
            </p>
        :   <p className='Contenido'>From the above graph, it is concluded that 4 is the correct number 
                of clusters, since it seems to appear in the curve of the elbow graph.
            </p>}

        {boton === 0 ?
            <h1 className='TituloUno'>Método de la silueta media</h1>
        :   <h1 className='TituloUno'>Silhouette Mean Method</h1>}

        {boton === 0 ?
            <p className='Contenido'>Con la ayuda del método de la silueta media, se puede medir la 
                calidad de nuestra operación de agrupación. Si se obtiene una anchura de silueta media 
                alta, significa que se tiene un buen clustering. El método de la silueta media calcula la 
                media de las observaciones de la silueta para diferentes valores de k. Con el número 
                óptimo de k conglomerados, se puede maximizar la silueta media sobre valores 
                significativos para k conglomerados.
            </p>
        :   <p className='Contenido'>With the help of the silhouette mean method, the quality of our
                clustering operation can be measured. If a high average silhouette width is obtained, it
                means that a good clustering is obtained. The silhouette mean method calculates the mean
                of the silhouette observations for different values of k. With the optimal number of k
                clusters, the silhouette mean can be maximized over significant values for k clusters.
            </p>}

    <img src={cliente31} alt='carros1' className='imgUno' />
    <img src={cliente32} alt='carros2' className='graficos' />

    <img src={cliente33} alt='carros1' className='imgUno' />
    <img src={cliente34} alt='carros2' className='graficos' />

    <img src={cliente35} alt='carros1' className='imgUno' />
    <img src={cliente36} alt='carros2' className='graficos' />

    <img src={cliente37} alt='carros1' className='imgUno' />
    <img src={cliente38} alt='carros2' className='graficos' />
    
    <img src={cliente39} alt='carros1' className='imgUno' />
    <img src={cliente40} alt='carros2' className='graficos' />

    <img src={cliente41} alt='carros1' className='imgUno' />
    <img src={cliente42} alt='carros2' className='graficos' />

    <img src={cliente43} alt='carros1' className='imgUno' />
    <img src={cliente44} alt='carros2' className='graficos' />

    <img src={cliente45} alt='carros1' className='imgUno' />
    <img src={cliente46} alt='carros2' className='graficos' />

    <img src={cliente47} alt='carros1' className='imgUno' />
    <img src={cliente48} alt='carros2' className='graficos' />

    <img src={cliente49} alt='carros1' className='imgUno' />
    <img src={cliente50} alt='carros2' className='graficos' />

        {boton === 0 ?
            <h1 className='TituloUno'>Método de la estadística de brechas</h1>
        :   <h1 className='TituloUno'>Gap Statistics Method</h1>}
      
        {boton === 0 ?
            <p className='Contenido'>Se puede utilizar este método para cualquiera de los métodos de 
                clustering como K-means, clustering jerárquico, etc. Utilizando la brecha estadística, 
                se puede comparar la variación total intracluster para diferentes valores de k junto con 
                sus valores esperados bajo la distribución nula de referencia de los datos. Con la ayuda 
                de simulaciones Monte Carlo, se puede producir el conjunto de datos de muestra. Para cada 
                variable del conjunto de datos, se puede calcular el intervalo entre min(xi) y max (xj) a 
                través del cual se puede producir valores uniformemente desde el límite inferior del 
                intervalo hasta el límite superior.
            </p>
        :   <p className='Contenido'>This method can be used for any of the clustering methods such as
                K-means, hierarchical clustering, etc. Using the gap statistics, the total intracluster
                variation can be compared for different values of k along with their expected values
                under the null distribution of the data reference. With the help of Monte Carlo
                simulations, the sample data set can be produced. For each variable of the data set, the
                range between min (xi) and max (xj) can be calculated through which values can be
                uniformly produced from the lower limit of the range to the upper limit.
            </p>}

        {boton === 0 ?
            <p className='Contenido'>Para calcular el método de estadísticas de brecha se puede utilizar 
                la función clusGap para proporcionar estadísticas de brecha, así como el error estándar 
                para una salida dada.
            </p>
        :   <p className='Contenido'>To calculate the gap statistics method, the clusGap function can be
                used to provide gap statistics as well as the standard error for a given output.
            </p>}


    <img src={cliente51} alt='carros1' className='imgUno' />
    <img src={cliente52} alt='carros2' className='graficos' />


    <img src={cliente53} alt='carros1' className='imgUno' />
    <img src={cliente54} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'>En la salida de la operación kmeans, se observa una lista con varias 
                informaciones clave. De esto, se concluye que la información útil es:
            </p>
        :   <p className='Contenido'>In the output of the kmeans operation, a list with several key
                information is observed. From this, it is concluded that the useful information is:
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster:</h4>Este es un vector de varios enteros que denotan el 
                cluster que tiene una asignación de cada punto.
            </p>
        :   <p className='Contenido'><h4>Cluster:</h4>This is a vector of several integers that denote 
                the cluster that has an assignment of each point.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Totss:</h4>Representa la suma total de cuadrados.
            </p>
        :   <p className='Contenido'><h4>Totss:</h4>Represents the total sum of squares.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Centers:</h4>Matriz que comprende varios centros de cluster.
            </p>
        :   <p className='Contenido'><h4>Centers:</h4>Matrix that comprises several cluster centers.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Withinss:</h4>Es un vector que representa la suma de cuadrados 
                intracluster que tiene un componente por cluster.
            </p>
        :   <p className='Contenido'><h4>Withinss:</h4>It is a vector that represents the sum of
                intracluster squares that has a component per cluster.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Tot.Withinss:</h4>Denota la suma total de cuadrados intracluster.
            </p>
        :   <p className='Contenido'><h4>Tot.Withinss:</h4>Denotes the total sum of intracluster squares.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Entre Clusters:</h4>Es la suma de cuadrados entre clusters.
            </p>
        :   <p className='Contenido'><h4>Between Clusters:</h4>It is the sum of squares between clusters.
            </p>}


        {boton === 0 ?
            <p className='Contenido'><h4>Tamaño:</h4>Número total de puntos que contiene cada conglomerado.
            </p>
        :   <p className='Contenido'><h4>Size:</h4>Total number of points that each cluster contains.
            </p>}

        {boton === 0 ?
            <h1 className='TituloUno'></h1>
        :   <h1 className='TituloUno'></h1>}

    <img src={cliente55} alt='carros1' className='imgUno' />
    <img src={cliente56} alt='carros2' className='graficos' />

    <img src={cliente57} alt='carros1' className='imgUno' />
    <img src={cliente58} alt='carros2' className='graficos' />


        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 6 y 4:</h4> Estos clústeres representan los datos de los 
                clientes con un salario medio y un gasto anual medio.
            </p>
        :   <p className='Contenido'><h4>Cluster 6 and 4:</h4> These clusters represent the customer data
                with a medium salary and a medium annual expenditure.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 1:</h4> Este cluster representa los datos_clientes con 
                una renta anual alta así como un gasto anual alto.
            </p>
        :   <p className='Contenido'><h4>Cluster 1:</h4> This cluster represents the customer data with
                a high annual income as well as a high annual expenditure.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 3:</h4> Este cluster denota los datos_del_cliente con 
                una renta anual baja así como un gasto anual de renta bajo.
            </p>
        :   <p className='Contenido'><h4>Cluster 3:</h4> This cluster denotes the customer data with a
                low annual income as well as a low annual expenditure.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 2:</h4> Este cluster denota una renta anual alta y un 
                gasto anual bajo.
            </p>
        :   <p className='Contenido'><h4>Cluster 2:</h4> This cluster denotes a high annual income and
                a low annual expenditure.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 5:</h4>  Este cluster representa un ingreso anual bajo 
                pero su gasto anual alto.
            </p>
        :   <p className='Contenido'><h4>Cluster 5:</h4>  This cluster represents a low annual income
                but its high annual expenditure.
            </p>}

    <img src={cliente59} alt='carros1' className='imgUno' />
    <img src={cliente60} alt='carros2' className='graficos' />

    <img src={cliente61} alt='carros1' className='imgUno' />
    <img src={cliente62} alt='carros2' className='graficos' />

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 4 y 1:</h4> Estos dos clusters están formados por 
                clientes con una puntuación media de PCA1 y media de PCA2.
            </p>
        :   <p className='Contenido'><h4>Cluster 4 and 1:</h4> These two clusters are formed by
                customers with a medium PCA1 score and a medium PCA2 score.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 6:</h4> Este cluster representa a los clientes que 
                tienen un PCA2 alto y un PCA1 bajo.
            </p>
        :   <p className='Contenido'><h4>Cluster 6:</h4> This cluster represents customers who have
                a high PCA2 and a low PCA1.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 5:</h4> En este cluster hay clientes con una puntuación 
                media de PCA1 y baja de PCA2.
            </p>
        :   <p className='Contenido'><h4>Cluster 5:</h4> In this cluster there are customers with a
                medium PCA1 score and a low PCA2 score.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 3:</h4> En este cluster hay clientes con un ingreso PCA1 
                alto y un PCA2 alto.
            </p>
        :   <p className='Contenido'><h4>Cluster 3:</h4> In this cluster there are customers with a
                high PCA1 income and a high PCA2.
            </p>}

        {boton === 0 ?
            <p className='Contenido'><h4>Cluster 2:</h4> Este cluster está formado por clientes con un 
                PCA2 alto y un gasto anual de ingresos medio.
            </p>
        :   <p className='Contenido'><h4>Cluster 2:</h4> This cluster is formed by customers with a
                high PCA2 and a medium annual income expenditure.
            </p>}

        {boton === 0 ?
            <p className='Contenido'>Con la ayuda de la agrupación, se pueden comprender mucho mejor las 
                variables, lo que lleva a tomar decisiones cuidadosas. Con la identificación de los 
                clientes, las empresas pueden lanzar productos y servicios dirigidos a clientes en 
                función de varios parámetros como la renta, la edad, los patrones de gasto, etc. Además, 
                se tienen en cuenta patrones más complejos como las reseñas de productos para una mejor 
                segmentación.
            </p>
        :   <p className='Contenido'>With the help of clustering, the variables can be understood much 
                better, which leads to taking careful decisions. With the identification of customers,
                companies can launch products and services aimed at customers based on various parameters
                such as income, age, spending patterns, etc. In addition, more complex patterns such as
                product reviews are taken into account for better segmentation.
            </p>}
    </div>
  )
}
