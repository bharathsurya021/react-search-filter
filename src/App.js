import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import productsData from './data'
import { useState } from "react";

function App() {
  const [filterText, setFilterText] = useState('')
  const [stocks, setStocks] = useState(false)
  return (
    <div className="small-container">
      <h1>Search and filter data</h1>
      <SearchBar filterText={filterText} stocks={stocks} products={productsData} setFilterText={setFilterText} setStocks={setStocks} />
      <ProductTable products={productsData} filterText={filterText} stocks={stocks} />
    </div>
  );
}

export default App;
