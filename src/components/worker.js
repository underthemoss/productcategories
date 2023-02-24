import React, { useEffect, useState } from "react";
import workers from "../data/workers.json";
import serviceProducts from "../data/serviceProducts.json";

function Worker({ selectedProduct }) {
  const [matchingWorkers, setMatchingWorkers] = useState([]);

  useEffect(() => {
    if (selectedProduct) {
      const matchingWorkers = workers.filter((worker) =>
        selectedProduct.purpose.some((skillId) =>
          worker.skills.includes(skillId.toString())
        )
      );
      setMatchingWorkers(matchingWorkers);
    } else {
      setMatchingWorkers([]);
    }
  }, [selectedProduct]);

  return (
    <div className="section worker-section">
      <h2>Workers:</h2>
      <ul>
        {matchingWorkers.map((worker) => (
          <li key={worker.id}>
            <p>Name: {worker.name}</p>
            <p>ID: {worker.id}</p>
            <p className="skills">
              Skills:{" "}
              {worker.skills
                .map((skill) => {
                  const serviceProduct = serviceProducts.find(
                    (product) => product.id === Number(skill)
                  );

                  return serviceProduct ? serviceProduct.name : "";
                })
                .join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Worker;
