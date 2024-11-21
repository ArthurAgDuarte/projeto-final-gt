import React from "react";
import "./infostyle.css";

export default function Info() {
  return (
    <>
      <div className="container">
        <section className="menu">
          <ul>
            <h3 className="title">Meu Perfil</h3>
            <hr />
            <li><a href="#">Sobre</a></li>
            <hr />
            <li><a href="#">Contato</a></li>
            <hr />
            <li><a href="#">Ajuda</a></li>
          </ul>
        </section>

        <section className="conteudo">
         <h2 className="titulo">Minhas Informações</h2> 
         <hr className="line" />
        <div className="InfoUser">
        <h1 className="Titulo">Informações Pessoais</h1>
        

          </div>
        </section>

      </div>
    </>
  );
}