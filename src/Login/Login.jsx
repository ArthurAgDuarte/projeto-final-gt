import React from 'react';
import './LoginPage.css'; // Adicione um arquivo CSS separado para estilização
import google from '../assets/google.png';
import facebook from '../assets/facebook.png'
import img from '../assets/img.png'
import tenis1 from '../assets/ténis1.png'
import tenis2 from '../assets/ténis2.png'


export default function LoginPage() {
  return (
    <div className="login-container">

             <div className="tenis">
                <img src={tenis1} alt="icon-img" /> 
                <img src={tenis2} alt="icon-img" /> 
             </div>


      <div className="login-card">
        <h2>Crie sua conta</h2>
        <p>
          Já possui uma conta? <a href="/login">Entre aqui</a>.
        </p>
        <form>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Insira seu email"
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
      </div>
    
  );
}

