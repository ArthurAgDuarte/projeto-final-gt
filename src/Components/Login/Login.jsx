import React, { useState } from "react";
import "./LoginPage.css"; // Adicione um arquivo CSS separado para estilização
import img from "../../assets/img.png";
import tenis1 from "../../assets/ténis1.png";
import tenis2 from "../../assets/ténis2.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();

      if (response.ok) {
        // Salvar dados no localStorage
        localStorage.setItem("user", JSON.stringify(result.user));

        alert("Login realizado com sucesso!");

        // Redirecionar para outra página, se necessário
        // window.location.href = '/dashboard';
      } else {
        alert("Erro ao realizar login.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="po">
          <h2 className="crieconta">Acesse sua conta</h2>
          <p className="criarconta">
            Novo cliente? Então registre-se{" "}
            <Link to="/cadastro" className="linkcadastro">
              aqui
            </Link>
            .
          </p>
        </div>
        <form className="userlogin" onSubmit={handleSubmit}>
          <label className="logar">Login</label>
          <input
            type="email"
            className="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Insira seu email"
            required
          />

          <label className="digitesenha">Senha</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="senha"
            placeholder="Insira sua senha"
            required
          />
          <div className="acoeslogin">
            <div className="esqueciSenha">
              <Link to="/login">Esqueci minha senha</Link>
            </div>

            <button type="submit" className="create-account-button">
              Acessar Conta
            </button>

            <button className="social-btn">
              <img src={img} className="icon-img" />
            </button>
          </div>
        </form>
      </div>

      <div className="container2">
        <div className="tenis">
          <img src={tenis1} alt="icon-img" />
          <div className="tenis2">
            <img src={tenis2} alt="icon-img" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
