
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductLP from "../Pages/ProductLP";
import ProductVP from "../Pages/ProductVP";
import NotFound from "../Pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<ProductLP/>} />
        <Route path="/product" element={<ProductVP/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}
