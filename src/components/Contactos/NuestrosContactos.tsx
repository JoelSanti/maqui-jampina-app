import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
const NuestrosContactos = () => {
  return (
    <div className="pt-16">
      <h1 className="text-xl lg:text-2xl text-center font-bold">CONTÁCTENOS</h1>
      <div className="flex space-x-4 justify-center">
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
      </div>
      <p className="w-10/12 text-center mx-auto mb-12 mt-4 text-gray-500">
        Le esperamos de Lunes a Sabado , de 7:00 am a 7:00pm.
      </p>

    
          <div className=" flex  py-20  bg-teal-400 text-center px-auto">
         
            
                 <div className="mx-auto space-y-11 md:flex md:space-y-0 md:space-x-8 lg:space-y-0 lg:mx-auto  lg:flex lg:space-x-11">
                    <div className="bg-white w-56 h-52 text-center py-16">
                      <FontAwesomeIcon icon={faPhoneVolume} className="text-4xl text-teal-400 "/>
                      <h1>Numeros Telefonicos</h1>
                      <a href="tel:+51 959 358 244"> <h1>+51 959 358 244</h1></a>
                    </div>
                    
                   <div className="bg-white w-56 h-52 text-center py-16">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-teal-400 " />
                    <h1>Hubicacion</h1>
                    <h1 className="w-36 mx-auto">Jr. 9 de Octubre 136 - Amarilis</h1>
                   </div>
                    
                   <div className="bg-white w-56 h-52 text-center py-16">
                      <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-teal-400 "/>
                      <h1>Correo Electronico</h1>
                      <a href="mailto:Maquijampina@gmail.com"><h1>Maquijampina@gmail.com</h1></a>
                   </div>
                 </div>
          
     </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.0328483988583!2d-76.24346519333201!3d-9.938656379790832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e60e6e9849%3A0x69ec4d46efd5c19!2sCa.%201%2C%20Amarilis!5e0!3m2!1ses-419!2spe!4v1627433804407!5m2!1ses-419!2spe"
        
        className="w-full h-96"
      ></iframe>
    </div>
  );
};

export default NuestrosContactos;
