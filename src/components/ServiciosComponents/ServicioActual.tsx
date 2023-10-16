import apuntandoImagen from '../../assets/apuntando.jpg'
import apuntandoArrivaImagen from '../../assets/apuntando2.jpg'

const ServicioActual = ({ servicioActual, servicios }) => {
  const [serv] = servicios.filter((s) => s.nombre === servicioActual);

  return (
    <div className=" lg:w-8/12 lg:my-auto">
      {servicioActual ? (
        <div>
          <img src={serv.img}
          className="lg:w-8/12 lg:mx-auto "
          ></img>
          <h1 className="font-medium text-lg">{serv.nombre}</h1>
          <p className="text-gray-500">{serv.descripcion}</p>
          
        </div>
      ) : 
      (

        <div className="">
        <img src={apuntandoImagen}
        className="hidden lg:w-10/12 lg:block lg:mx-auto "
        ></img>
        <img src={apuntandoArrivaImagen}
        className=" lg:w-10/12 lg:hidden lg:mx-auto "
        ></img>
       
        
      </div>
      )
      
      }
    </div>
  );
};

export default ServicioActual;
