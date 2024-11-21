
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Carrossel from '../Components/Carrossel/Carrossel.jsx';
import HighlightButtons from '../Components/highlightButtons/highlightButtons.jsx';
import Destaque from '../Components/DestaqueImg/Destaque.jsx';
import ProductListing from '../Components/ProductListing/ProductListing.jsx';
import Jordan from '../Components/Jordan/Jordan.jsx';


export default function Home(){
    return(
    <>
       <Header/>
       <main>
        {/* <h1>fazer carrossel</h1> */}
        <Carrossel/>
        <Destaque/>
        <HighlightButtons/>
        <div className="container-destaque">
            <h2 className="destaqueprod">Produtos em destaque</h2>
            <ProductListing limit={8} rows={2} columns={4}/>
        </div>
        <Jordan/>
       </main>
       <Footer/>
    </>
    );
}
