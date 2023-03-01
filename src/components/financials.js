import React from "react";
import productRevenue from "../data/productRevenue.json";

function getNonSerializedInventoryCount(selectedProduct, inventoryData) {
  const nonSerializedInventory = inventoryData.filter(
    (item) =>
      item.productId === selectedProduct.id &&
      item.count !== undefined &&
      item.count > 0
  );

  const nonSerializedInventoryCount = nonSerializedInventory.reduce(
    (total, item) => total + item.count,
    0
  );

  const nonSerializedInventoryValue = nonSerializedInventoryCount * 1200;

  return {
    count: nonSerializedInventoryCount,
    value: nonSerializedInventoryValue,
  };
}

function Financial({
  selectedProduct,
  inventoryData,
  nonSerializedInventoryData,
}) {
  {
    const {
      count: nonSerializedInventoryCount,
      value: nonSerializedInventoryValue,
    } = getNonSerializedInventoryCount(selectedProduct, inventoryData);
    console.log("Non-serialized Inventory Count:", nonSerializedInventoryCount);
    console.log("Non-serialized Inventory Value:", nonSerializedInventoryValue);
  }

  const nonSerializedInventoryCount = getNonSerializedInventoryCount(
    selectedProduct,
    inventoryData,
    nonSerializedInventoryData
  );
  console.log("Non-serialized Inventory Count:", nonSerializedInventoryCount);

  const matchingProductRevenue = productRevenue.find(
    (item) => item.productId === selectedProduct.id
  );

  const monthlyRevenue = matchingProductRevenue
    ? matchingProductRevenue.monthlyRevenue
    : 0;

  const matchingInventoryItems = inventoryData.filter(
    (item) => item.productId === selectedProduct.id
  );

  const inventoryCount = matchingInventoryItems.length;

  // const nonSerializedInventoryROI = nonSerializedInventoryCount
  //  ? (monthlyRevenue * 12) / (1200 * inventoryCount)
  // : 0;

  const inventoryROI = inventoryCount
    ? (monthlyRevenue * 12) / (40000 * inventoryCount)
    : 0;

  return (
    <div className="financials-container">
      <div className="monthly-revenue">
        <div className="revenue-title">Trailing 30 Days Revenue:</div>
        <div className="revenue-value">${monthlyRevenue.toFixed(2)}</div>
      </div>
      <div>
        <h2> Annual ROI </h2>
        <div></div>
        <div className="roi-title">Serialized Inventory</div>
        <div className="roi-value">{`${(inventoryROI * 100).toFixed(2)}%`}</div>
      </div>
    </div>
  );
}

export default Financial;
