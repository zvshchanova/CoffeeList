import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { returnName } from "./returnName";
import { MyList } from "./MyList";
import "./styles.css";
// import App from "./App";

function App(props) {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(
    function change() {
      console.log("useEffect:", counter);
    },
    [counter]
  );

  function buttonClick() {
    setCounter(counter + 1);
    setColor("red");
  }

  return (
    <div className="App">
      <div style={{ background: "lightgreen" }}>
        <p style={styleName}>{returnName("Zhanna")} </p>
        <p>You have get {counter} likes</p>
        <button class="button-72" onClick={buttonClick}>
          Click me
        </button>
        <hr />
      </div>
      <div>
        <MyList />
      </div>
    </div>
  );
}
const styleName = { color: "red" };
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
