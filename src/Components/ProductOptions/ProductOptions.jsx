// Opções do Produto para complementar os Detalhes do Produto

import { UseState } from "react";
import "./ProductOptions.css";
import { useState } from "react";

export function ProductOptions() {
  const options_tamanhos = [39, 40, 41, 42, 43];
  const options_cores = ["#000", "#fff", "#6feeff", "#ff6969"];

  const [tamanhoAtivo, setTamanhoAtivo] = useState(null);
  const [corAtiva, setCorAtiva] = useState(null);

  const selectTamanho = (index) => {
    setTamanhoAtivo(index === tamanhoAtivo ? null : index);
  };

  const selectCor = (index) => {
    setCorAtiva(index === corAtiva ? null : index);
  };

  return (
    <section className="product-options-container">
      <h3>Tamanho</h3>
      <div></div>
    </section>
  );
}
