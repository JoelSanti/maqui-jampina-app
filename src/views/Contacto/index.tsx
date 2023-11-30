
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NuestrosContactos from '../../components/Contactos/NuestrosContactos';
import PageTitle from '../../components/Extras/PageTitle';

const Contacto = () => {
    return (

        <>
        <PageTitle title={"Contacto"}/>
        <Header />
        <div className="

        w-full  relative -top-10 z-30 h-36
        lg:w-full  lg:relative lg:-top-10 lg:z-30 lg:h-60
        " id="imgpri">  </div>


        <NuestrosContactos />
        <Footer />
        </>

     );
}

export default Contacto;
