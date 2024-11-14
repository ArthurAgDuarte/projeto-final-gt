// src/FormularioCompra.js
import React, { useState } from 'react';
import './FormularioCompra.css';  
import img from '../../assets/icone.png';
import img2 from '../../assets/tenis.png';
import valor from '../../assets/valor.png';


const FormularioCompra = () => {
  const [formData, setFormData] = useState({
    InformacoesPesoais: '',
    nome: '',
    email: '',
    endereco: '',
    numeroCartao: '',
    dataVencimento: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Compra realizada:', formData);
    alert('Compra realizada com sucesso!');
  };

  return (
    <div className="formulario-container">
           
           <div className="img"> <img src={img}/></div>  

      <h2>Compra Realizada <br />com sucesso!</h2>
      <form onSubmit={handleSubmit}>

          <h5>Informações Pessoais</h5>
      
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
        </div>

        <div className="form-group">
          <label htmlFor="CPF">CPF:</label>
        </div>


        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
        </div>

        <div className="form-group">
          <label htmlFor="celular">Celular:</label>    
        </div>
        <hr />

         <h5>Informações de Entrega</h5>

        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>  
        </div>

        <div className="form-group">
          <label htmlFor="bairro">Bairro:</label>
        </div>

        <div className="form-group">
          <label htmlFor="cidade">Cidade:</label> 
        </div>
        
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
        </div>
        <hr />

        <h5>Informações de Pagamento</h5>

        <div className="form-group">
          <label htmlFor="email">Titular do Cartão:</label> 
        </div>


        <div className="form-group">
          <label htmlFor="numeroCartao">Número do Cartão:</label>
        </div>
        <hr />
          
            
            <div className="sapato">

            <h4>Resumo da compra</h4>

              <img src={img2}/>
            </div>

            <div className="valor">
              <img src={valor} />
            </div>

        <button type="submit">Voltar Para o Home</button>
      </form>
    </div>
  );
};

export default FormularioCompra;
