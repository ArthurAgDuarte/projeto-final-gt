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

            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-twitter"></i>

            </div>
          </div>


            <div className="info1">
              <ul>
                <h3>Informação</h3>
                <li>Sobre</li>
                <li>Trabalhe conosco</li>
                <li>Segurança</li>
                <li>Carrinho</li>
                <li>Blog</li>
                <li>Meus Produtos</li>
                {/* <li><Link to = "/"></Link></li>
              <li><Link to = "/"></Link></li>
              <li><Link to = "/"></Link></li>
              <li><Link to = "/"></Link></li>
              <li><Link to = "/"></Link></li>
              <li><Link to = "/"></Link></li> */}
              </ul>
            </div>
            

            <div className="info2">
              <ul>
                <h3>Categorias</h3>
                <li>Camisas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Fones</li>
                <li>Tênis</li>
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
