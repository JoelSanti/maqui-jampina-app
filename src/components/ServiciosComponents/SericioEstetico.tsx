import { DatosSlider } from './components/DatosSlider';
import Slider from './components/Slider';
const ServicioEstetico = () => {
    return ( 
      <div className="h-full">
             <h1 className=" text-lg font-bold lg:text-2xl text-center">SERVICIOS ESTÉTICOS</h1>
      <div className="flex space-x-4 justify-center">
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
      </div>
     <Slider slides={DatosSlider}/>

      </div>

     );
}
 
export default ServicioEstetico;
