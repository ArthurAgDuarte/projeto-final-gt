import React from 'react';
import './LoginPage.css'; // Adicione um arquivo CSS separado para estilização
import img from '../../assets/img.png'
import tenis1 from '../../assets/ténis1.png';
import tenis2 from '../../assets/ténis2.png';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login-container">

      <div className="login-card">
        <div className="po">
          <h2 className="crieconta">Acesse sua conta</h2>
          <p className="criarconta">
            Novo cliente? Então registre-se <Link to="/cadastro" className="linkcadastro">aqui</Link>.
          </p>
        </div>
        <form className="userlogin">
          <label className="logar">Login</label>
          <input
            type="email"
            className="email"
            placeholder="Insira seu email"
            required
          />  

        <label className="digitesenha">Senha</label>
          <input
            type="password"
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
                  <div className="tenis2"><img src={tenis2} alt="icon-img" /> </div>
               </div>
</div>
      </div>
    
    
  );
}

