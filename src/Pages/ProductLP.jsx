import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import ProductListing from "../Components/ProductListing/ProductListing";
import FilterGroup from "../Components/FilterGroup/FilterGroup";
import "./style.css"
export default function ProductLP() {
  return (
    <>
      <Header/>
      <main className='teste'>

      <FilterGroup />
      <ProductListing limit={12}/>  
      </main>
      <Footer/>
     </>
);
}