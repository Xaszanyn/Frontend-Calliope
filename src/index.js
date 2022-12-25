import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

window.addEventListener("scroll", scrollCheck);

function scrollCheck() {
  if (window.scrollY == 0) {
    document.querySelector("nav").classList.remove("smallNav");
    document.querySelector("h1").classList.remove("smallLogo");
  } else {
    document.querySelector("nav").classList.add("smallNav");
    document.querySelector("h1").classList.add("smallLogo");
  }
}
