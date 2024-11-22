import "./ProductDetails.css";
import { ProductOptions } from "../ProductOptions/ProductOptions";
import Star from "../../assets/Path.svg";
import Star_ from "../../assets/Star 01.svg";
import StarWhite from "../../assets/star-white.svg";
import Sneaker from "../../assets/sneaker.svg";

export default function ProductDetails() {
  return (
    <div className="details-container">
      {/* Coluna da Imagem */}
      <div className="details-image">
        <img src={Sneaker} alt="Tênis Nike Revolution 6 Next Nature Masc" />
      </div>

      {/* Coluna dos Detalhes */}
      <div className="details-content">
        <header className="details-header">
          <h1>Tênis Nike Revolution 6 Next Nature Masc</h1>
          <p>Casual | Nike | Ref: 5921</p>

          <div className="rating">
            <img src={Star_} alt="Star" />
            <img src={Star_} alt="Star" />
            <img src={Star_} alt="Star" />
            <img src={Star_} alt="Star" />
            <img src={Star} alt="Star" />
          </div>
          <div className="star-class">
            <span>
              <p>4.8</p>
              <img src={StarWhite} />
            </span>
          </div>
          <span>(90 avaliações)</span>
        </header>

        <main className="details-main">
          <p className="price">
            <span>R$ 219,00</span>
          </p>
          <h3>Descrição do produto</h3>
          <p>
            Tênis Nike masculino casual combina estilo e conforto para o dia a
            dia. Feito com materiais leves e respiráveis, possui design versátil
            que se adapta a diferentes ocasiões, do trabalho a passeios casuais.
            A sola em borracha garante boa aderência, e o amortecimento interno
            proporciona maciez e suporte para os pés, ideal para quem busca
            praticidade e um visual esportivo com um toque urbano.
          </p>
        </main>

        <footer className="details-footer">
          {/* Container das opções e botão */}
          <div className="options-and-buy-button">
            <ProductOptions />
            <button className="buy-button">Comprar</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
