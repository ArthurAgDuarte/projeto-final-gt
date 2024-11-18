import "./ProductDetails.css";
// a
export function ProductDetails() {
  return (
    <div className="details-container">
      <header className="details-header">
        <h1>Tênis Nike Revolution 6 Next Nature Masc</h1>
        <h2>Casual | Nike | Ref: 5921</h2>
      </header>
      <main className="details-main">
        <p>
          <span>
            <div>R$</div>219,00
          </span>
          <span>219,00</span>
        </p>
        <h3>Descrição do produto</h3>
        <p>
          Tênis Nike masculino casual combina estilo e conforto para o dia a
          dia. Feito com materiais leves e respiráveis, possui design versátil
          que se adapta a diferentes ocasiões, do trabalho a passeios casuais. A
          sola em borracha garante boa aderência, e o amortecimento interno
          proporciona maciez e suporte para os pés, ideal para quem busca
          praticidade e um visual esportivo com um toque urbano.
        </p>
      </main>
      <footer className="details-footer">
        <button>Comprar</button>
      </footer>
    </div>
  );
}
