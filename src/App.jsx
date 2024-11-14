// Importa o BrowserRouter e chama de Router (alias == apelido)
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import FormularioCompra from "./Components/Formulario-compra/FormularioCompra";


export default function App() {
  return (
    <Router>
        <AppRoutes/>
        <FormularioCompra/>
    </Router>
  );
}
