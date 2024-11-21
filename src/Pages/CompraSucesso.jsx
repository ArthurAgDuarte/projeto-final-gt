
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
// import FormCadastro from '../Components/AppFormulario/FormCadastro.jsx';
import FormularioCompra from '../Components/Formulario-compra/FormularioCompra.jsx';


export default function Compra(){
    return(
    <>
       <Header/>
       <main>
        <FormularioCompra/>
       </main>
       <Footer/>
    </>
    );
}
