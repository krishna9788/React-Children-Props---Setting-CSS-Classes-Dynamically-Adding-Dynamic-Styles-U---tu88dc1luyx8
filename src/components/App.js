import React, { useState, useEffect } from "react";

import "../styles/App.css";

import ChildComponent from "./ChildComponent";

const App = () => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div id="main">
      <ChildComponent>
        <input id="input" onChange={onInputChange} />
      </ChildComponent>

      <p id="output">{Number(input) * Number(input)}</p>
    </div>
  );
};

export default App;
