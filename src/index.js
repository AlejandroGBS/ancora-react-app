import ReactDOM from "react-dom";
import React from "react";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import Routes from "./routes/index";
import Theme from "./resources/Theme";
import "./styles.css"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>,
  rootElement
);
