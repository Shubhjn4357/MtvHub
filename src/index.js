import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
ReactDom.render(
  <>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </>
  ,document.getElementById("root"));