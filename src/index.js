import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  const [i, setI] = useState(0);
  // let i = 0;

  function incrementar() {
    setI(i + 1);
    console.log(i);
  }

  return (
    <div className="App">
      <h1>
        Hello {props.name} {i}
      </h1>
      <button onClick={incrementar}>Incrementar</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Alessandro" />, rootElement);
