import React from 'react';
import './FormCadastro.css';


export default function FormCadastro() {
  return (
  <>
      
      <h1 className="h1cria">Criar Conta</h1>

    <div className="form-cadastro-container">

      
      <form className="formcadastro">

      <div className="section-2">
          <h3 className="infocad">Informações Pessoais</h3>
          <hr className="linha"/> </div>

        <div className="section">
         

          <div className="form-group">
            <label>Nome Completo *</label>
            <input type="text" placeholder="Insira seu nome" required />
            
          </div>


          <div className="form-group">
            <label>CPF *</label>
            <input type="text" placeholder="Insira seu CPF" required />
          </div>


          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Insira seu email" required />
          </div>


          <div className="form-group">
            <label>Celular *</label>
            <input type="tel" placeholder="Insira seu celular" required />
          </div>
        </div>

        <div className="section-entrega">
          <h3 className="infocad">Informações de Entrega</h3>
          <hr className="linha"/>
          <div className="form-group">
            <label>Endereço *</label>
            <input type="text" placeholder="Insira seu endereço" required />
          </div>


          <div className="form-group">
            <label>Bairro *</label>
            <input type="text" placeholder="Insira seu bairro" required />
          </div>


          <div className="form-group">
            <label>Cidade *</label>
            <input type="text" placeholder="Insira sua cidade" required />
          </div>


          <div className="form-group">
            <label>CEP *</label>
            <input type="text" placeholder="Insira seu CEP" required />
          </div>

          
          <div className="form-group">
            <label>Complemento</label>
            <input type="text" placeholder="Insira complemento" />
          </div>
        </div>

        <div className="email-loja">
          <input type="checkbox" id="newsletter" className="newsletter"/>
          <label htmlFor="newsletter" className="labelnews">
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envio pode variar de acordo com a interação do cliente.
          </label>
        </div>

        <button type="submit" className="submit-button">Criar Conta</button>
      </form>
    </div>
  </>
  );
}


