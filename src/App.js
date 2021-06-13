import React, { useState } from "react";
import "./App.css";
import BarChart from "./Components/BarChart";
import FormComponent from "./Components/Form";

const App = () => {
  const [chartObj, setChartObj] = useState({});
  return (
    <div className="container">
      <h1>Academic Performance Evaluation</h1>
      <FormComponent setMyData={setChartObj} myData={chartObj} />
      <BarChart data={chartObj} />
    </div>
  );
};

export default App;
