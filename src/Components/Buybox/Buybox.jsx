import "../Buybox/Buybox.css"
import PropTypes from "prop-types";
import minhaImagem from "../../assets/tenis.svg"


export function Buybox({produto, key}){
    console.log(produto) ;
    // const img = produto.image
    
    return(
        <>
        <img src={produto.image} alt="" />

        
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
                <img className="product-image" src={produto[0].image} alt="imagem-produto"/>
                <div className="descricaoproduto">
                    <h1 className="nomeproduto">{produto[0].nome}</h1>
                    <h5 className="prod-color">Cor:<p className="type-color"> Vermelho / Branco</p> </h5>
                    <h5 className="prod-size">Tamanho: <p className="type-size">42</p></h5>
                </div>
                </div>

            </article>
        </section>
        </>
    );
}

Buybox.propTypes = {
    produto: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            nome: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            priceDiscont: PropTypes.number.isRequired,
            categoria: PropTypes.string,
        })
    ).isRequired,
};