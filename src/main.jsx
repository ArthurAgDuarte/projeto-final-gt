
import "./index.css";
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FilterGroup from './Components/FilterGroup/FilterGroup.jsx';
import ProductListing from './Components/ProductListing/ProductListing.jsx';
import ProductCard from './Components/ProductCard/ProductCard.jsx';
import App from './App.jsx';

const marcas = [' Adidas', ' Balenciaga', ' K-Swiss', ' Nike', ' Puma'];
const categoria = ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'];
const genero = ['Masculino', 'Feminino', 'Unisex'];

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>
);