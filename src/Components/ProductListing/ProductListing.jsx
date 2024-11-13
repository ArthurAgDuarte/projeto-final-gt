import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Substitua pela URL da sua API mock
    fetch('https://6721a5a698bbb4d93ca91b8c.mockapi.io/ApiTeste/teste')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;