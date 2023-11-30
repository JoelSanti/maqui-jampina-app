
interface Servicio {
  nombre: string;
  id: number;
}
interface ServicioProps {
  servicio: Servicio;
  AgregarServicio: (nombre: string) => void;
}

const MostrarServicio = ({servicio,AgregarServicio}:ServicioProps) => {


  const onclickServicio = (e: React.MouseEvent<HTMLButtonElement>) => {
    AgregarServicio(e.currentTarget.id)
  }


  return (
    <div className=" my-1.5  shadow-2xl lg:w-96">

        <button
        onClick={onclickServicio}
        id={servicio.nombre}
        type="button"
        className=" shadow-bj w-full h-8 transition duration-500 ease-in-out  hover:bg-teal-200 transform hover:-translate-y-1 hover:scale-100 ..."
        >
           {servicio.nombre}
        </button>
    </div>
  );
};

export default MostrarServicio;
