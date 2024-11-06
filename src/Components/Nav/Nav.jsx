import { NavLink } from "react-router-dom";
import "../Nav/Nav.css";

export default function Nav() {
  return (
    <>
      <div className="navegador">
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/produtos" >
          Produtos
        </NavLink>
        <NavLink to="/sobre" >
          Sobre
        </NavLink>
        <NavLink to="/meuspedidos" >
          Pedidos
        </NavLink>
      </div>
    </>
  );
}
