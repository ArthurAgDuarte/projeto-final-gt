
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Carrossel from '../Components/Carrossel/Carrossel.jsx';


export default function Home(){
    return(
    <>
       <Header/>
       <main>
        {/* <h1>fazer carrossel</h1> */}
        <Carrossel/>
       </main>
       <Footer/>
    </>
    );
}