import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import {Buybox} from '../Components/Buybox/Buybox.jsx';
import { useEffect, useState } from 'react';


export function Carrinho() {
    const [products, setProducts] = useState();;
    useEffect( () => {
        // Função para buscar dados da API
        const fetchProducts = async () => {
          try {
          const response =  await fetch('https://6721a5a698bbb4d93ca91b8c.mockapi.io/ApiTeste/teste')
           const json = await response.json()
           setProducts(json)
            // const data = await response.json();
            // setProducts(data);
            
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    };
    
    fetchProducts();
}, []);   
console.log(products);
  
     return (
        <>
            <Header/>
            <h2>Colocar Carrinho</h2>
            <main>
            { products && <Buybox  key={products.id} produto={products} />}
            </main>
             <Footer/>
        </>
    );
}
