import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import ProductListing from "../Components/ProductListing/ProductListing";
import FilterGroup from "../Components/FilterGroup/FilterGroup";
import { ResultFor } from '../Components/resultFor/resultFor.jsx';
import "./style.css"
export default function ProductLP() {
  return (
    <>
      <Header/>
      <ResultFor />
      <main className='teste'>
      <FilterGroup />
      <ProductListing limit={12}/>  
      </main>
      <Footer/>
     </>
);
}