import React, { useState } from "react";
import ProductSidebar from "./components/ProductSidebar";
import ProductDetails from "./components/ProductDetails";
import RightSidebar from "./components/rightSideBar.js";

import "./App.css";
import physicalProducts from "./data/physicalProducts.json";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ProductSidebar
          products={physicalProducts}
          selectedProduct={selectedProduct}
          onProductClick={handleProductClick}
        />
      </div>
      <div className="main">
        <ProductDetails selectedProduct={selectedProduct} />
        <RightSidebar selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}

export default App;
