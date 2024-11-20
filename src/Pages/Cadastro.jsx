
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import FormCadastro from '../Components/AppFormulario/FormCadastro.jsx';


export default function Cadastro(){
    return(
    <>
       <Header/>
       <main>
        <FormCadastro/>
       </main>
       <Footer/>
    </>
    );
}