import React, { useState } from "react";
import "./FormCadastro.css";

export default function FormCadastro() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    senha: "",
    cpf: "",
    cep: "",
    bairro: "",
    endereco: "",
    complemento: "",
    telefone: "",
    cidade: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = await response.json();

      if (response.ok) {
        console.log("Usuário criado com sucesso!");
        // navigate("/acessarconta");
        alert("Usuário criado com sucesso!");
        // window.locate.href = "/login"
      }
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      alert("Erro ao cadastrar.");
    }
  };
  console.log(user);

  return (
    <>
      <h1 className="h1cria">Criar Conta</h1>

      <div className="form-cadastro-container">
        <form className="formcadastro" onSubmit={handleSubmit}>
          <div className="section-2">
            <h3 className="infocad">Informações Pessoais</h3>
            <hr className="linha" />{" "}
          </div>

          <div className="section">
            <div className="form-group">
              <label>Nome Completo *</label>
              <input
                type="text"
                id="name"
                placeholder="Insira seu nome"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>CPF *</label>
              <input
                type="text"
                placeholder="Insira seu CPF"
                value={user.cpf}
                id="cpf"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
                          <label>Email *</label>
                          <input
                            type="email"
                            placeholder="Insira seu email"
                            value={user.email}
                            id="email"
                            onChange={handleChange}
                            required
                          />
                </div>

            <div className="form-group">
              <label>Senha *</label>
              <input
                type="password"
                placeholder="Insira seu celular"
                id="senha"
                value={user.senha}
                onChange={handleChange}
                required
              />
            </div>

            

            <div className="form-group">
              <label>Celular *</label>
              <input
                type="text"
                placeholder="Insira seu celular"
                value={user.telefone}
                id="telefone"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="section-entrega">
            <h3 className="infocad">Informações de Entrega</h3>
            <hr className="linha" />
            <div className="form-group">
              <label>Endereço *</label>
              <input
                type="text"
                placeholder="Insira seu endereço"
                value={user.endereco}
                id="endereco"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Bairro *</label>
              <input
                type="text"
                placeholder="Insira seu bairro"
                value={user.bairro}
                id="bairro"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Cidade *</label>
              <input
                type="text"
                placeholder="Insira sua cidade"
                value={user.cidade}
                id="cidade"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>CEP *</label>
              <input
                type="text"
                placeholder="Insira seu CEP"
                id="cep"
                value={user.cep}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Complemento</label>
              <input
                type="text"
                id="complemento"
                placeholder="Insira complemento"
                value={user.complemento}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="email-loja">
            <input type="checkbox" id="newsletter" className="newsletter" />
            <label htmlFor="newsletter" className="labelnews">
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envio pode variar de acordo com a interação
              do cliente.
            </label>
          </div>

          <button type="submit" className="submit-button">
            Criar Conta
          </button>
        </form>
      </div>
    </>
  );
}
