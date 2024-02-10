import React, { useState } from "react";
import { GatingStrategy } from "../db/GatingStrategy";

// This component provides a UI for creating a gating strategy
function CreateGatingStrategyForm() {
  const [parentValue, setParentValue] = useState("");
  const [childValue, setChildValue] = useState("");
  const [criteria, setCriteria] = useState("");
  const [strategyId, setStrategyId] = useState("");
  const gatingStrategy = new GatingStrategy(); // Instance of your GatingStrategy class

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    try {
      const result = await gatingStrategy.createGatingStrategy(
        parentValue,
        childValue,
        criteria,
        strategyId
      );
      console.log("Gating Strategy Created:", result);
      // Optionally clear the form or give feedback to the user
      setParentValue("");
      setChildValue("");
      setCriteria("");
      setStrategyId("");
      alert("Gating Strategy Created Successfully");
    } catch (error) {
      console.error("Error creating gating strategy:", error);
      alert("Failed to create gating strategy");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Parent Cell Population Value:
            <input
              type="text"
              value={parentValue}
              onChange={(e) => setParentValue(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Child Cell Population Value:
            <input
              type="text"
              value={childValue}
              onChange={(e) => setChildValue(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Gating Criteria:
            <input
              type="text"
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Strategy ID (optional):
            <input
              type="text"
              value={strategyId}
              onChange={(e) => setStrategyId(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Create Gating Strategy</button>
      </form>
    </div>
  );
}

export default CreateGatingStrategyForm;
