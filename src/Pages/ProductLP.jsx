import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import ProductListing from "../Components/ProductListing/ProductListing";
import FilterGroup from "../Components/FilterGroup/FilterGroup";
export default function ProductLP() {
  return (
    <>
      <Header/>
      <main>
      <FilterGroup />
      <ProductListing limit={12}/>  
      </main> 
      <Footer/>
     </>
);
}