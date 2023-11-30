import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";
import Nosotros from "./views/Nosotros";
import Servicios from "./views/Servicios";
import Contacto from "./views/Contacto";
import PageTitle from "./components/Extras/PageTitle";


function App() {

  return (
    <>
    <PageTitle title={"Inicio"}/>
 <BrowserRouter>
          <Routes>
            <Route path="/" Component={VistaPrincipal}  name = "Inicio" />
            <Route path="/Nosotros" Component={Nosotros} name = "Nosotros"  />
            <Route path="/Servicios" Component={Servicios} />
            <Route path="/Contactenos" Component={Contacto} />
          </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
