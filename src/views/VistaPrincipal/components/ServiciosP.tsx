import { faHandHoldingMedical, faMoneyBillWave, faPuzzlePiece, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagenfisioterapeuta from '../../../assets/fisioterapeuta.jpg'

const ServiciosP = () => {
    return (

        <div className="pt-6">

              <div className="text-center my-4">
                   <h1 className="text-xl font-bold

                   md:text-xl md:font-bold

                   lg:text-2xl lg:font-bold

                   ">TE OFRECEMOS LO MEJOR</h1>

                 <div className="flex space-x-4 justify-center">
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                     <div className="bg-teal-400 w-12 h-0.5 my-2"></div>
                 </div>
                   <p className="text-sm text-gray-400 md:text-base">Siempre pensando en nuestros clientes ofrecemos servicios tomando en cuenta su comodidad.</p>
              </div>

              <div className="
              my-8 mx-8

              lg:justify-between lg:space-x-3 lg:flex lg:mx-28 lg:my-14
              ">

                  <div className="


                  lg:w-1/3 lg:pr-6

                  ">

                      <div className=" block pb-8 md:pb-2 text-center md:pt-2">
                          <FontAwesomeIcon icon={faHandHoldingMedical} className="text-5xl my-4 hover:text-teal-500"/>
                          <h1 className="font-bold text-base text-center md:text-lg hover:text-teal-500">ATENCIÓN PERSONALIZADA</h1>
                          <p className="text-gray-500 text-center my-4">Ofrecemos una cuidada atención a nuestros pacientes. Coméntanos tu problema y
                          realizaremos un plan de tratamiento totalmente personalizado y ajustado a tus necesidades. El objetivo: que
                          te recuperes lo antes posible y con los mejores resultados.</p>
                      </div>

                      <div className="block pb-8 md:pb-2 text-center md:pt-0">
                      <FontAwesomeIcon icon={faUserNurse} className="text-5xl my-4 hover:text-teal-500"/>
                          <h1 className="font-bold text-base text-center md:text-lg hover:text-teal-500">SERVICIO PROFESIONAL Y CUALIFICADO</h1>
                          <p className="text-gray-500 text-center my-4">Todos nuestros profesionales son titulados , debidamente colegiados
                           y especializados en diversas terapias. Maqui Jampina es un Centro autorizado por el Departament de Salud.</p>
                      </div>


                  </div>

                  <img src={imagenfisioterapeuta} className=" py-8

                  md:my-6  md:w-8/12  md:mx-auto

                  lg:my-10  lg:block lg:w-1/3

                  "></img>

                  <div className="


                  lg:w-1/3 lg:pr-6

                  ">

                      <div className="block pb-8 md:pb-2 text-center md:pt-2">
                      <FontAwesomeIcon icon={faPuzzlePiece} className="text-5xl my-4 hover:text-teal-500"/>
                          <h1 className="font-bold text-base text-center md:text-lg hover:text-teal-500">CENTRO MULTIDISCIPLINARIO</h1>
                          <p className="text-gray-500 text-center my-4">Te ofrecemos distintos tipos de terapias y tratamientos, Te aconsejamos para que realices la terapia más efectiva y
                          adecuada a tu caso particular.</p>
                      </div>

                      <div className="block pb-8 text-center md:py-6">
                      <FontAwesomeIcon icon={faMoneyBillWave} className="text-5xl my-4 hover:text-teal-500"/>
                          <h1 className="font-bold text-base text-center md:text-lg hover:text-teal-500">PRECIO A TU ALCANCE</h1>
                          <p className="text-gray-500 text-center my-4">Te ofrecemos tarifas muy competitivas. Obtén un servicio y tratamiento 100% profesional
                          a un precio 100% asequible.</p>
                      </div>



                  </div>

              </div>


        </div>
     );
}

export default ServiciosP;
