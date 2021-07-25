import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { FilterProvider } from "./context/FilterContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </StrictMode>,
  rootElement
);
