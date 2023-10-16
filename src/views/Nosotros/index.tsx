import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Bienvenido from './components/Bienvenido';
import Somos from './components//Somos';

const Nosotros = () => {
    return ( 
        <>
        <Header />
        <div className="
        
        w-full  relative -top-10 z-30 h-36
        lg:w-full  lg:relative lg:-top-10 lg:z-30 lg:h-60
        " id="imgpri">  </div>
          
        <Bienvenido />
        <Somos />
        <Footer />
        </>
    );
}
 
export default Nosotros;
