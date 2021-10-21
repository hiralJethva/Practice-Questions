import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import FontSize from "./FontSize";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FontSize />
  </StrictMode>,
  rootElement
);
