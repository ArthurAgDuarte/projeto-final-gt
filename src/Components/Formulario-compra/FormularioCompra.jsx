
import React, { useState } from 'react';
import './FormularioCompra.css';  
import img from '../../assets/icone.png';
import img2 from '../../assets/tenis.png';
import valor from '../../assets/valor.png';
import img3 from '../../assets/extrato.png';


export default function FormularioCompra(){
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
    <div className="formulario-container2">
           
           <div className="img-sucesso"><img src={img} className="sucesso"/> </div> 

      <h2 className="h2">Compra Realizada <br />com sucesso!</h2>
      <form onSubmit={handleSubmit}>

          <h5 className="h5">Informações Pessoais</h5>
      
        <div className="form-group2">
          <label htmlFor="nome">Nome:</label>
        </div>

        <div className="form-group2">
          <label htmlFor="CPF">CPF:</label>
        </div>


        <div className="form-group2">
          <label htmlFor="email">E-mail:</label>
        </div>

        <div className="form-group2">
          <label htmlFor="celular">Celular:</label>    
        </div>
        <hr />

         <h5>Informações de Entrega</h5>

        <div className="form-group2">
          <label htmlFor="endereco">Endereço:</label>  
        </div>

        <div className="form-group2">
          <label htmlFor="bairro">Bairro:</label>
        </div>

        <div className="form-group2">
          <label htmlFor="cidade">Cidade:</label> 
        </div>
        
        <div className="form-group2">
          <label htmlFor="cep">CEP:</label>
        </div>
        <hr />

        <h5 className="h5">Informações de Pagamento</h5>

        <div className="form-group2">
          <label htmlFor="email">Titular do Cartão:</label> 
        </div>


        <div className="form-group2">
          <label htmlFor="numeroCartao">Número do Cartão:</label>
        </div>
        <hr />
          
            


        <button type="submit" className="comprado">Voltar Para o Home</button>

      </form>
    </div>
  );
};


//