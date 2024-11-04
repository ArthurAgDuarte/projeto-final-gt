import React from 'react';
import './LoginPage.css'; // Adicione um arquivo CSS separado para estilização
import img from '../assets/img.png'
import tenis1 from '../assets/ténis1.png';
import tenis2 from '../assets/ténis2.png';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="login-container">

      <div className="login-card">
        <h2>Crie sua conta</h2>
        <p>
          Novo cliente? Então registre-se <Link href="/login">a aqui</Link>.
        </p>
        <form>
          <label htmlFor="email">Login *</label>
          <input
            type="email"
            id="email"
            placeholder="Insira seu email"
            required
          />  

        <label htmlFor="senha">Senha *</label>
          <input
            type="senha"
            id="senha"
            placeholder="Insira sua senha"
            required
          /> 
          
          <button type="submit" className="create-account-button">
            Criar Conta
          </button>
        </form>
        
        <button className="social-btn">
          <img src={img} className="icon-img" />
           </button>

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

