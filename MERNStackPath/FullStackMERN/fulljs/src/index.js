import React from "react";
import ReactDOM from "react-dom";

import data from "./testData";
import App from "./components/App";

ReactDOM.render(
  <App initialData={window.initialData} />, 
  document.getElementById("root"));
