import { NavLink } from "react-router-dom";
import "../Nav/Nav.css";

export default function Nav() {
  return (
    <>
      <NavLink to="/" exact activeClassName="current">
        Home
      </NavLink>
      <NavLink to="/produtos" exact activeClassName="current">
        Produtos
      </NavLink>
      <NavLink to="/sobre" activeClassName="current">
        Sobre
      </NavLink>
      <NavLink to="/carrinho" activeClassName="current">
        Pedidos
      </NavLink>
    </>
  );
}
