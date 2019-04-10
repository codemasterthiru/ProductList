import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { ProductList } from "./ProductList";

function App() {
  return (
    <div className="App">
      <h1>Product List Page</h1>
      <h2>Code master thiru :)</h2>
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
