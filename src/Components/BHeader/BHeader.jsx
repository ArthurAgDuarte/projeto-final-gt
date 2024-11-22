import { Link } from "react-router-dom";
import "../BHeader/BHeader.css"
import minhaImagem from "../../assets/Cart.svg"
import { useEffect, useState } from "react";


export default function BHeader() {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            try {
                const userData = JSON.parse(user); 
                setLogado(true);
                setUsuario(userData); 
            } catch (error) {
                console.error('Erro ao analisar o JSON do usuário:', error);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setLogado(false);
        setUsuario('');
        window.location.href = '/'; 
    };
    let conteudo;
    if (logado === true) {
        conteudo =
        <>
                <Link to= "/meuperfil">
                Bem-vindo {usuario.email}!</Link>
                <button className= "entrar" onClick={handleLogout}>
                    Sair
                </button>
        </>
    } else {
        conteudo =
        <><Link to = "/cadastro" className="cadastro">Cadastre-se</Link>
                <Link to = "/login">
                    <button className="entrar">Entrar</button>
                </Link></>
        
    }

    return(
        <>
            
        
            
               {conteudo}
                
                <Link to = "/carrinho">
                    <button className="bcarrinho"><img src={minhaImagem} alt="" /></button>
                </Link>
                
                
               
                
                
            
        </>
    );
}
