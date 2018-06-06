import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

console.log("here");

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
});