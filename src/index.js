import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { render } from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: "bottom center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

render(<Root />, document.getElementById("root"));

//ReactDOM.render(<App />, document.querySelector("#root"));
