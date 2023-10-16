import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";
import Nosotros from "./views/Nosotros";
import Servicios from "./views/Servicios";
import Contacto from "./views/Contacto";


function App() {

  return (
    <>
 <BrowserRouter>
          <Routes>
            <Route path="/" Component={VistaPrincipal} />
            <Route path="/Nosotros" Component={Nosotros} />
            <Route path="/Servicios" Component={Servicios} />
            <Route path="/Contactenos" Component={Contacto} />
          </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
