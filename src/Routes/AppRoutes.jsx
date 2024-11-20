
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductLP from "../Pages/ProductLP";
import ProductVP from "../Pages/ProductVP";
import NotFound from "../Pages/NotFound";
import {Carrinho} from "../Pages/Carrinho";
import Login from "../Components/Login/Login";
import Cadastro from "../Pages/Cadastro";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<ProductLP/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/product" element={<ProductVP/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        
      </Routes>
    </>
  );
}
