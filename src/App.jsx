

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import React from 'react';
import FormCadastro from "./Components/AppFormulario/FormCadastro";

export default function App() {
  return (
    <Router>
        <AppRoutes/>
        <FormCadastro/>
    </Router>
  );
}
