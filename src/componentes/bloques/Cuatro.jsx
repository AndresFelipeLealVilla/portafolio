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


export const Cuatro = () => {
  return (
    <div className='Uno'>
        <h1 className='TituloUno'>¿Qué es el análisis exploratorio de datos?</h1>
      <p className='IntroUno'>El Análisis Exploratorio de Datos (AED) consiste en comprender los 
      conjuntos de datos resumiendo sus características principales y representándolas visualmente. 
      Este paso es muy importante, especialmente cuando se modelan los datos para aplicar el aprendizaje 
      automático. La representación gráfica en EDA consiste en histogramas, diagramas de caja, diagramas 
      de dispersión y muchos más. A menudo lleva mucho tiempo explorar los datos. A través del proceso de 
      EDA, podemos definir el planteamiento del problema o la definición de nuestro conjunto de datos que 
      es muy importante.
      </p>

    <h1 className='TituloUno'>¿Qué datos se van a explorar?</h1>
      <p className='IntroUno'>Para este caso se han conseguido un conjunto de datos interesantes de 
      coches de Kaggle. Para dar una breve información sobre el conjunto de datos, estos datos contienen 
      más de 10.000 filas y más de 10 columnas que contienen características del coche como el tipo de 
      combustible del motor, tamaño del motor, caballos de fuerza, tipo de transmisión, MPG en carretera, 
      MPG en ciudad y muchos más. En este tutorial, exploraremos los datos y los prepararemos para el 
      modelado.
      </p>
      <p className='IntroUno'>¡¡¡Empecemos !!!</p>

      <h1 className='TituloUno'>Análisis exploratorio de datos (AED, EDA)</h1>

      <p className='Contenido'>A continuación se presentan las bibliotecas que se utilizan con el fin de 
      realizar EDA (análisis exploratorio de datos) en este tutorial.
      </p>

      <img src={carros1} alt='carros1' className='imgUno' />
 

      <p className='Contenido'>
      Cargar los datos en el marco de datos de pandas es sin duda uno de los pasos más importantes en 
      EDA, ya que se puede ver que el valor del conjunto de datos está separado por comas. Así que todo 
      lo que se tiene que hacer es simplemente leer el CSV en un marco de datos y el marco de datos de 
      pandas hace el trabajo.

      </p>

      <img src={carros2} alt='carros2' className='imgUno' />
      <img src={carros3} alt='carros3' className='imgUno' />

      <p className='Contenido'>Aquí se comprueban los tipos de datos porque a veces el MSRP o el precio 
      del coche se almacenan como una cadena o un objeto, si en ese caso, se tiene que convertir esa 
      cadena a los datos enteros, sólo entonces se pueden trazar los datos a través de un gráfico. Aquí, 
      en este caso, los datos ya están en formato entero así que todo esta ok.
      </p>

      <img src={carros4} alt='carros4' className='imgUno' />

      <p className='Contenido'>Este paso es ciertamente necesario en cada EDA porque a veces hay muchas 
      columnas que nunca se usan, en estos casos la única solución es eliminarlas. En este caso, las 
      columnas como Tipo de Combustible, Categoria de Mercado, Estilo de Vehiculo, Popularidad, 
      Numero de Puertas, Tamaño de Vehiculo no tienen ningun sentido así que se eliminan.
      </p>

      <img src={carros5} alt='carros5' className='imgUno' />

      <p className='Contenido'>En este caso, la mayoría de los nombres de las columnas son muy confusos 
      de leer, así que simplemente se cambia el nombre. Este es un buen enfoque que mejora la legibilidad 
      del conjunto de datos.
      </p>

      <img src={carros6} alt='carros6' className='imgUno' />

      <p className='Contenido'>Eliminar las listas duplicadas es a menudo una cosa útil que hacer porque 
      un gran conjunto de datos como en este caso contiene más de 10.000 filas a menudo tienen algunos 
      datos duplicados que podrían ser molestos, por lo que aquí se eliminan todos los valores duplicados 
      del conjunto de datos. Por ejemplo, antes de la eliminación tenía 11.914 filas de datos, pero 
      después de eliminar los duplicados 10925 datos, lo que significa que tenía 989 datos duplicados.
      </p>

      <img src={carros7} alt='carros7' className='imgUno' />

      <p className='Contenido'>Ahora se eliminan los datos duplicados porque son innecesarios.
      </p>

      <img src={carros8} alt='carros8' className='imgUno' />

      <p className='Contenido'>Por lo que se ve arriba hay 11914 filas y se están eliminando 989 filas 
      de datos duplicados.
      </p>

      <img src={carros9} alt='carros9' className='imgUno' />
      <img src={carros10} alt='carros10' className='imgUno' />

      <p className='Contenido'>Este paso es muy similar al anterior, pero aquí se detectan todos los 
      valores perdidos y se eliminan posteriormente. Ahora, este no es un buen enfoque para hacerlo, 
      porque muchas personas simplemente reemplazan los valores faltantes con la media o el promedio de 
      esa columna, pero en este caso, se eliminan los valores faltantes. Esto se debe a que hay cerca de 
      100 valores perdidos en comparación con 10.000 valores este es un número pequeño y esto es 
      insignificante por lo que acaba de caer esos valores.
      </p>

      <img src={carros11} alt='carros11' className='imgUno' />

    <p className='Contenido'>Esta es la razón por la que en el paso anterior al contar tanto Cilindros 
    como Caballos de Fuerza (HP) tenía 10856 y 10895 sobre 10925 filas.
    </p>


    <img src={carros12} alt='carros12' className='imgUno' />

    <p className='Contenido'>Ahora se han eliminado todas las filas que contienen valores Nulos o N/A 
    (Cilindros y Caballos de Fuerza (HP)).    
    </p>

    <img src={carros13} alt='carros13' className='imgUno' />

    <p className='Contenido'>Un valor atípico es un punto o conjunto de puntos que son diferentes de 
    otros puntos. A veces pueden ser muy altos o muy bajos. A menudo es una buena idea detectar y 
    eliminar los valores atípicos. Porque los valores atípicos son una de las principales causas de que 
    el modelo sea menos preciso. De ahí que sea una buena idea eliminarlos. La detección y eliminación 
    de valores atípicos que se va a realizar se denomina técnica de puntuación IQR. A menudo los valores 
    atípicos se pueden ver con visualizaciones utilizando un gráfico de caja. A continuación se muestran 
    los gráficos de caja de MSRP, Cilindros, Caballos de fuerza y Tamaño del motor. En todos los gráficos, 
    se pueden encontrar algunos puntos fuera de la caja que no son otros que valores atípicos.
    </p>

    <img src={carros14} alt='carros14' className='imgUno' />
    <img src={carros15} alt='carros15' className='imgUno' />
    <img src={carros16} alt='carros16' className='imgUno' />
    <img src={carros17} alt='carros17' className='imgUno' />


      <p className='Contenido'>Para este punto sólo es importante saber utilizar esta técnica para 
      eliminar los valores atípicos.
      </p>

      <img src={carros18} alt='carros18' className='imgUno' />
      

      <p className='Contenido'>Como se ve arriba, había unas 1600 filas atípicas. Pero no se pueden 
      eliminar por completo los valores atípicos, porque incluso después de utilizar la técnica anterior 
      puede haber 1-2 valores atípicos sin eliminar, pero se eliminan los datos que se puedan.
      </p>

      <h1 className='TituloUno'>
          Histograma
      </h1>

      <p className='Contenido'>El histograma se refiere a la frecuencia de aparición de variables en un 
      intervalo. En este caso, hay principalmente 10 tipos diferentes de empresas fabricantes de coches, 
      pero a menudo es importante saber quién tiene el mayor número de coches. Para ello el histograma 
      es una de las soluciones triviales que permite conocer el número total de coches fabricados por una 
      empresa diferente.
</p>

      <img src={carros19} alt='carros19' className='imgUno' />


      <h1 className='TituloUno'>
          Mapas de calor
      </h1>

      <p className='Contenido'>Los mapas de calor son un tipo de gráfico necesario cuando se necesitan 
      encontrar las variables dependientes. Una de las mejores maneras de encontrar la relación entre las 
      características se puede hacer usando mapas de calor. En el siguiente mapa de calor se sabe que el 
      precio depende principalmente de la cilindrada, la potencia y los cilindros.
      </p>

      <img src={carros20} alt='carros20' className='imgUno' />
      <img src={carros21} alt='carros21' className='graficos' />

      <h1 className='TituloUno'> Gráficos de dispersión </h1>

      <p className='Contenido'>Generalmente se utilizan gráficos de dispersión para encontrar la 
      correlación entre dos variables. Aquí los gráficos de dispersión se trazan entre caballos de 
      fuerza y el precio. Con el gráfico que se muestra a continuación, se pueden trazar fácilmente una 
      línea de tendencia. Estas características proporcionan una buena dispersión de puntos.
      </p>

      <img src={carros22} alt='carros22' className='imgUno' />
      <img src={carros23} alt='carros23' className='graficos' />


      <p className='Contenido'>Por lo tanto, los anteriores son algunos de los pasos involucrados en el 
      análisis exploratorio de datos, estos son algunos pasos generales que debe seguir para realizar 
      EDA.
      </p>
      
    </div>
  )
}
