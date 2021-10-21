import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Template from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Template />
  </StrictMode>,
  rootElement
);
