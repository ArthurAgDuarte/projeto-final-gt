import React from 'react';
import './LoginPage.css'; // Adicione um arquivo CSS separado para estilização

export default function LoginPage() {
  return (
    <div className="login-container">
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
        <div className="social-login">
          <p>Ou faça login com</p>
          <div className="social-buttons">
            <button className="social-btn google">G</button>
            <button className="social-btn facebook">F</button>
          </div>
        </div>
      </div>
    </div>
  );
}

