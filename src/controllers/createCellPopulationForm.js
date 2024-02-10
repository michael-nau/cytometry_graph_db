import React, { useState } from "react";
import { CellPopulation } from "../db/CellPopulation";

// This component provides a UI for creating a cell population
function CreateCellPopulationForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const cellPopulation = new CellPopulation(); // Instance of your CellPopulation class

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      const result = await cellPopulation.createCellPopulation(name, value);
      console.log("Cell Population Created:", { result });
      // Optionally clear the form or give feedback to the user
      setName("");
      setValue("");
      alert("Cell Population Created Successfully");
    } catch (error) {
      console.error("Error creating cell population:", error);
      alert("Failed to create cell population");
    }
  };

  return (
    <div className="form-container">
      {" "}
      {/* Wrap your form in this div */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name of Cell Population:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Key Value (e.g. CD4, CD8, etc):
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Create Cell Population</button>
      </form>
    </div>
  );
}

export default CreateCellPopulationForm;
