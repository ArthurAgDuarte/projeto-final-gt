import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import minhaImagem from "../assets/404.png"
export default function NotFound() {
    return (
        <>
            <Header/>
            <img src={minhaImagem} alt="" />
             <Footer/>
        </>
    );
}
