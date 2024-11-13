import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import "../Header/Header.css"
import { Link } from 'react-router-dom';
import BHeader from "../BHeader/BHeader";


export default function Header(){
    return(
        <>
            <header>
                
                <Logo cor ="#C92071"/>
                <Search/>
                <BHeader/>
                <Nav/>
            </header>
        </>
    );
}