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
      <div>
        {options_tamanhos.map((optionTamanho, index) => (
          <span
            key={index}
            className={index === tamanhoAtivo ? "active-tamanho" : ""}
            onClick={() => selectTamanho(index)}
          >
            {optionTamanho}
          </span>
        ))}
      </div>
      <h3>Cores</h3>

      <div>
        {options_cores.map((optionCor, index) => (
          <span
            key={index}
            className={index === corAtiva ? "active-cor" : ""}
            style={{ backgroundColor: optionCor }}
            onClick={() => selectCor(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
