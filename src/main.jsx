import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FilterGroup from './Components/FilterGroup/FilterGroup.jsx';
import ProductListing from './Components/ProductListing/ProductListing.jsx';

const marcas = [' Adidas', ' Balenciaga', ' K-Swiss', ' Nike', ' Puma'];
const categoria = ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'];
const genero = ['Masculino', 'Feminino', 'Unisex'];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterGroup
      title="Filtrar por"
      marcasProps={marcas}
      categoriaProps={categoria}
      generoProps={genero}
    />
  </StrictMode>
);