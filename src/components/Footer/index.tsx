import logox from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,

  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-500

    md:h-96 md:flex md:justify-between md:space-x-6 md:px-6

    lg:h-96 lg:flex lg:justify-between lg:space-x-8 py-20 lg:px-40

    ">
      <div className="mx-10 text-gray-100">
        <div className="flex">
          <img src={logox} className="md:w-40 h-20 mx-auto mb-4"></img>

        </div>

        <p className="md:w-80 text-center md:text-center">
          Maqui Jmapina es un Centro de Fisioterapia y Rehabilitación
          multidisciplinar, situado en el Jr. 9 de Octubre 136 - Amarilis.
          Ponemos a tu disposición un amplio abanico de fisioterapias.
        </p>
      </div>

      <div className="mt-24 md:mt-0 md:my-10 mx-10 text-center md:text-left text-gray-100 space-y-4 block">
        <h1 className="font-bold">CONTÁCTENOS</h1>

        <div className="block space-y-5">
          <div className="">
            <FontAwesomeIcon icon={faPhoneVolume} className="mx-auto md:mx-0 block"/>
            <a href="tel:+51 959 358 244"> <h1>+51 959 358 244</h1></a>
          </div>



         <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-auto md:mx-0  block" />
          <h1>Jr. 9 de Octubre 136 - Amarilis</h1>
         </div>

         <div>
            <FontAwesomeIcon icon={faEnvelope} className="mx-auto md:mx-0 block"/>
            <a href="mailto:Maquijampina@gmail.com"><h1>Maquijampina@gmail.com</h1></a>
         </div>
        </div>

        <nav className="space-x-4 mx-10 py-6">
        <a href="https://www.facebook.com/ManosQueCuranPeru"><FontAwesomeIcon icon={faFacebookF} className=" text-white mx-auto md:mx-0" /></a>
        <a href="https://api.whatsapp.com/send?phone=+51 959 358 244"> <FontAwesomeIcon icon={faWhatsapp} className=" text-white mx-auto md:mx-0" /></a>
          <a href="https://www.instagram.com/maquijampina/?hl=es-la"> <FontAwesomeIcon icon={faInstagram} className=" text-white mx-auto md:mx-0" /></a>
        </nav>
      </div>

    </footer>
  );
};

export default Footer;
