import { BrowserRouter, Routes, Switch, Route} from "react-router-dom";
import Veterinario from "./components/Veterinario.jsx";
import Login from "./components/Login.jsx";
import BuscarCliente from './components/BuscarCliente.jsx';
import RegistrarConsulta from './components/RegistrarConsulta.jsx';
import HistorialConsulta from './components/HistorialConsulta';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/veterinario" element={<Veterinario></Veterinario>}></Route>
        <Route path="/cliente" element={<BuscarCliente/>}></Route>
        <Route path="/consulta" element={<RegistrarConsulta></RegistrarConsulta>}></Route>
        <Route path="/historialconsulta" element={<HistorialConsulta></HistorialConsulta>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
