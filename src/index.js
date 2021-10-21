import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing";
import Template from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Template />
  </StrictMode>,
  rootElement
);
