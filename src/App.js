import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import "./index.css";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <h1>React Stater Project</h1>
    </div>
  );
};

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
