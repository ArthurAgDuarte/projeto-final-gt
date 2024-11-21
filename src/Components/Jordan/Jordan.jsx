import { Link } from "react-router-dom";
import jordan from "../../assets/jordan.svg"
import "../Jordan/Jordan.css"


export default function Jordan(){
    return(
        <>
        <div className="container-jordan">
            <div className="jordanimg">
                <img src={jordan} alt="Air Jordan edição de colecionador" />
            </div>
            <div className="sobrejordan">
                <span className="ofertaesp">
                    Oferta especial
                </span>
                <h1 className="airjordan">Air Jordan edição de colecionador</h1>
                <p className="lorem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta molestiae rerum ducimus dicta similique aperiam doloribus vitae eligendi nostrum optio, temporibus quaerat aut molestias. Labore corrupti maxime eos tenetur!
                </p>
                <Link to="/produtos">
                <button className="ofertabut">
                    Ver Oferta
                </button>
                </Link>
                
            </div>
        </div>
        </>
    );
}
