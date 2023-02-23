import React, { useEffect, useState } from "react";
import physicalProducts from "../data/physicalProducts.json";
import _serviceProducts from "../data/serviceProducts.json";

function ProductDetails({ selectedProduct }) {
  const [worksWith, setWorksWith] = useState([]);
  const [purpose, setPurpose] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    console.log("selectedProduct:", selectedProduct);
    if (selectedProduct) {
      setWorksWith(
        physicalProducts.filter((p) => selectedProduct.worksWith.includes(p.id))
      );
      setPurpose(
        selectedProduct.purpose.map((pId) =>
          _serviceProducts.find((sp) => sp.id === pId)
        )
      );
      setCategory(selectedProduct.category);
    }
  }, [selectedProduct]);

  return (
    <div>
      {selectedProduct ? (
        <div>
          <div className="section">
            <div className="section-title">Product Category:</div>
            <div className="section-content">{category.join(" > ")}</div>
          </div>
          {worksWith.length > 0 && (
            <div className="section">
              <div className="section-title">Works with:</div>
              <div className="section-content">
                <ul>
                  {worksWith.map((p) => (
                    <li key={p.id}>{p.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {purpose.length > 0 && (
            <div className="section">
              <div className="section-title">Purpose:</div>
              <div className="section-content">
                <ul>
                  {purpose.map((p) => (
                    <li key={p.name}>
                      {p.name} (
                      {`$${p.price} per ${p.unit ? p.unit.toLowerCase() : ""}`})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>Select a product</div>
      )}
    </div>
  );
}

export default ProductDetails;
