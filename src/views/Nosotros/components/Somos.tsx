import bienvenido2 from "../../../assets/bienvenido2.jpg";
import bienvenido3 from "../../../assets/bienvenido3.jpg";

const Somos = () => {
  return (
    <div className="w-full lg:px-20 text-center space-y-2 mb-20">
      <h1 className="text-lg md:text-2xl text-center font-bold">SOBRE NOSOTROS</h1>
      <div className="flex space-x-4 justify-center">
        <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
        <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
      </div>
    

      <div className="
      pt-2
      lg:flex lg:pt-16
      
      ">
        <img src={bienvenido2} className="px-10 py-4 lg:px-0 lg:py-0 lg:m-auto lg:w-1/2"></img>

        <div className="block space-y-6 my-auto">
          <h1 className="text-lg md:text-xl  text-center font-semibold">¿QUIENES SOMOS?</h1>
          <p className="w-10/12 text-center m-auto text-gray-500">
            Somos un Centro de Rehabilitación y Fisioterapia especialistas en Terapias de Rápida Recuperación, con el objetivo
            de mejorar el movimiento sano de tu cuerpo, alivio del dolor y
            pronto regreso a las prácticas, rutinas y hobbies que te hacen
            único. Mejorando así tu calidad de vida..
          </p>

          <h1 className="text-lg md:text-xl  text-center font-semibold">NUESTRA VISION</h1>
          <p className="w-10/12 text-center m-auto text-gray-500">
            Dar atención especializada en Rehabilitación Física a personas con
            una limitación funcional o motora que impida el desempeño de sus
            actividades, buscando su independencia máxima, cuidando siempre su
            integridad y actuando con ética y profesionalismo..
          </p>
        </div>
      </div>

      <div className="
      
      pt-2
      lg:flex lg:pt-16
      
      
      ">
        <div className="block space-y-6 my-auto">
          <h1 className="text-lg md:text-xl text-center font-semibold">NUESTRA MISION</h1>
          <p className="w-10/12 text-center m-auto text-gray-500">
            Brindar el mejor servicio de Medicina Física y Rehabilitación, de
            manera oportuna, eficiente y con calidez, para lograr una óptima
            recuperación de nuestros pacientes, asegurando un pronto retorno a
            sus actividades.
          </p>

          <h1 className="text-lg md:text-xl  text-center font-semibold">¿QUE HACEMOS?</h1>
          <p className="w-10/12 text-center m-auto text-gray-500">
            Brindamos una gran gama de tratamientos para tratar  problemas relacionados con los sistemas
            musculoesquelético (tejidos, articulaciones y huesos), neuromuscular
            (cerebro y sistema nervioso) y cardiovascular (corazón y pulmones).
          </p>
        </div>
        <img src={bienvenido3} className="px-10 py-4 lg:px-0 lg:py-0 lg:m-auto lg:w-1/2"></img>
      </div>
    </div>
  );
};

export default Somos;
