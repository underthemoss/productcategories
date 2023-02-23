import React, { useEffect, useState } from "react";
import _workers from "../data/workers.json";

function Worker({ selectedProduct }) {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    if (selectedProduct) {
      const matchingWorkers = _workers.filter((worker) =>
        selectedProduct.purpose.some((skillId) =>
          worker.skills.includes(skillId.toString())
        )
      );
      setWorkers(matchingWorkers);
    }
  }, [selectedProduct]);

  return (
    <div className="middle-column">
      <h2>Workers:</h2>
      <ul>
        {workers.map((worker) => (
          <li key={worker.id}>
            <p>Name: {worker.name}</p>
            <p>ID: {worker.id}</p>
            <p>Skills: {worker.skills.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Worker;
