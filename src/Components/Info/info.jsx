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

        <section className="info-area">
        <p className="Inicial">Minhas Infomações</p>
        <hr className="divisor" />
        <div className="personal-info">
        <h1>Informações Pessoais</h1>
        <h2>Nome: <span className="highlight">Lucas Almeida</span></h2>
        <h2>Cpf: <span className="highlight">985.657.158-15</span></h2>
        <h2>Email: <span className="highlight">Lucas.almeida@gmail.com</span></h2>
        <h2>Celular: <span className="highlight">(85) 98575-2562</span></h2>
        <hr className="divisor" />
        </div>


        <div className="delivery-info">
        <h1>Informações de Entrega</h1>
        <h2>Endereço: <span className="highlight">Av. Frei Cirilo, 269</span></h2>
        <h2>Bairro: <span className="highlight">Messejana</span></h2>
        <h2>Cidade: <span className="highlight">Fortaleza, Ceara</span></h2>
        <h2>Cep: <span className="highlight">(85) 98578-698</span></h2>
        </div>
        </section>
            </div>
    </>
  );
}