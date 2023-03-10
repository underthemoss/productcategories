import React from "react";
import PropTypes from "prop-types";

function ProductSidebar(props) {
  const { products, selectedProduct, onProductClick } = props;

  const handleClick = (product) => {
    // Call the onProductClick function passed from parent component
    onProductClick(product);
  };

  return (
    <div className="sidebar">
      <div className="product-title">Products</div>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick(product)}
          className={`product-item ${
            product === selectedProduct ? "selected" : ""
          }`}
          style={{
            backgroundColor:
              product === selectedProduct ? "#eee" : "transparent",
            fontWeight: product === selectedProduct ? "bold" : "normal",
            fontSize: product === selectedProduct ? "1.2em" : "1em",
            padding: "10px",
            margin: "5px",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out",
            lineHeight: "1.5",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span className="product-name">{product.name}</span>
        </div>
      ))}
    </div>
  );
}

ProductSidebar.propTypes = {
  products: PropTypes.array.isRequired,
  selectedProduct: PropTypes.object,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductSidebar;
