import MostrarServicios from "./MostrarServicios";
import fisio1 from "../../assets/servicio/paralisisfacial.jpg";
import fisio2 from "../../assets/f2.jpg";
import fisio3 from "../../assets/servicio/postfracturas.jpg";
import esquinces from "../../assets/servicio/esquinces.jpg";
import patologiasdecolumna from "../../assets/servicio/patologiasdecolumna.jpg";
import EscoliosisCifosis from "../../assets/servicio/EscoliosisCifosis.jpg";
import terapiaderelajacion from "../../assets/servicio/terapiaderelajacion.jpg";
import estimulaciontemprana from "../../assets/servicio/estimulaciontemprana.jpg";
import fisioterapiainfantil from "../../assets/servicio/fisioterapiainfantil.jpg";
import fisioterapiadeportiva from "../../assets/servicio/fisioterapiadeportiva.jpg";
import luxacion from "../../assets/servicio/luxacion.jpg";

import venta from "../../assets/servicio/venta.jpg";

import ServicioActual from "./ServicioActual";

import { useState } from "react";
const ListaServicios = () => {
  const [servicioActual, AgregarServicio] = useState("");

  const servicios = [
    {
      id:1,
      nombre: "Parálisis facial.",
      img: fisio1,
      descripcion:
        "Ocurre cuando una persona ya no es capaz de mover algunos o ninguno de los músculos en uno o ambos lados de la cara,La parálisis de Bell generalmente desaparece por sí sola al cabo de seis meses. La fisioterapia puede ayudar a evitar que los músculos se contraigan permanentemente.",
    },
    {
      id:2,
      nombre: "Lesiones centrales",
      img: fisio2,
      descripcion:
        "El cerebro y  la médula espinal poseen una grandiosa plasticidad por lo que si hay un daño en cualquiera de las dos estructuras, hay posibilidades de que se pueda  regenerar y recuperar, logrando grandiosos resultados de recuperación sensoriomotora a nivel anatomofisiológico gracias a la fisioterapia.",
    },
    {
      id:3,
      nombre: "Post fracturas",
      img: fisio3,
      descripcion:
        "Las secuelas postramáutica son aquellas que se producen tras una fractura, generalmente compleja y con más frecuencia en las extremidades inferiores. Las más frecuentes son las consolidaciones viciosas, pseudoartrosis y la osteomielitis.",
    },
    {
      id:4,
      nombre: "Esguinces",
      img: esquinces,
      descripcion:
        "Los esguinces se producen cuando hay un estiramiento o una pérdida de tensión en una articulación, que muchas veces puede ir acompañada de la rotura de ligamentos o fibras musculares. Por su parte, las luxaciones se presentan cuando el hueso se sale de la articulación, lo que se conoce comúnmente como “desmontarse”.",
    },
    {
      id:5,
      nombre: "luxaciones.",
      img: luxacion,
      descripcion:
        "Es una separación de dos huesos en el lugar donde se encuentran en una articulación. Una articulación es el lugar en donde dos huesos se conectan, lo que permite el movimiento. Una articulación luxada es una articulación donde los huesos ya no están en su posición normal..",
 

    },
    {
      id:6,
      nombre: "Patologías de la columna",
      img: patologiasdecolumna,
      descripcion:
        "La columna dorsal y lumbar son segmentos que pertenecen a la columna vertebral, la estructura ósea que soporta el tronco, formada por diferentes componentes pasivos y activos. Son habitualmente zonas de dolor y queja en la población. El dolor en la columna dorsal se denomina dorsalgia, y el dolor en columna lumbar, lumbalgia. Ambas entidades suelen cursar con dolor que aumenta al caminar o en reposo, según la naturaleza del problema, y focalizado en las zonas de las columna dorsal o columna lumbar.",
    },
    {
      id:7,
      nombre: "Escoliosis, sifosis.",
      img: EscoliosisCifosis,
      descripcion:
        "La lordosis y cifosis, son las curvaturas naturales de la columna. La lordosis se presenta en cervicales y lumbares la cifosis en dorsales y sacro, las curvas naturales de la columna y se van alterando con la edad, traumatismos y posturas, creando hiper o hipo, La escoliosis es un curvatura anómala lateral, hay con rotación de vértebras, es un mal común y en tanto no se disminuyan los espacios intervertebrales.",
    },

    {
      id:8,
      nombre: "Terapia de relajación.",
      img: terapiaderelajacion,
      descripcion:
        "La terapia de relajación se basa fundamentalmente en masajes relajantes, un tipo de tratamiento manual que se aplica de forma firme y progresiva con objeto de descargar la tensión acumulada sobre el cuerpo y calmar la mente.",
    },
    {
      id:9,
      nombre: "Estimulación temprana",
      img: estimulaciontemprana,
      descripcion:
        "Se denomina estimulación precoz o estimulación temprana al grupo de técnicas educativas especiales empleadas en niños entre el nacimiento y los diez años de vida para corregir trastornos reales o potenciales en su desarrollo, o para estimular capacidades compensadoras.",
    },
    {
      id:10,
      nombre: "Fisioterapia Pediátrica",
      img: fisioterapiainfantil,
      descripcion:
        "La fisioterapia pediátrica es la disciplina de la fisioterapia que se encarga del asesoramiento, tratamiento y cuidado de aquellos bebés, niños/as y adolescentes que presentan un retraso general en su desarrollo, desórdenes en el movimiento (tanto congénitos como adquiridos) o que tienen riesgo de padecerlos.",
    },

    {
      id:11,
      nombre: "Fisioterapia deportiva ",
      img: fisioterapiadeportiva,
      descripcion:
        "La fisioterapia del deporte o terapia física deportiva es aquella que trata a todo atleta o deportista que sufre alguna lesión o traumatismo, no necesariamente durante la práctica física.",
    },
    {
      id:12,
      nombre: "Venta de productor ortopédicos",
      img: venta,
      descripcion:
        "Tambien contamos con algunos productos ortopédicos a la venta no dude en preguntar estamos para atenderle.",
    }
    
  ];

  return (
    <div className="py-6 pb-20 lg:pb-7 w-full lg:p-20 text-center space-y-2">
      <h1 className=" text-lg font-bold lg:text-2xl text-center">NUESTROS SERVICIOS</h1>
      <div className="flex space-x-4 justify-center">
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
      </div>
      <p className="w-10/12 text-center m-auto text-gray-500">
        Brindamos una gran variedad de tratamientos 
      </p>

        <div className=" w-full">

         <div className="mx-6 lg:flex lg:space-x-10 lg:ml-6 lg:my-20">
            
            
               
<div>
  <h1 className="lg:text-lg font-medium">BRINDAMOS SERVICIOS PARA</h1>
                <div className="overflow-x-hidden lg:w-5/10 overflow-y-auto h-28 my-2 lg:h-full">
                  
                  {servicios.map((servicio) => (
                    <MostrarServicios
                    key={servicio.id}
                      servicio={servicio}
                      AgregarServicio={AgregarServicio}
                    />
                  ))}
                </div>
</div>
            
          
              <ServicioActual
                servicioActual={servicioActual}
                servicios={servicios}
              />
         
         </div>

        </div>
    </div>
  );
};

export default ListaServicios;
