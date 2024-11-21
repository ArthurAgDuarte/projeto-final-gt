import "./ProductDetails.css";
import { ProductOptions } from "../ProductOptions/ProductOptions";
import React, { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import Star from "../../assets/Path.svg";
import Star_ from "../../assets/Star 01.svg";
import StarWhite from "../../assets/star-white.svg";



const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://6721a5a698bbb4d93ca91b8c.mockapi.io/ApiTeste/teste/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar o produto');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  const handleBuyClick = () => {
    navigate('/carrinho');
  };

  const backToProductsLP = () => {
    navigate('/produtos');
  };

  return (

    <div className="details-container">
      <div className="path"><h3>Produtos / Tênis / {product.nome}</h3></div>
      {/* Coluna da Imagem */}
      <div className="details-image">
        <img src={product.image}/>
      </div>

      {/* Coluna dos Detalhes */}
      <div className="details-content">
        <div className="details-header">
          <h1>{product.nome}</h1>
          <p>Casual | {product.id}</p>

          <div className="rating">
            <img src={Star_} alt="Star" />
            <img src={Star_} alt="Star" />
            <img src={Star_} alt="Star" />
            <img src={Star_} alt="Star" />
            <img src={Star} alt="Star" />
          
          <div className="star-class">
            <span>
              <p>4.8</p>
              <img src={StarWhite} />
            </span>
          </div>
          <h3 className="avaliacao">(90 avaliações)</h3>
        </div>
        </div>

        <main className="details-main">
          <p className="price">
            <span>R$ {product.PrecoComDesconto}</span>
            <span>{product.price}</span>
          </p>
          <h3>Descrição do produto</h3>
          <p>{product.Descricao}</p>
        </main>

        <div className="details-footer">
          {/* Container das opções e botão */}
          <div className="options-and-buy-button">
            <ProductOptions />
            <button className="buy-button" onClick={handleBuyClick}>Comprar</button>
          </div>
        </div>
      </div>

      <section className="relacionados">
        <h2>Produtos Relacionados</h2>
        <button className="verTodos" onClick={backToProductsLP}>Ver Todos →</button>
      </section>
    </div>
  );
}
export default ProductDetails;


