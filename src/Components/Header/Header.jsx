import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import "../Header/Header.css"
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <>
            <header>
                {/* <Link to ='/'><Logo cor ="#C92071"/></Link> */}
                <Logo cor ="#C92071"/>
                <Search/>
                <Nav/>
            </header>
        </>
    );
}