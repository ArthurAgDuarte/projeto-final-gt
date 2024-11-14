import "../Buybox/Buybox.css"
import propTypes from "prop-types";

export default function Buybox({produto}){
    return(
        <>
        <section className="meu-carrinho">
            <div className="carrinho">
                <div className="titulo">
                    <p>Meu Carrinho</p>
                    <div className="subtitulo">
                        <p>Quantidade</p>
                        <p>Unitário</p>
                        <p>Valor</p>
                    </div>
                </div>

                <div className="linha"></div>

                
            </div>
            <article>
                <div className="sobreproduto">
                <img className="product-image" src={produto.image} alt="imagem-produto"/>
                </div>
            </article>
        </section>
        </>
    );
}

Buybox.propTypes = {
    produto: propTypes.shape({
      image: propTypes.string.isRequired,
      nome: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      priceDiscont: propTypes.number.isRequired,
      categoria: propTypes.string.isRequired,
    }).isRequired,
  };
  