import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Buybox from '../Components/Buybox/Buybox.jsx';

export default function Carrinho() {
    return (
        <>
            <Header/>
            <h2>Colocar Carrinho</h2>
            <main>
            <Buybox produto= {""} />
            </main>
             <Footer/>
        </>
    );
}
