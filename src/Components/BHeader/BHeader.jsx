import { Link } from "react-router-dom";
import "../BHeader/BHeader.css"
import minhaImagem from "../../assets/Cart.svg"


export default function BHeader() {
    return(
        <>
            <Link to = "/cadastro" className="cadastro">Cadastre-se</Link>
            <Link to = "/login">
                <button className="entrar">Entrar</button>
            </Link>
            {/* <img src={minhaImagem} alt="" /> */}
            
            <Link to = "/carrinho">
                <button className="bcarrinho"><img src={minhaImagem} alt="" /></button>
            </Link>
        </>
    );
}