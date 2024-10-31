import { Link } from "react-router-dom";
import img from "../assets/Logo2.png";
import facebook1 from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import './Footer.css';
import 'boxicons';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="contener">
          <div className="Logo">
            <img src={img} alt="Teste"></img>
            <div className="paragrafo"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet..</p></div>


            <div className="rede-sociais">

              <img src={facebook1} alt=""></img>
              <img src={instagram} alt=""></img>
              <img src={twitter} alt=""></img>

            </div>
          </div>


          <div className="info">
            <ul>
              <h3>informação</h3>
              <li>Sobre Drip Store</li>
              <li>Trabalhe conosco</li>
              <li>Segurança</li>
              <li>Wishist</li>
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

          <div className="cate">
            <ul>
              <h3>Categorias</h3>
              <li>Camisas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Ténis</li>
            </ul>
          </div>

          <div className="goku">
            <ul>
              <h3>contato</h3>
              <li>
                Av. Washington Soares, 3663 - Edson Queiroz, Fortaleza - CE, 60811-341| <br /> <br />
                (85)3051-3411
              </li>
            </ul>
          </div>

        </div>


        <hr />

        <div className="Digital">
          <p>&copy; 2022 Digital College</p>
        </div>
      </footer>
    </>
  );
}
