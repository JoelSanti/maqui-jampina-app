import Servicio from "./Servicio";
import fisio1 from "../../../assets/f1.jpg";
import fisio2 from "../../../assets/f2.jpg";
import fisio3 from "../../../assets/f3.jpg";
import {
  Link
 } from "react-router-dom";
const Nservicios = () => {
  const servicios = [
    { 
      id:1,
      nombre: "Fisioterapia deportiva",
      img: fisio1,
      descripcion:
        "La fisioterapia deportiva es una de las muchas especialidades de la fisioterapia a través de la cual se busca la rehabilitación, la atención y la prevención de deportistas amateurs y profesionales, así como mostrar unas correctas directrices a aquellos pacientes que practican actividad física y quieren hacerlo de forma segura.",
    },
    {
      id:2,
      nombre: "Lesiones centrales",
      img: fisio2,
      descripcion:
        "El cerebro y  la médula espinal poseen una grandiosa plasticidad por lo que si hay un daño en cualquiera de las dos estructuras, hay posibilidades de que se pueda  regenerar y recuperar, logrando grandiosos resultados de recuperación sensoriomotora a nivel anatomofisiológico gracias a la fisioterapia. Tras una lesión, la fisioterapia se encargará de  prevenir las complicaciones respiratorias y circulatorias, además del cuidado de las zonas de presión, el mantenimiento del rango articular y el fortalecimiento de la musculatura total o parcialmente inervada. En este artículo podrán encontrar las distintas lesiones que pueden ocurrir en la médula, sus consecuencias y tratamiento fisioterapéutico.",
    },
    {
      id:3,
      nombre: "Patologías de la columna",
      img: fisio3,
      descripcion:
        "Enfermedades degenerativas, traumáticas y escoliosis son las atenciones más frecuentes del Centro de Columna.",
    },
  ];

  return (
    <div
      className="
    
    mb-8  px-8  text-center
    
    md:mb-20 md:mt-4 md:px-14 md:space-x-2 md:text-center
    lg:mb-40 lg:mt-4 lg:px-14 lg:space-x-2 lg:text-center
    "
    >
      <h1
        className="
      text-xl font-bold
      md:text-2xl md:font-bold
      
      "
      >
        NUESTROS SERVICIOS
      </h1>
      
      <div className="flex space-x-4 justify-center">
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
      </div>

      <p className="text-gray-400">
        Ponemos a tu disposición un amplio abanico de terapias para tratar tu
        salud.
      </p>

      <div
        className=" 

      my-10
      md:block md:space-x-2 md:my-10

      lg:flex lg:space-x-2 lg:my-10
      
      "
      >
        <div className=" 
        
        md:flex
        lg:flex 
        ">
          <div className="mt-6 
        
          md:my-0 md:block  md:space-x-4
          lg:my-0 lg:flex lg:w-auto lg:space-x-4
          
          ">
            {servicios.map((servicio) => (
              <Servicio servicio={servicio} key={servicio.id}/>
            ))}
          
          </div>

          <Link to="/Servicios"
            className="
          text-white hidden
          lg:block
          w-10 md:space-y-4 md:h-full bg-teal-400 md:py-24 mx-2 transition duration-500 ease-in-out  hover:bg-teal-500 transform hover:-translate-y-1 hover:scale-110 ..."
          >
            <div
              className="
              lg:block
              "
            >
              <h1>V</h1>
              <h1>E</h1>
              <h1>R</h1>
            </div>

            <div
              className="
          lg:block"
            >
              <h1>M</h1>
              <h1>Á</h1>
              <h1>S</h1>
            </div>

           
            </Link>

          
          
        </div>
        <Link to="/Servicios"
            className="

          text-white
          text-sm
          p-1
          block w-full
          lg:hidden

          md:my-4
          transition duration-500 ease-in-out bg-teal-400 hover:bg-teal-500 transform hover:-translate-y-1 hover:scale-110 ..."
          >
           <div className="">VER MÁS</div>
          </Link>

        <div className="shadow-xl 
        text-center space-y-6 py-6 md:pt-16 lg:pt-0
        lg:w-80
        
        ">
          <h1 className="mb-4 font-medium">HORARIO DE ATENCION</h1>

          <div className="flex justify-between px-4  
          md:mx-4 md:shadow-bj lg:shadow-none
          lg:w-80 lg:mx-0
          ">
            <h1>Lunes</h1>
            <h1>7:00-19:00</h1>
          </div>

          <div className="
          flex justify-between px-4  
          md:mx-4 md:shadow-bj lg:shadow-none
          lg:w-80 lg:mx-0
          ">
            <h1>Martes</h1>
            <h1>7:00-19:00</h1>
          </div>

          <div className="
          flex justify-between px-4  
          md:mx-4 md:shadow-bj lg:shadow-none
          lg:w-80 lg:mx-0
          ">
            <h1>Miercoles</h1>
            <h1>7:00-19:00</h1>
          </div>

          <div className="
          flex justify-between px-4  
          md:mx-4 md:shadow-bj lg:shadow-none
          lg:w-80 lg:mx-0
          ">
            <h1>Jueves</h1>
            <h1>7:00-19:00</h1>
          </div>

          <div className="
          flex justify-between px-4  
          md:mx-4 md:shadow-bj lg:shadow-none
          lg:w-80 lg:mx-0
          ">
            <h1>Viernes</h1>
            <h1>7:00-19:00</h1>
          </div>

          <div className="
          flex justify-between px-4  
          md:mx-4 md:shadow-bj lg:shadow-none
          lg:w-80 lg:mx-0
          ">
            <h1>Sabado</h1>
            <h1>7:00-19:00</h1>
          </div>

          
        </div>
      </div>


    </div>
  );
};

export default Nservicios;
