import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { FilterProvider } from "./context/FilterContext";
import { SidebarProvider } from "./context/SidebarContext";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SidebarProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </SidebarProvider>
  </StrictMode>,
  rootElement
);
