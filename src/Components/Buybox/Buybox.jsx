import "../Buybox/Buybox.css"

export default function Buybox(){
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
        </section>
        </>
    );
}