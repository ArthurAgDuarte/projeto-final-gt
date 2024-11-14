

import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductListing = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
  
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://6721a5a698bbb4d93ca91b8c.mockapi.io/ApiTeste/teste'); 
        if (!response.ok) {
          throw new Error('Erro ao buscar os produtos');
        }
        const data = await response.json();
        setProducts(data); 
      } catch (err) {
        setError(err.message);  
      } finally {
        setLoading(false);  
      }
    };

    fetchProducts();  
  }, []); 

 
  if (loading) {
    return <div>Carregando...</div>;
  }

 
  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="product-listing">
      <h1>Lista de Produtos</h1>
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} produto={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;



// import React from "react";
// import "./style.css";
// import ProductCard from "../ProductCard/ProductCard";

// const ProductListing = () => {
//     return (
//         <div className="productListing">
//             {ProductListing.map((product) => (
//                 <ProductCard
//                     key={product.id}
//                     img={product.image}
//                     descontooff={product.priceDiscount}
//                     title={product.Categoria}
//                     nomeProduto={product.nome}
//                     preco={product.PrecoComDesconto}
//                     precoDesconto={product.priceDiscont} />
                    
                    
//                     ))

//             }

//       </div>
//     );
//   };
//   export default ProductListing;

// import "./style.css";
// import ProductCard from "../../components/ProductCard/App";
// import img from "../../assets/tenis.png";

// const product = {
//   img: img,
//   descontooff: "30% OFF",
//   title: "Tênis",
//   nomeproduto: "K-Swiss V8 - Masculino",
//   preco: "$200",
//   precodesconto: "$100",
// };

// export default function ProductListing() {
//   return (
//     <div className="productListing">
//       {[...Array(8)].map((_, index) => (
//         <ProductCard
//           key={index}
//           img={product.img}
//           descontooff={product.descontooff}
//           title={product.title}
//           nomeProduto={product.nomeproduto}
//           preco={product.preco}
//           precoDesconto={product.precodesconto}
//         />
//       ))}
//     </div>
//   );
// }