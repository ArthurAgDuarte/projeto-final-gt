import minhaImagem from '../assets/Group.svg';
import './Logo.css'

export default function Logo(){
    return(
        <>
        <div className='logo'>
        <img src={minhaImagem} alt="" /><h1>Drip Store</h1>
        </div>
        </>
    );
}