import React, { useState } from "react";
import ProductSidebar from "./components/ProductSidebar";
import ProductDetails from "./components/ProductDetails";
import RightSidebar from "./components/rightSideBar";
import Worker from "./components/worker";

import "./App.css";
import physicalProducts from "./data/physicalProducts.json";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="sidebar">
                <ProductSidebar
                  products={physicalProducts}
                  selectedProduct={selectedProduct}
                  onProductClick={handleProductClick}
                />
              </div>
            </td>
            <td>
              <div className="product-details-container">
                <ProductDetails selectedProduct={selectedProduct} />
              </div>
            </td>
            <td>
              <div className="worker-container">
                <Worker selectedProduct={selectedProduct} />
              </div>
            </td>
            <td>
              <div className="right-sidebar-container">
                <RightSidebar selectedProduct={selectedProduct} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
