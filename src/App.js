import logo from "./logo.svg";
import "./App.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import CreateCellPopulationForm from "./controllers/createCellPopulationForm";
import CreateGatingStrategyForm from "./controllers/createGatingStrategyForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flow Cytometry</h1>
        <CreateCellPopulationForm />
        <CreateGatingStrategyForm />
      </header>
    </div>
  );
}
export default App;
