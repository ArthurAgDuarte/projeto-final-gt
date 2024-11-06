import { Link } from "react-router-dom";
import '../Footer/Footer.css';
import Logo from "../Logo/Logo";
// import 'boxicons';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="contener">
        <div className="info">

          <div className="Logo">
            <Logo cor = "white"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>


            <div className="rede-sociais">
            <Link to = "https://www.instagram.com/digitalcollegebr/" className="i" target="_blank"><i className="bx bxl-instagram"></i></Link>
            <Link to = "https://www.facebook.com/digitalcollegebr" className="i" target="_blank"> <i className="bx bxl-facebook"></i></Link>
            <Link to = "https://twitter.com/eaicollegers" className="i" target="_blank"><i className="bx bxl-twitter"></i></Link>
           
           
            

            </div>
          </div>


            <div className="info1">
              <ul>
                <h3>Informação</h3>
                <li><Link to = "/sobre" className="link">Sobre</Link></li>
                <li><Link to = "/" className="link">Trabalhe conosco</Link></li>
                <li><Link to = "/" className="link">Segurança</Link></li>
                <li><Link to = "/carrinho" className="link">Carrinho</Link></li>
                <li><Link to = "/" className="link">Blog</Link></li>
                <li><Link to = "/meuspedidos" className="link">Pedidos</Link></li>
              </ul>
            </div>
            

            <div className="info2">
              <ul>
                <h3>Categorias</h3>
                <li><Link to = "/produtos/camisas" className="link">Camisas</Link></li>
                <li><Link to = "/produtos/calcas" className="link">Calças</Link></li>
                <li><Link to = "/produtos/bones" className="link">Bonés</Link></li>
                <li><Link to = "/produtos/fones" className="link">Fones</Link></li>
                <li><Link to = "/produtos/tenis" className="link">Tênis</Link></li>
              </ul>
            </div>
            <div className="info3">
              <ul>
                <h3>Contato</h3>
                <li>
                  Av. Washington Soares, 3663 - Edson Queiroz, Fortaleza - CE, 60811-341
                </li>
                <li>(85)3051-3411</li>
              </ul>
            </div>
          </div>

        </div>


       

        <div className="Digital">
        <hr />
          <p>&copy; 2022 Digital College</p>
        </div>
      </footer>
    </>
  );
}
