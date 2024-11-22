import { Link } from "react-router-dom";
import "../BHeader/BHeader.css"
import minhaImagem from "../../assets/Cart.svg"
import { useEffect, useState } from "react";


export default function BHeader() {
    // const [logado, setLogado] = useState(false)
    // const{usuario, setUsuario} = useState('')

    //     useEffect(() =>{
    //         const user =  JSON.parse(localStorage.getItem('user'));
    //         if(user){
    //             setLogado(true)
    //             setUsuario(user.name)
    //         }
    //     }, [])

    //     const handleLogout =() =>{
    //         localStorage.removeItem('user')
    //         setLogado(false)
    //         setUsuario('')
    //         window.locate.href = '/'
    //     }


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