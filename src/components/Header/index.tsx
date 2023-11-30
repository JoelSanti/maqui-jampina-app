import { useState } from 'react'
import {
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faAngleRight, faEnvelope, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import logox from "../../assets/logo.png";

const Header = () => {

  const [boton, botonExtender] = useState(false);

  const onclickBotonExtender = () => {
    if (boton) {
      botonExtender(false)
    } else {
      botonExtender(true)
    }
  }

  return (
    <>

      <footer className="z-30">


        <div className="block bg-white

        md:justify-between md:bg-white md:max-w-7xl md:mx-auto md:my-7

        lg:flex lg:justify-between lg:bg-white lg:max-w-7xl lg:mx-auto lg:my-7">

          <div className="
              text-center my-4 md:my-10
              lg:text-center lg:ml-24 lg:my-4 lg:mx-2
              ">
            <img src={logox}
              className="w-40 mx-auto lg:mx-0"></img>
          </div>

          <div className="block

           md:flex md:space-x-4
           lg:flex lg:space-x-7
           ">



            <div className="block py-6

              md:flex md:space-x-3 md:shadow-lef md:px-5
              lg:flex lg:space-x-3 lg:shadow-lef lg:px-5
              ">

              <div className="
                mx-auto
                border-2 border-teal-400 hover:bg-teal-400 rounded-full h-12 w-12  flex items-center text-teal-400 hover:text-white

                md:border-2 md:border-teal-400 md:hover:bg-teal-400 md:rounded-full md:h-12 md:w-12  md:flex md:items-center md:text-teal-400 md:hover:text-white">
                <FontAwesomeIcon icon={faMapMarkerAlt} className=" mx-auto " />
              </div>
              <div className="block text-center">
                <span className="block  md:flex">Direción:</span>
                <span className="block  md:flex text-gray-500">Jr. 10 de Octubre 136 - Amarilis</span>
              </div>

            </div>


            <div className="block py-6  md:flex md:space-x-3 md:shadow-lef md:px-5">
              <a href="mailto:Maquijampina@gmail.com">
                <div className="
             mx-auto
             border-2 border-teal-400 hover:bg-teal-400 rounded-full h-12 w-12  flex items-center text-teal-400 hover:text-white

             md:border-2 md:border-teal-400 md:hover:bg-teal-400 md:rounded-full md:h-12 md:w-12  md:flex md:items-center md:text-teal-400 md:hover:text-white">

                  <FontAwesomeIcon icon={faEnvelope} className="mx-auto" />


                </div>
              </a>
              <div className="block text-center">
                <span className="block  md:flex">Email:</span>
                <span className="block  md:flex text-gray-500"><a href="mailto:Maquijampina@gmail.com">Maquijampina@gmail.com</a></span>
              </div>

            </div>

            <div className="block py-6  md:flex md:space-x-3 ">
              <a href="tel:+51 959 358 244">
                <div className="
             mx-auto
             border-2 border-teal-400 hover:bg-teal-400 rounded-full h-12 w-12  flex items-center text-teal-400 hover:text-white

             md:border-2 md:border-teal-400 md:hover:bg-teal-400 md:rounded-full md:h-12 md:w-12  md:flex md:items-center md:text-teal-400 md:hover:text-white">

                  <FontAwesomeIcon icon={faPhoneVolume} className="mx-auto" />


                </div>
              </a>
              <div className="block text-center">
                <span className="block  md:flex">Teléfono:</span>
                <a href="tel:+51 959 358 244" className="block  md:flex text-gray-500"> <span className=" ">+51 959 358 244</span></a>
              </div>

            </div>

          </div>


        </div>


      </footer>

      <div className="
shadow-md
w-12/12 mx-auto  bg-teal-400 h-20 z-40 sticky top-0

md:sticky md:top-0 md:w-10/12 md:mx-auto  md:bg-teal-400 md:h-20 md:z-40">

        <div className="flex justify-between">


          <nav className="hidden
  md:flex
  md:text-white md:space-x-10 md:px-10 md:py-6
  ">
            <Link to={"/"}
              className="

      boton-login
      pl-3
      md:text-sm lg:text-base
      md:pl-2 lg:pl-0

      md:my-auto
      ">
              INICIO
            </Link>

            <Link to={"/Nosotros"}
              className="boton-login
      pl-3
      md:text-sm lg:text-base
      md:pl-2 lg:pl-0
      md:my-auto
      ">
              NOSOTROS
            </Link>

            <Link to={"/Servicios"}
              className=" pl-3
      md:text-sm lg:text-base
      md:pl-2 lg:pl-0
      md:my-auto
      ">
              SERVICIOS
            </Link>

            <Link to={"/Contactenos"}
              className=" pl-3
      md:text-sm lg:text-base
      md:pl-2 lg:pl-0
      md:my-auto
      ">
              CONTÁCTENOS
            </Link>

          </nav>

          <nav className="space-x-4 mx-10 py-6">

            <a href="https://www.facebook.com/ManosQueCuranPeru"><FontAwesomeIcon icon={faFacebookF} className=" text-white mx-auto" /></a>
            <a href="https://api.whatsapp.com/send?phone=+51 959 358 244"><FontAwesomeIcon icon={faWhatsapp} className=" text-white mx-auto" /></a>
            <a href="https://www.instagram.com/maquijampina/?hl=es-la"><FontAwesomeIcon icon={faInstagram} className=" text-white mx-auto" /></a>

          </nav>

          <FontAwesomeIcon onClick={onclickBotonExtender} icon={faAlignJustify} className=" text-white mr-4 text-2xl my-auto md:hidden hover:text-teal-200" />

        </div>

      </div>


      {
        boton
          ?
          (
            <nav className="
sticky top-20 z-40 bg-white
   text-sm
   md:hidden
  ">
              <Link to={"/"}
                className="
      block
      pt-1
      my-2
      px-2
      shadow-bj

      ">
                <FontAwesomeIcon icon={faAngleRight} className="text-teal-400 mr-4" /> INICIO
              </Link>

              <Link to={"/Nosotros"}
                className="
      block
      my-2
      px-2
      shadow-bj

      ">
                <FontAwesomeIcon icon={faAngleRight} className="text-teal-400 mr-4" /> NOSOTROS
              </Link>

              <Link to={"/Servicios"}
                className="
      block
      my-2
      px-2
      shadow-bj
      ">
                <FontAwesomeIcon icon={faAngleRight} className="text-teal-400 mr-4" /> SERVICIOS
              </Link>

              <Link to={"/Contactenos"}
                className="
      block
      pb-1
      px-2
      shadow-bj

      ">
                <FontAwesomeIcon icon={faAngleRight} className="text-teal-400 mr-4" />CONTÁCTENOS
              </Link>

            </nav>
          )
          : null
      }

    </>
  );
}

export default Header;
