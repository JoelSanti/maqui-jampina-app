import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListaServicios from '../../components/ServiciosComponents/ListaServicios';
import ServicioEstetico from '../../components/ServiciosComponents/SericioEstetico';



const Servicios = () => {
    return ( 
        <>
        <Header />
        <div className="w-full  relative -top-10 z-30 h-60" id="imgpri">  </div>
        
        <ListaServicios />
        <ServicioEstetico/>
        <Footer />
        </>
     );
}
 
export default Servicios;
