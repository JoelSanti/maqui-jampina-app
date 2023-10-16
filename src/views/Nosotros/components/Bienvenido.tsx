import bienvenido from '../../../assets/bienvenido.jpg'

const Bienvenido = () => {
    return (
        <div className="
        
        w-full p-10 text-center space-y-2

        lg:w-full lg:p-20 lg:text-center lg:space-y-2
        
        ">
            <h1 className="text-lg md:text-2xl text-center font-bold">BIENVENIDO A MAQUI JAMPINA</h1>
            <div className="flex space-x-4 justify-center">
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                </div>
            <p className="w-10/12 text-center m-auto text-gray-500 text-sm md:text-base">En este apartado conocerás un poco más acerca de nosotros.</p>
            <img src={bienvenido} className="m-auto"></img>
        </div>
      );
}
 
export default Bienvenido;
