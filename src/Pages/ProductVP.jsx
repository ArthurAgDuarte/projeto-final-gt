import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import ProductListing from '../Components/ProductListing/ProductListing.jsx';
import ProductDetails from "../Components/ProductDetails/ProductDetails";
export default function ProductVP(){
    return(
    <>
        <Header/>
        <ProductDetails/>
        <ProductListing limit={4} rows={1} columns={4}/> 
        <Footer/>
</>
);
}