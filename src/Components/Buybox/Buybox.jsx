import "../Buybox/Buybox.css"
import PropTypes from "prop-types";
import imgR from "../../assets/retira.svg"
import { useState } from "react";
import imgA from "../../assets/adiciona.svg"
import { Link } from 'react-router-dom';




export function Buybox({produto, key}){
    console.log(produto) ;
    const [contador, setContador] = useState(1)
    const addCarrinho = () => {
        if(contador > 0){
        setContador(contador + 1)
        }
    }

    const remCarrinho = () => {
        if(contador > 1){
        setContador(contador - 1)
        }
    }
    
    return(
        <>
        {/* <img src={produto.image} alt="" /> */}

        
        <div className="buybox">
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
                    <div className="linha2"></div>
            
                </div>
                <article className="card-produto">
                    <div className="sobreproduto">
                    <img className="product-image" src={produto[0].image} alt="imagem-produto"/>
                    <div className="descricaoproduto">
                        <h1 className="nomeproduto">{produto[0].nome}</h1>
            
                            <h5 className="prod-color">Cor:<p className="type-color"> Vermelho / Branco</p> </h5>
                            <h5 className="prod-size">Tamanho: <p className="type-size">42</p></h5>
                    </div>
                    </div>
                    <div className="quant-uni-val">
                        <div className="container-cont">
                            <div className="contador">
                                <button className = "remove" onClick={remCarrinho}>
                                    <img src={imgR} alt="retira" className="removeimg"/>
                                </button>
                                <p className="numero">{contador}</p>
                                {/* <input className="contador" onChange={contador} /> */}
                                <button className="adiciona" onClick={addCarrinho}>
                                    <img src={imgA} alt="adiciona" className="adicionaimg"/>
                                </button>
            
                            </div>
                            <button className="remover"><p>Remover Item</p></button>
                        </div>
                        <div className="valor-unitario">
                            <p className="valor-semdesc">R${produto[11].price},00</p>
                            <p className="valor-desc">R${produto[11].priceDiscont},00</p>
                        </div>
                        <div className="valorcont">
                            <p className="valor-semdesc">R${produto[11].price*contador},00</p>
                            <p className="valor-desc">R${produto[11].priceDiscont*contador},00</p>
                        </div>
                    </div>
                </article>
                <div className="linha2"></div>
                <div className="cupom-cep">
                    <div className="cupomdesc">
                        <h5 className="input-cupom">Cupom de desconto</h5>
                        <input type="text" className="cupom" placeholder="Insira seu código"/>
                        <button className="OK">OK</button>
                    </div>
                    <div className="cep">
                        <h5 className="input-cep">Cupom de desconto</h5>
                            <input type="text" className="incep" placeholder="Insira seu CEP"/>
                            <button className="OK">OK</button>
                    </div>
                </div>
            </section>
            <section className="resumo-pedido">
                <p className="resumo">Resumo</p>
                <div className="linha2"></div>
                <div className="valores">
                    <div className="subtotal">
                        <p className="subtot">
                            Subtotal:
                        </p>
                        <p className="valor">
                            R${produto[11].price*contador},00
                        </p>
                    </div>
                    <div className="frete">
                        <p className="fret">
                            Frete:
                        </p>
                        <p className="valor-frete">
                            R$ 0,00
                        </p>
                    </div>
                    <div className="desconto">
                        <p className="discout">
                            Desconto:
                        </p>
                        <p className="valor-desconto">
                            R${(produto[11].price - produto[11].priceDiscont)*contador},00
                        </p>
                    </div>
                    <div className="total">
                        <p className="totalval">
                            Total:
                        </p>
                        <p className="valor-total">
                            R${produto[11].priceDiscont*contador},00
                        </p>
                    </div>
                    <button className="comprar">
                        <Link to="/compra-sucesso"></Link>
                        COMPRAR
                    </button>
                    
                </div>


                
            </section>
        </div>
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
