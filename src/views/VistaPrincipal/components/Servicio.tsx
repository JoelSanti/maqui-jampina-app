interface Servicio {
    nombre: string;
    descripcion: string;
    img: string;
}
interface ServicioProps {
    servicio: Servicio;
}

const Servicio = ({servicio}:ServicioProps) => {
    return (
    <div className="
    my-4 border-2 p-2


    md:border-2 md:p-2

    lg:border-2 lg:p-2

    "
    >
        <img className=" lg:w-80 lg:h-48" src={servicio.img}></img>
        <h1 className="font-semibold my-4 md:text-xl lg:text-base">{servicio.nombre}</h1>
        <p className="

        lg:w-72 text-center text-gray-400 serviciosp mb-4

        ">
            {servicio.descripcion}
        </p>

    </div> );
}

export default Servicio;
