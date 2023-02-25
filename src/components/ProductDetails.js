import React, { useEffect, useState } from "react";
import physicalProducts from "../data/physicalProducts.json";
import _serviceProducts from "../data/serviceProducts.json";
import inventoryData from "../data/serializedInventory.json";
import nonSerializedInventoryData from "../data/nonSerializedInventory.json";
import Financial from "./financials";

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
    <div className="product-details-container">
      {selectedProduct ? (
        <div>
          <div>
            <div className="section-title">Product Category:</div>
            <div className="section-content">{category.join(" > ")}</div>
          </div>
          {worksWith.length > 0 && (
            <div>
              <div className="section-title">Works with:</div>
              <div className="section-content-workswith">
                <ul>
                  {worksWith.map((p) => (
                    <li key={p.id}>{p.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {purpose.length > 0 && (
            <div>
              <div className="section-title">Purpose: service products:</div>
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
          <Financial
            selectedProduct={selectedProduct}
            inventoryData={inventoryData}
            nonSerializedInventoryData={nonSerializedInventoryData}
          />
        </div>
      ) : (
        <div>Select a product</div>
      )}
    </div>
  );
}

export default ProductDetails;
