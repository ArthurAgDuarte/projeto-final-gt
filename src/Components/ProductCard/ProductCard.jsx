import React from "react";
import "./ProductCard.css"
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

export default function ProductCard({ produto }) {
  const navigate = useNavigate();
  const handleClick = () => navigate("/produto");

  return (
    <div className="product-card-container" onClick={handleClick}>
   <figure className="figure-container">
  <span className="product-discount">30% OFF</span>
  <img
    className="product-image"
    src={produto.image}
    alt="imagem-produto"
  />
</figure>
<section className="product-container-informations">
  <h2>{produto.Categoria}</h2>
  <h3>{produto.nome}</h3>

  <p className="product-container-information-paragraph">
    <span>${produto.price}</span>
    <span>${produto.priceDiscont}</span>
  </p>
</section>
    </div>
  );
}

ProductCard.propTypes = {
  produto: propTypes.shape({
    image: propTypes.string.isRequired,
    nome: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    priceDiscont: propTypes.number.isRequired,
    categoria: propTypes.string.isRequired,
  }).isRequired,
};