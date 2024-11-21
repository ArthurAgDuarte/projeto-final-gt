
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductLP from "../Pages/ProductLP";
import ProductVP from "../Pages/ProductVP";
import NotFound from "../Pages/NotFound";
import {Carrinho} from "../Pages/Carrinho";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<ProductLP/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/produto/:id" element={<ProductVP/>} />
        <Route path="*" element={<NotFound/>} />
      
        
      </Routes>
    </>
  );
}
