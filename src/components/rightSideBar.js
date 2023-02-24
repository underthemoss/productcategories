import React, { useEffect, useState } from "react";
import serializedInventory from "../data/serializedInventory.json";
import nonSerializedInventory from "../data/nonSerializedInventory.json";
import products from "../data/physicalProducts.json";

function RightSidebar({ selectedProduct }) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Find the corresponding physical product in the inventory data
    const serializedInventoryForProduct = selectedProduct
      ? serializedInventory.filter((i) => i.productId === selectedProduct.id)
      : [];
    const nonSerializedInventoryForProduct = selectedProduct
      ? nonSerializedInventory.filter((i) => i.productId === selectedProduct.id)
      : [];
    console.log("Non-serialized inventory:", nonSerializedInventoryForProduct);

    const matchingInventory = [
      ...serializedInventoryForProduct,
      ...nonSerializedInventoryForProduct,
    ];

    setInventory(matchingInventory);
  }, [selectedProduct]);

  const isSerialized = (item) => {
    return "serialNumber" in item;
  };

  return (
    <div className="section right-sidebar-section">
      <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>Inventory:</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {inventory.map((item) => (
          <li key={item.id}>
            {isSerialized(item) ? (
              <div>
                <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                  {item.serialNumber}
                </h3>
                <p
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "normal",
                    margin: "0.5em 0",
                  }}
                >
                  Name:{" "}
                  {products.find((p) => p.id === item.productId)?.name ||
                    "Unknown"}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "normal",
                    margin: "0.5em 0",
                  }}
                >
                  Location: {item.location.address}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "normal",
                    margin: "0.5em 0",
                  }}
                >
                  Business Unit: {item.businessUnit}
                </p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "normal",
                    margin: "0.5em 0",
                  }}
                >
                  Category: {item.category.join(", ")}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "normal",
                    margin: "0.5em 0",
                  }}
                >
                  Count: {item.count}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "normal",
                    margin: "0.5em 0",
                  }}
                >
                  Location: {item.inventoryLocation.address},{" "}
                  {item.inventoryLocation.city}, {item.inventoryLocation.state}{" "}
                  {item.inventoryLocation.zipcode}
                </p>
                <p
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "normal",
                    margin: "0.5em 0",
                  }}
                >
                  Business Unit: {item.businessUnit}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightSidebar;
