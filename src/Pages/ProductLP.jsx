import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import ProductListing from "../Components/ProductListing/ProductListing";
import FilterGroup from "../Components/FilterGroup/FilterGroup";
import { ResultFor } from '../Components/resultFor/resultFor.jsx';

import "./style.css"
export default function ProductLP() {
  const view = 12;
  const columns = 3;
  const rows = 4; 

  return (
    <>
      <Header/>
      <ResultFor limit ={view} />
      <main className='teste'>
      <FilterGroup />
      <ProductListing limit={view} rows={rows} columns={columns}/>  
      </main>
      <Footer/>
     </>
);
}