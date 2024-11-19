import "./style.css";
// import  { limit } from "../../Pages/ProductLP";

export function ResultFor({ limit }) {
  return (
    <div className="resultContainer">
        <h1>Resultados para: "Tênis" - </h1>
        <h2>{`${limit} produtos encontrados`}</h2>
    </div>
  );
}