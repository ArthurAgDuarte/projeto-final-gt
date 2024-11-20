
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Login from '../Components/Login/Login.jsx';


export default function Home(){
    return(
    <>
       <Header/>
       <main>
        <Login/>
       </main>
       <Footer/>
    </>
    );
}