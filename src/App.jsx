import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import LoginPage from "./Components/Login/Login";

export default function App() {
  return (

    <>
    
    <Router>
        <AppRoutes/>
    </Router>
    </>
  );
}
