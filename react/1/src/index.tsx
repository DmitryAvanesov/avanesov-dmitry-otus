import React from 'react';
import ReactDOM from "react-dom";
import { Greeting } from "./components/greeting";

ReactDOM.render(
  <Greeting
    awesomeness={parseFloat((Math.random() * 100).toFixed(1))}
  />,
  document.querySelector("#root")
);