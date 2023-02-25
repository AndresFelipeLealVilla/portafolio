import React from 'react'
import carros1 from '../img/carros1.PNG'
import carros2 from '../img/carros2.PNG'
import carros3 from '../img/carros3.PNG'
import carros4 from '../img/carros4.PNG'
import carros5 from '../img/carros5.PNG'
import carros6 from '../img/carros6.PNG'
import carros7 from '../img/carros7.PNG'
import carros8 from '../img/carros8.PNG'
import carros9 from '../img/carros9.PNG'
import carros10 from '../img/carros10.PNG'
import carros11 from '../img/carros11.PNG'
import carros12 from '../img/carros12.PNG'
import carros13 from '../img/carros13.PNG'
import carros14 from '../img/carros14.PNG'
import carros15 from '../img/carros15.PNG'
import carros16 from '../img/carros16.PNG'
import carros17 from '../img/carros17.PNG'
import carros18 from '../img/carros18.PNG'
import carros19 from '../img/carros19.PNG'
import carros20 from '../img/carros20.PNG'
import carros21 from '../img/carros21.png'
import carros22 from '../img/carros22.PNG'
import carros23 from '../img/carros23.png'

import { useState } from 'react'


export const Cuatro = () => {

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
          <h1 className='TituloUno'>¿Qué es el análisis exploratorio de datos?</h1>
      :   <h1 className='TituloUno'>What is Exploratory Data Analysis?</h1>}

      {boton === 0 ?
          <p className='IntroUno'>El Análisis Exploratorio de Datos (AED) consiste en comprender los 
              conjuntos de datos resumiendo sus características principales y representándolas 
              visualmente. Este paso es muy importante, especialmente cuando se modelan los datos para 
              aplicar el aprendizaje automático. La representación gráfica en EDA consiste en histogramas, 
              diagramas de caja, diagramas de dispersión y muchos más. A menudo lleva mucho tiempo 
              explorar los datos. A través del proceso de EDA, podemos definir el planteamiento del 
              problema o la definición de nuestro conjunto de datos que es muy importante.
          </p>
      :   <p className='IntroUno'>Exploratory Data Analysis (EDA) consists of understanding the data sets
              by summarizing their main characteristics and visually representing them. This step is
              very important, especially when data modeling is applied to machine learning. The
              graphical representation in EDA consists of histograms, box plots, scatter plots and many
              more. It often takes a lot of time to explore the data. Through the EDA process, we can
              define the problem statement or the definition of our data set which is very important.
          </p>}

      {boton === 0 ?
          <h1 className='TituloUno'>¿Qué datos se van a explorar?</h1>
      :   <h1 className='TituloUno'>What data will be explored?</h1>}

      {boton === 0 ?
          <p className='IntroUno'>Para este caso se han conseguido un conjunto de datos interesantes de 
              coches de Kaggle. Para dar una breve información sobre el conjunto de datos, estos datos 
              contienen más de 10.000 filas y más de 10 columnas que contienen características del coche 
              como el tipo de combustible del motor, tamaño del motor, caballos de fuerza, tipo de 
              transmisión, MPG en carretera, MPG en ciudad y muchos más. En este tutorial, exploraremos 
              los datos y los prepararemos para el modelado.
          </p>
      :   <p className='IntroUno'>For this case, interesting car data sets have been obtained from Kaggle.
              To give a brief information about the data set, these data contain more than 10,000 rows
              and more than 10 columns that contain car features such as the type of engine fuel, engine
              size, horsepower, transmission type, MPG on the road, MPG in the city and many more. In
              this tutorial, we will explore the data and prepare it for modeling.
          </p>}

      {boton === 0 ?
          <h1 className='TituloUno'>Análisis exploratorio de datos (AED, EDA)</h1>
      :   <h1 className='TituloUno'>Exploratory Data Analysis (EDA)</h1>}

      {boton === 0 ?
          <p className='Contenido'>A continuación se presentan las bibliotecas que se utilizan con el fin 
              de realizar EDA (análisis exploratorio de datos) en este tutorial.
          </p>
      :   <p className='Contenido'>The following libraries are used in order to perform EDA (exploratory
              data analysis) in this tutorial.
          </p>}

    <img src={carros1} alt='carros1' className='imgUno' />
 
      {boton === 0 ?
          <p className='Contenido'>Cargar los datos en el marco de datos de pandas es sin duda uno de los 
              pasos más importantes en EDA, ya que se puede ver que el valor del conjunto de datos está 
              separado por comas. Así que todo lo que se tiene que hacer es simplemente leer el CSV en un 
              marco de datos y el marco de datos de pandas hace el trabajo.
          </p>
      :   <p className='Contenido'>Loading the data into the pandas dataframe is undoubtedly one of the 
              most important steps in EDA, as it can be seen that the value of the data set is separated
              by commas. So all that has to be done is simply read the CSV into a dataframe and the
              pandas dataframe does the job.
          </p>}

    <img src={carros2} alt='carros2' className='imgUno' />
    <img src={carros3} alt='carros3' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Aquí se comprueban los tipos de datos porque a veces el MSRP o el 
              precio del coche se almacenan como una cadena o un objeto, si en ese caso, se tiene que 
              convertir esa cadena a los datos enteros, sólo entonces se pueden trazar los datos a través 
              de un gráfico. Aquí, en este caso, los datos ya están en formato entero así que todo esta 
              ok.
          </p>
      :   <p className='Contenido'>Here the data types are checked because sometimes the MSRP or the car
              price is stored as a string or an object, if in that case, that string has to be converted
              to integer data, only then the data can be plotted through a graph. Here, in this case,
              the data is already in integer format so everything is ok.
          </p>}

    <img src={carros4} alt='carros4' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Este paso es ciertamente necesario en cada EDA porque a veces hay 
              muchas columnas que nunca se usan, en estos casos la única solución es eliminarlas. En este 
              caso, las columnas como Tipo de Combustible, Categoria de Mercado, Estilo de Vehiculo, 
              Popularidad, Numero de Puertas, Tamaño de Vehiculo no tienen ningun sentido así que se 
              eliminan.
          </p>
      :   <p className='Contenido'>This step is certainly necessary in every EDA because sometimes there
              are many columns that are never used, in these cases the only solution is to eliminate
              them. In this case, the columns such as Fuel Type, Market Category, Vehicle Style,
              Popularity, Number of Doors, Vehicle Size have no sense so they are eliminated.
          </p>}

    <img src={carros5} alt='carros5' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>En este caso, la mayoría de los nombres de las columnas son muy 
              confusos de leer, así que simplemente se cambia el nombre. Este es un buen enfoque que 
              mejora la legibilidad del conjunto de datos.
          </p>
      :   <p className='Contenido'>In this case, most of the column names are very confusing to read, so
              simply the name is changed. This is a good approach that improves the readability of the
              data set.
          </p>}

    <img src={carros6} alt='carros6' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Eliminar las listas duplicadas es a menudo una cosa útil que hacer 
              porque un gran conjunto de datos como en este caso contiene más de 10.000 filas a menudo 
              tienen algunos datos duplicados que podrían ser molestos, por lo que aquí se eliminan todos 
              los valores duplicados del conjunto de datos. Por ejemplo, antes de la eliminación tenía 
              11.914 filas de datos, pero después de eliminar los duplicados 10925 datos, lo que 
              significa que tenía 989 datos duplicados.
          </p>
      :   <p className='Contenido'>Removing duplicate lists is often a useful thing to do because a large
              data set like in this case containing more than 10,000 rows often have some duplicate
              data that could be annoying, so here all the duplicate values from the data set are
              removed. For example, before the removal I had 11,914 rows of data, but after removing the
              duplicates 10925 data, which means that I had 989 duplicate data.
          </p>}

    <img src={carros7} alt='carros7' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Ahora se eliminan los datos duplicados porque son innecesarios.
          </p>
      :   <p className='Contenido'>Now the duplicate data is removed because it is unnecessary.
          </p>}

    <img src={carros8} alt='carros8' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Por lo que se ve arriba hay 11914 filas y se están eliminando 989 
              filas de datos duplicados.
          </p>
      :   <p className='Contenido'>As seen above there are 11914 rows and 989 rows of duplicate data are
              being removed.
          </p>}

    <img src={carros9} alt='carros9' className='imgUno' />
    <img src={carros10} alt='carros10' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Este paso es muy similar al anterior, pero aquí se detectan todos los 
              valores perdidos y se eliminan posteriormente. Ahora, este no es un buen enfoque para 
              hacerlo, porque muchas personas simplemente reemplazan los valores faltantes con la media 
              o el promedio de esa columna, pero en este caso, se eliminan los valores faltantes. Esto se 
              debe a que hay cerca de 100 valores perdidos en comparación con 10.000 valores este es un 
              número pequeño y esto es insignificante por lo que acaba de caer esos valores.
          </p>
      :   <p className='Contenido'>This step is very similar to the previous one, but here all the 
              missing values are detected and then removed later. Now, this is not a good approach to
              do it because many people simply replace the missing values with the mean or the average
              of that column, but in this case, the missing values are removed. This is because there
              are about 100 missing values compared to 10,000 values this is a small number and this is
              insignificant so just drop those values.
          </p>}

    <img src={carros11} alt='carros11' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Esta es la razón por la que en el paso anterior al contar tanto 
              Cilindros como Caballos de Fuerza (HP) tenía 10856 y 10895 sobre 10925 filas.
          </p>
      :   <p className='Contenido'>This is the reason why in the previous step when counting both 
              Cylinders and Horsepower (HP) I had 10856 and 10895 out of 10925 rows.
          </p>}

    <img src={carros12} alt='carros12' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Ahora se han eliminado todas las filas que contienen valores Nulos o 
              N/A (Cilindros y Caballos de Fuerza (HP)).
          </p>
      :   <p className='Contenido'>Now all the rows containing Null or N/A values (Cylinders and
              Horsepower (HP)) have been removed.
          </p>}

    <img src={carros13} alt='carros13' className='imgUno' />

      {boton === 0 ?
          <p className='Contenido'>Un valor atípico es un punto o conjunto de puntos que son diferentes 
              de otros puntos. A veces pueden ser muy altos o muy bajos. A menudo es una buena idea 
              detectar y eliminar los valores atípicos. Porque los valores atípicos son una de las 
              principales causas de que el modelo sea menos preciso. De ahí que sea una buena idea 
              eliminarlos. La detección y eliminación de valores atípicos que se va a realizar se 
              denomina técnica de puntuación IQR. A menudo los valores atípicos se pueden ver con 
              visualizaciones utilizando un gráfico de caja. A continuación se muestran los gráficos de 
              caja de MSRP, Cilindros, Caballos de fuerza y Tamaño del motor. En todos los gráficos, se 
              pueden encontrar algunos puntos fuera de la caja que no son otros que valores atípicos.
          </p>
      :   <p className='Contenido'>An outlier is a point or set of points that are different from other
              points. Sometimes they can be very high or very low. It is often a good idea to detect and
              remove outliers. Because outliers are one of the main causes of the model being less
              accurate. Hence it is a good idea to remove them. The detection and removal of outliers
              that will be performed is called IQR score technique. Often outliers can be seen with
              visualizations using a box plot. Below are the box plots of MSRP, Cylinders, Horsepower
              and Engine Size. In all the graphs, some points outside the box can be found that are not
              other than outliers.
          </p>}

    <img src={carros14} alt='carros14' className='imgUno' />
    <img src={carros15} alt='carros15' className='imgUno' />
    <img src={carros16} alt='carros16' className='imgUno' />
    <img src={carros17} alt='carros17' className='imgUno' />


      {boton === 0 ? 
          <p className='Contenido'>Para este punto sólo es importante saber utilizar esta técnica para 
              eliminar los valores atípicos.
          </p>
      :   <p className='Contenido'>For this point it is only important to know how to use this technique 
              to remove outliers.
          </p>}

      <img src={carros18} alt='carros18' className='imgUno' />
      
      {boton === 0 ?
          <p className='Contenido'>Como se ve arriba, había unas 1600 filas atípicas. Pero no se pueden 
              eliminar por completo los valores atípicos, porque incluso después de utilizar la técnica 
              anterior puede haber 1-2 valores atípicos sin eliminar, pero se eliminan los datos que se puedan.
          </p>
      :   <p className='Contenido'>As seen above, there were about 1600 outlier rows. But the outliers
              cannot be completely removed because even after using the previous technique there can be
              1-2 outliers without removing, but the data that can be removed is removed.
          </p>}

      {boton === 0 ?
          <h1 className='TituloUno'>Histograma</h1>
      :   <h1 className='TituloUno'>Histogram</h1>}


      {boton === 0 ?
          <p className='Contenido'>El histograma se refiere a la frecuencia de aparición de variables en 
              un intervalo. En este caso, hay principalmente 10 tipos diferentes de empresas fabricantes de 
              coches, pero a menudo es importante saber quién tiene el mayor número de coches. Para ello el 
              histograma es una de las soluciones triviales que permite conocer el número total de coches fabricados 
              por una empresa diferente.
          </p>
      :   <p className='Contenido'>The histogram refers to the frequency of occurrence of variables in
              an interval. In this case, there are mainly 10 different types of car manufacturers, but it is
              often important to know who has the most cars. For this the histogram is one of the trivial
              solutions that allows to know the total number of cars manufactured by a different company.
          </p>}

    <img src={carros19} alt='carros19' className='imgUno' />

      {boton === 0 ?
          <h1 className='TituloUno'>Mapas de calor</h1>
      :   <h1 className='TituloUno'>Heat Maps</h1>}

      {boton === 0 ?
          <p className='Contenido'>Los mapas de calor son un tipo de gráfico necesario cuando se 
              necesitan encontrar las variables dependientes. Una de las mejores maneras de encontrar la 
              relación entre las características se puede hacer usando mapas de calor. En el siguiente 
              mapa de calor se sabe que el precio depende principalmente de la cilindrada, la potencia y 
              los cilindros.
          </p>
      :   <p className='Contenido'>Heat maps are a type of graph necessary when dependent variables are
              needed. One of the best ways to find the relationship between the features can be done
              using heat maps. In the following heat map it is known that the price mainly depends on the
              displacement, horsepower and cylinders.
          </p>}

    <img src={carros20} alt='carros20' className='imgUno' />
    <img src={carros21} alt='carros21' className='graficos' />

      {boton === 0 ?
          <h1 className='TituloUno'> Gráficos de dispersión </h1>
      :   <h1 className='TituloUno'> Scatter Plots </h1>}

      {boton === 0 ?
          <p className='Contenido'>Generalmente se utilizan gráficos de dispersión para encontrar la 
              correlación entre dos variables. Aquí los gráficos de dispersión se trazan entre caballos 
              de fuerza y el precio. Con el gráfico que se muestra a continuación, se pueden trazar 
              fácilmente una línea de tendencia. Estas características proporcionan una buena dispersión 
              de puntos.
          </p>
      :   <p className='Contenido'>Scatter plots are generally used to find the correlation between two
              variables. Here the scatter plots are plotted between horsepower and price. With the
              graph shown below, a trend line can be easily drawn. These features provide a good
              dispersion of points.
          </p>}

    <img src={carros22} alt='carros22' className='imgUno' />
    <img src={carros23} alt='carros23' className='graficos' />

      {boton === 0 ?
          <p className='Contenido'>Por lo tanto, los anteriores son algunos de los pasos involucrados en 
              el análisis exploratorio de datos, estos son algunos pasos generales que debe seguir para 
              realizar EDA.
          </p>
      :   <p className='Contenido'>Therefore, the above are some of the steps involved in data 
              exploration analysis, these are some general steps that you should follow to perform EDA.
          </p>}
      
    </div>
  )
}
