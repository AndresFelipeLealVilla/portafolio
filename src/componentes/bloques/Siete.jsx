import React from 'react'
import uber1 from '../img/uber1.PNG'
import uber2 from '../img/uber2.PNG'
import uber3 from '../img/uber3.PNG'
import uber4 from '../img/uber4.PNG'
import uber51 from '../img/uber51.PNG'
import uber52 from '../img/uber52.PNG'
import uber61 from '../img/uber61.PNG'
import uber62 from '../img/uber62.PNG'
import uber63 from '../img/uber63.PNG'
import uber71 from '../img/uber71.PNG'
import uber72 from '../img/uber72.PNG'
import uber81 from '../img/uber81.PNG'
import uber82 from '../img/uber82.PNG'
import uber91 from '../img/uber91.PNG'
import uber92 from '../img/uber92.PNG'
import uber101 from '../img/uber101.PNG'
import uber102 from '../img/uber102.PNG'
import uber111 from '../img/uber111.PNG'
import uber112 from '../img/uber112.PNG'
import uber121 from '../img/uber121.PNG'
import uber122 from '../img/uber122.PNG'
import uber131 from '../img/uber131.PNG'
import uber132 from '../img/uber132.PNG'
import uber141 from '../img/uber141.PNG'
import uber142 from '../img/uber142.PNG'
import uber151 from '../img/uber151.PNG'
import uber152 from '../img/uber152.PNG'
import uber161 from '../img/uber161.PNG'
import uber162 from '../img/uber162.PNG'
import uber171 from '../img/uber171.PNG'
import uber172 from '../img/uber172.PNG'
import uber181 from '../img/uber181.PNG'
import uber182 from '../img/uber182.PNG'
import uber191 from '../img/uber191.PNG'
import uber192 from '../img/uber192.PNG'
import uber201 from '../img/uber201.PNG'
import uber202 from '../img/uber202.PNG'
import uber211 from '../img/uber211.PNG'
import uber212 from '../img/uber212.PNG'
import uber221 from '../img/uber221.PNG'
import uber222 from '../img/uber222.PNG'
import uber223 from '../img/uber223.PNG'


import { useState } from 'react'

export const Siete = () => {

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
          <h1 className='TituloUno'>Análisis de datos de Uber</h1>
        : <h1 className='TituloUno'>Uber Data Analysis</h1>}

      {boton === 0 ?
          <p className='IntroUno'>La narración de datos es un componente importante del Aprendizaje 
                Automático a través del cual las empresas son capaces de comprender el trasfondo de 
                diversas operaciones. Con la ayuda de la visualización, las empresas pueden beneficiarse 
                de la comprensión de los datos complejos y obtener información que les ayude a tomar 
                decisiones.
          </p>
      :   <p className='IntroUno'>Data storytelling is an important component of Machine Learning
                through which companies are able to understand the background of various operations. With
                the help of visualization, companies can benefit from the understanding of complex data
                and obtain information that helps them make decisions.
          </p>}


          {boton === 0 ?
          <h1 className='TituloUno'>Importación de los paquetes esenciales</h1>
        : <h1 className='TituloUno'>Importing the Essential Packages</h1>}

      {boton === 0 ?
          <p className='IntroUno'>Se importan los paquetes esenciales que se van a utilizar en este 
                proyecto. Algunas de las librerías importantes de R que se utilizarán son:
          </p>
      :   <p className='IntroUno'>The essential packages are imported that will be used in this project.
                Some of the important R libraries that will be used are:
          </p>}

    <img src={uber1} alt='uber1' className='imgUno' />

      {boton === 0 ?
          <h1 className='TituloUno'>Creación del vector de colores</h1>
      :   <h1 className='TituloUno'>Creating vector of colors</h1>}

      {boton === 0 ?
          <p className='IntroUno'>Se crea un vector de colores que se incluirán en las funciones de 
                trazado. También puede seleccionar su propio conjunto de colores.
          </p>
      :   <p className='IntroUno'>A vector of colors is created that will be included in the plotting
                functions. You can also select your own set of colors.
          </p>}

    <img src={uber2} alt='uber1' className='imgUno' />


    {boton === 0 ?
          <h1 className='TituloUno'>Lectura de los datos en las variables designadas</h1>
      :   <h1 className='TituloUno'>Reading the data into the designated variables</h1>}

      {boton === 0 ?
          <p className='IntroUno'>Ahora, se leen varios archivos csv que contienen los datos desde abril 
                de 2014 hasta septiembre de 2014. Se almacenan en los marcos de datos correspondientes 
                como apr_data, may_data, etc. Una vez leídos los archivos, se combinan todos estos datos 
                en un único marco de datos llamado 'datos_2014'.
          
          
          </p>
      :   <p className='IntroUno'>Now, several csv files are read that contain the data from April 2014
                to September 2014. They are stored in the corresponding data frames as apr_data, may_data,
                etc. Once the files are read, all this data is combined into a single data frame called
                'data_2014'.
          </p>}

      {boton === 0 ?
          <p className='IntroUno'>A continuación, en el siguiente paso, se realiza el formateo adecuado 
                de la columna Fecha.Hora. Luego, se procede a crear factores de objetos de tiempo como 
                día, mes, año, etc.
          </p>
      :   <p className='IntroUno'>Next, in the following step, the appropriate formatting of the Date.Time
                column is done. Then, time object factors such as day, month, year, etc. are created.
          </p>}

    <img src={uber3} alt='uber1' className='imgUno' />
    <img src={uber4} alt='uber1' className='imgUno' />

      {boton === 0 ?
          <h1 className='TituloUno'>Trazar los viajes por horas en un día</h1>
      :   <h1 className='TituloUno'>Plotting the trips by hours in a day</h1>}

      {boton === 0 ?
          <p className='Contenido'>En el siguiente paso, se utiliza la función ggplot para representar 
                gráficamente el número de viajes que los pasajeros han realizado en un día. También se 
                utiliza dplyr para agregar nuestros datos. En las visualizaciones resultantes, se puede 
                entender cómo evoluciona el número de pasajeros a lo largo del día. Se Observa que el 
                número de viajes es mayor por la tarde, en torno a las 17.00 y las 18.00 horas.
          </p>
      :   <p className='Contenido'>In the following step, the ggplot function is used to graphically
                represent the number of trips that passengers have made in a day. dplyr is also used to
                add our data. In the resulting visualizations, it can be understood how the number of
                passengers evolves throughout the day. It is observed that the number of trips is higher
                in the afternoon, around 5.00 and 6.00 pm.
          </p>}

    <img src={uber51} alt='uber1' className='imgUno' />
    <img src={uber52} alt='uber1' className='graficos'/>

    <img src={uber61} alt='uber1' className='imgUno' />
    <img src={uber62} alt='uber1' className='graficos'/>
    <br/>
    <img src={uber63} alt='uber1' className='graficos'/>


    {boton === 0 ?
          <h1 className='TituloUno'>Trazando datos por viajes durante cada día del mes</h1>
      :   <h1 className='TituloUno'>Plotting data by trips during each day of the month</h1>}
   
      {boton === 0 ?
          <p className='Contenido'>En esta sección del proyecto, se aprende a graficar los datos basados 
                en cada día del mes. Se Observa en la visualización resultante que el día 30 del mes tiene 
                el mayor número de viajes del año, a lo que contribuye principalmente el mes de abril.
          </p>
      :   <p className='Contenido'>In this section of the project, we learn to plot the data based on
                each day of the month. It is observed in the resulting visualization that the 30th day of
                the month has the highest number of trips of the year, which is mainly contributed by
                the month of April.
          </p>}

    <img src={uber71} alt='uber1' className='imgUno' />
    <img src={uber72} alt='uber1' className='graficos'/>

    <img src={uber81} alt='uber1' className='imgUno' />
    <img src={uber82} alt='uber1' className='graficos'/>

    <img src={uber91} alt='uber1' className='imgUno' />
    <img src={uber92} alt='uber1' className='graficos'/>


        {boton === 0 ?
            <h1 className='TituloUno'>Número de viajes que tienen lugar durante los meses de un año</h1>
        :   <h1 className='TituloUno'>Number of trips that take place during the months of a year</h1>}
  
      {boton === 0 ?
          <p className='Contenido'>En esta sección, se visualiza el número de viajes que tienen lugar 
                cada mes del año. En la visualización de salida, se observa que la mayoría de los viajes 
                se realizaron durante el mes de septiembre. Además, también se obtienen informes visuales 
                del número de viajes que se realizaron en cada día de la semana.
          </p>
      :   <p className='Contenido'>In this section, the number of trips that take place each month of
                the year is visualized. In the output visualization, it is observed that most of the
                trips were made during the month of September. In addition, visual reports of the number
                of trips that were made on each day of the week are also obtained.
          </p>}

    <img src={uber101} alt='uber1' className='imgUno' />
    <img src={uber102} alt='uber1' className='graficos'/> 

    <img src={uber111} alt='uber1' className='imgUno' />
    <img src={uber112} alt='uber1' className='graficos'/> 

    <img src={uber121} alt='uber1' className='imgUno' />
    <img src={uber122} alt='uber1' className='graficos'/> 

    {boton === 0 ?
            <h1 className='TituloUno'>Averiguación del número de viajes por bases</h1>
        :   <h1 className='TituloUno'>Finding out the number of trips by bases</h1>}

      {boton === 0 ?
          <p className='Contenido'>En la siguiente visualización, se traza el número de viajes que han 
                realizado los pasajeros desde cada una de las bases. Hay cinco bases en total, de las 
                cuales se observa que B02617 tiene el mayor número de viajes. Además, esta base tuvo el 
                mayor número de viajes en el mes B02617. El jueves se observó el mayor número de viajes 
                en las tres bases - B02598, B02617, B02682.
          </p>
      :  <p className='Contenido'>In the following visualization, the number of trips that passengers
                have made from each of the bases is plotted. There are five bases in total, of which it
                is observed that B02617 has the highest number of trips. In addition, this base had the
                highest number of trips in the month B02617. Thursday saw the highest number of trips in
                the three bases - B02598, B02617, B02682.
          </p>}


    <img src={uber131} alt='uber1' className='imgUno' />
    <img src={uber132} alt='uber1' className='graficos'/> 

    <img src={uber141} alt='uber1' className='imgUno' />
    <img src={uber142} alt='uber1' className='graficos'/> 

    <img src={uber151} alt='uber1' className='imgUno' />
    <img src={uber152} alt='uber1' className='graficos'/>


        {boton === 0 ?
            <h1 className='TituloUno'>Creación de una visualización Heatmap de día, hora y mes</h1>
        :   <h1 className='TituloUno'>Creation of a Heatmap visualization of day, hour and month</h1>}

        {boton === 0 ?
            <p className='Contenido'>En esta sección, se aprende a trazar mapas de calor utilizando 
                ggplot(). Se trazan cinco mapas de calor:

                <ol>
                    <li>Se traza Heatmap por hora y día.</li>
                    <li>Se traza Heatmap por Mes y Día.</li>
                    <li>Un Heatmap por Mes y Día de la Semana</li>
                    <li>Un Heatmap que delimite Mes y Bases.</li>
                    <li>Se traza el Heatmap por Bases y Día de la Semana.</li>
                </ol>
          </p>
        :  <p className='Contenido'>In this section, we learn to plot heatmaps using ggplot(). Five
                heatmaps are plotted:

                <ol>
                    <li>Heatmap is plotted by hour and day.</li>
                    <li>Heatmap is plotted by Month and Day.</li>
                    <li>A Heatmap by Month and Day of the Week</li>
                    <li>A Heatmap that delimits Month and Bases.</li>
                    <li>A Heatmap by Bases and Day of the Week is plotted.</li>
                </ol>
            </p>}

    <img src={uber161} alt='uber1' className='imgUno' />
    <img src={uber162} alt='uber1' className='graficos'/>

    <img src={uber171} alt='uber1' className='imgUno' />
    <img src={uber172} alt='uber1' className='graficos'/>

    <img src={uber181} alt='uber1' className='imgUno' />
    <img src={uber182} alt='uber1' className='graficos'/>

    <img src={uber191} alt='uber1' className='imgUno' />
    <img src={uber192} alt='uber1' className='graficos'/>

    <img src={uber201} alt='uber1' className='imgUno' />
    <img src={uber202} alt='uber1' className='graficos'/>

    <img src={uber211} alt='uber1' className='imgUno' />
    <img src={uber212} alt='uber1' className='graficos'/>


        {boton === 0 ?
            <h1 className='TituloUno'>Creación de un mapa de visualización de los desplazamientos</h1>
        :   <h1 className='TituloUno'>Creation of a visualization map of the displacements</h1>}

        {boton === 0 ?
            <p className='Contenido'>En la sección final, se visualizan los paseos en la ciudad de Nueva 
                York mediante la creación de un geo-plot que ayudará a visualizar los paseos durante 2014 
                (Abr - Sep) y por las bases en el mismo período.
            </p>
        :   <p className='Contenido'>In the final section, the rides in the city of New York are visualized
                by creating a geo-plot that will help visualize the rides during 2014 (Apr - Sep) and by
                the bases in the same period.
            </p>}

    <img src={uber221} alt='uber1' className='imgUno' />
    <img src={uber222} alt='uber1' className='graficos'/>
    <br/>
    <img src={uber223} alt='uber1' className='graficos'/>

    </div>
  )
}
