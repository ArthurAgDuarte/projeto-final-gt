import { Link } from "react-router-dom";
import img from "../assets/logo.png";
import facebook1 from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import './Footer.css';
import 'boxicons';

export default function Footer() {
    return(
     <>
<footer>

    <div className="Logo">
       <img src={img} alt="Teste"></img>
       <h1>Digital Store</h1>
    </div>


    
{/*       
    <div className="Store">
   
    </div> */}

   <div className="levy">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magnam? Itaque expedita reprehenderit molestias voluptatibus libero nihil laboriosam error! Qui sapiente et ullam minima numquam doloribus? Laudantium suscipit sit dolores?</p>

       

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
         <ul>
            <h3>Categorias</h3>
            <li>Camisas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Ténis</li>
         </ul>
         <ul>
         <h3>contato</h3>
            <li>
            Av. Washington Soares, 3663 - Edson Queiroz, Fortaleza - CE, 60811-341| <br /> <br />
            (85)3051-3411
            </li>
         </ul>
       
   </div>

     
     
   <div className="rede-sociais">
      
      <img src={facebook1} alt=""></img>
      <img src={instagram} alt=""></img>
      <img src={twitter} alt=""></img>
   
      </div>
     

        <hr />

      <div className="Digital">
        <p>&copy; 2022 Digital College</p>
      </div>
     </footer>
    </>
  );
}
