
import React, { useState, useEffect } from "react";
import ProductCard from "./Components/ProductCard/ProductCard"; 
import { BrowserRouter } from "react-router-dom";
import { BuyBox } from "./Components/BuyBox/Buybox";

function App() {
  const [produto, setProduto] = useState(null); 
  const urlAPI = "https://6721a5a698bbb4d93ca91b8c.mockapi.io/ApiTeste/teste";

  
  useEffect(() => {
    fetch(urlAPI)
      .then((resultado) => resultado.json())
      .then((data) => {
        console.log(data); 
        setProduto(data[0]); 
      })
      .catch((erro) => {
        console.error("Erro", erro);
        alert("Não foi possível carregar os dados");
      });
      
  }, []);

  return (
    <BrowserRouter>
    {/* Product Card comentado */}
      {/* <div>
        {produto ? <ProductCard produto={produto} /> : <p>Carregando...</p>}
      </div> */}
      {/*  */}
      
      <BuyBox />
    </BrowserRouter>
  );
}

export default App;