import { Link } from "react-router-dom";
import camisa from "../../assets/camisadestaque.svg"
import fone from "../../assets/fonedestaque.svg"
import sapadidas from "../../assets/adidasdestaque.svg"
import "../DestaqueImg/Destaque.css"


export default function Destaque(){
    return(
        <>
        <div className="container-destaque">
            <h2 className="destaqueprod">Produtos em destaque</h2>
            
            <div className="imgdestaque">
                <div className="supreme">
                    <Link to="produtos">
                    <img src={camisa} alt="Supreme em promoção" className="supremecamisa"  />
                    </Link>
                </div>
                <div className="adidas">
                    <Link to="produtos">
                    <img src={sapadidas} alt="Adidas em promoção" className="adidasdestaque"  />
                    </Link>
                </div>
                <div className="fone">
                    <Link to="produtos">
                    <img src={fone} alt="Fone em promoção" className="fonedestaque"  />
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}


