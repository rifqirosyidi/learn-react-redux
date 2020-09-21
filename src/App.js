import React from "react";
import ProductList from "./containers/product-list";
import ProductDetail from "./containers/product-detail";

function App() {
  return (
    <div style={{ display: "flex" }} className="App">
      <div>
        <h2>Product List</h2>
        <ProductList />
      </div>
      <div>
        <h2>Product Detail</h2>
        <ProductDetail />
      </div>
    </div>
  );
}

export default App;
