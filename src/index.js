import React from "react";
import { render } from "react-dom";
import "./index.css";

import Shop from "./Shop.js";


function App() {
  return <div className="container mx-auto px-4">
          <Shop />
        </div>;
}

render(<App />, document.querySelector("#root"));
